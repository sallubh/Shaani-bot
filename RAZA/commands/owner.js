const axios = require('axios');
const fs = require('fs-extra');
const path = require('path');

module.exports = {
  config: {
    name: 'owner',
    aliases: ['dev', 'creator', 'developer'],
    description: 'Show bot owner information',
    usage: 'owner',
    category: 'Info',
    prefix: false
  },

  async run({ api, event, send, config }) {
    const { threadID, messageID } = event;

    const ownerPics = [
      'https://i.ibb.co/Z1NFvKbz/7de69b18e700.jpg',
      'https://i.ibb.co/SDdCvz4P/6dfd9b142618.jpg',
      'https://i.ibb.co/35sPr6Ft/1bd90c266076.jpg',
      'https://i.ibb.co/svjgLKdX/b354e17ce5dc.jpg'
    ];

    const randomPic = ownerPics[Math.floor(Math.random() * ownerPics.length)];

    const ownerInfo = `
╔═══════════════════════════╗
║   ✨ 𝐁𝐎𝐓 𝐎𝐖𝐍𝐄𝐑 𝐈𝐍𝐅𝐎 ✨   ║
╠═══════════════════════════╣
║                           ║
║  👤 𝐍𝐚𝐦𝐞:𝚂𝙷𝙰𝙰𝙽-𝙺𝙷𝙰𝙽 𝙺     ║
║                           ║
╠═══════════════════════════╣
║  📱 𝐂𝐨𝐧𝐭𝐚𝐜𝐭 𝐈𝐧𝐟𝐨:          ║
║                           ║
║  🌐 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤:              ║
║  https://www.facebook.com/profile.php?id=100016828397863 ║
║                           ║
║  📲 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩:              ║
║  wa.me/+9233468783346       ║
║                           ║
╠═══════════════════════════╣
║  🤖 𝐁𝐨𝐭 𝐃𝐞𝐭𝐚𝐢𝐥𝐬:           ║
║                           ║
║  📛 Name: ${config.BOTNAME || 'SHAAN BOT'}
║  ⚡ Prefix: ${config.PREFIX || '.'}
║  💻 Version: 2.0.0        ║
║  🛠️ Framework: WS3-FCA    ║
║                           ║
╠═══════════════════════════╣
║  💝 𝙏𝙝𝙖𝙣𝙠 𝙮𝙤𝙪 𝙛𝙤𝙧 𝙪𝙨𝙞𝙣𝙜!  ║
╚═══════════════════════════╝
    `.trim();

    try {
      const cacheDir = path.join(__dirname, 'cache');
      fs.ensureDirSync(cacheDir);
      const imgPath = path.join(cacheDir, `owner_${Date.now()}.jpg`);

      const response = await axios.get(randomPic, { responseType: 'arraybuffer' });
      fs.writeFileSync(imgPath, Buffer.from(response.data));

      api.sendMessage(
        {
          body: ownerInfo,
          attachment: fs.createReadStream(imgPath)
        },
        threadID,
        () => {
          try { fs.unlinkSync(imgPath); } catch {}
        },
        messageID
      );
    } catch (error) {
      return send.reply(ownerInfo);
    }
  }
};