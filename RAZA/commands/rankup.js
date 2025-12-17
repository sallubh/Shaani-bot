/**
 * Rankup Command for Mariya Bot
 * Notifies users when they level up with a custom canvas image
 */

const { createCanvas, loadImage } = require('canvas');
const fs = require('fs-extra');
const axios = require('axios');
const path = require('path');

module.exports = {
  config: {
    name: 'rankup',
    version: '1.0.0',
    description: 'Level up hone par notification deta hai',
    usage: 'Automatic',
    credits: '𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭', // Original Credit Maintained
    role: 0,
    category: 'ECONOMY',
    hasPrefix: false,
    cooldown: 0,
  },

  // Manual trigger if needed
  run: async function ({ api, event }) {
    const { threadID, senderID } = event;

    try {
      if (!global.client.rankups || !global.client.rankups.has(senderID)) {
        return api.sendMessage("Aapka koi pending rankup notification nahi hai.", threadID);
      }

      const rankupData = global.client.rankups.get(senderID);
      global.client.rankups.delete(senderID);

      await sendLevelUpNotification(api, threadID, senderID, rankupData);
    } catch (error) {
      console.error('Error in rankup notification:', error.message);
    }
  },

  // Background listener jo level up check karta rahega
  onLoad: function ({ api }) {
    if (!global.client.rankupListenerActive) {
      global.client.rankupListenerActive = true;
      let isProcessing = false;

      // Har 5 second mein check karega
      setInterval(async () => {
        if (isProcessing) return;
        isProcessing = true;

        try {
          if (!global.client.rankups || global.client.rankups.size === 0) {
            isProcessing = false;
            return;
          }

          const rankupsToProcess = new Map(global.client.rankups);
          global.client.rankups.clear();

          for (const [userID, rankupData] of rankupsToProcess.entries()) {
            try {
              // Mariya Bot ke database se user dhundna
              const userData = await global.data.getUser(userID);
              
              if (!userData) continue;

              // Agar thread ID nahi milti toh last known thread use karein
              const targetThread = rankupData.threadID || event.threadID;

              if (targetThread) {
                await sendLevelUpNotification(api, targetThread, userID, rankupData);
              }
            } catch (err) {
              console.error(`Error processing rankup for user ${userID}: ${err.message}`);
            }
          }
        } catch (error) {
          console.error('Error in rankup listener:', error.message);
        } finally {
          isProcessing = false;
        }
      }, 5000);

      console.log('Successfully initialized Rankup Listener');
    }
  }
};

async function sendLevelUpNotification(api, threadID, userID, rankupData) {
  try {
    const width = 1200;
    const height = 400;
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');

    const themes = [
      { bgStart: '#0f0c29', bgMid: '#302b63', bgEnd: '#24243e', accent: '#00f2ff', secondary: '#00c6ff', glow: '#0072ff' },
      { bgStart: '#200122', bgMid: '#6f0000', bgEnd: '#c94b4b', accent: '#ff9966', secondary: '#ff5e62', glow: '#ff0000' },
      { bgStart: '#000000', bgMid: '#0f2027', bgEnd: '#203a43', accent: '#00ff99', secondary: '#66ff00', glow: '#39ff14' },
      { bgStart: '#141e30', bgMid: '#243b55', bgEnd: '#141e30', accent: '#ffd700', secondary: '#fdb931', glow: '#ffb347' }
    ];
    const theme = themes[Math.floor(Math.random() * themes.length)];

    // Background
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, theme.bgStart);
    gradient.addColorStop(0.5, theme.bgMid);
    gradient.addColorStop(1, theme.bgEnd);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Decorative Shapes (Glassmorphism effect)
    ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.roundRect(50, 50, width - 100, height - 100, 30);
    ctx.fill();

    // Profile Avatar Logic
    const avatarUrl = `https://graph.facebook.com/${userID}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`;
    
    try {
      const response = await axios.get(avatarUrl, { responseType: 'arraybuffer' });
      const avatar = await loadImage(Buffer.from(response.data, 'utf-8'));
      
      ctx.save();
      ctx.beginPath();
      ctx.arc(215, 200, 115, 0, Math.PI * 2);
      ctx.clip();
      ctx.drawImage(avatar, 100, 85, 230, 230);
      ctx.restore();

      ctx.strokeStyle = theme.accent;
      ctx.lineWidth = 8;
      ctx.beginPath();
      ctx.arc(215, 200, 115, 0, Math.PI * 2);
      ctx.stroke();
    } catch (e) {
      console.log("Avatar load failed, skipping image.");
    }

    // Text Details
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 70px sans-serif';
    ctx.fillText("LEVEL UP!", 380, 140);

    ctx.fillStyle = theme.accent;
    ctx.font = 'bold 50px sans-serif';
    ctx.fillText(rankupData.name || "User", 380, 210);

    ctx.fillStyle = '#ffffff';
    ctx.font = '40px sans-serif';
    ctx.fillText(`Reached Level ${rankupData.level}`, 380, 280);

    // File handling
    const tempPath = path.join(__dirname, 'cache', `rankup_${userID}.png`);
    if (!fs.existsSync(path.join(__dirname, 'cache'))) fs.mkdirSync(path.join(__dirname, 'cache'));
    
    fs.writeFileSync(tempPath, canvas.toBuffer());

    const msg = {
      body: `🎉 Congratulations ${rankupData.name}!\nAapka level up ho gaya hai: Level ${rankupData.level}\n💰 Bonus: ${rankupData.level * 100} coins`,
      attachment: fs.createReadStream(tempPath),
      mentions: [{ tag: rankupData.name, id: userID }]
    };

    return api.sendMessage(msg, threadID, () => fs.unlinkSync(tempPath));
  } catch (error) {
    console.error(error);
  }
}
