const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Mod by John Lester",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Karachi").format("hh:mm:s");
  const hours = moment.tz("Asia/Karachi").format("hh");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["BaZzati Aur Shadi Ek hii Jaisi Hoti..😐 Achhi Tabhi Lagti Hai..Jab Dusre ki Ho...🤗🫣🥲", "Cockroach 🪳 taane dene lagen Ladko ko 😒 ki Tumhari Begum tumse zayda to humse Darti hain...😬😆😹", "Arz Kiye hai..!✍️\n Tu Sawal Nhi ek Paheli hai 😗 Meri Manzil Tu Nahi Teri Saheli hai....🤗😅🥹", "T/um Petrol ⛽️ si Ladki Aur main Machis 🧨 sa Ladka mil gye Dono to Tabahi hi hogi...😜🔥🤣", "Waqt pr Shadi krke Apne Bachhe Palna 😐 20 Saal ki Ladki ko Facebook Messenger pr Palne se Behtar hai...🙆🤐😆", "Jinn Ladkio ke pichhe Ladke Hath dho kr Pade huye hai.! Vo Ladkiya Apna Muhh dho kr un Ladko se Apni Jaan churwa len..🤣😐😆", "Ek Tarfa Pyar Haar Raha hai 🙁 Khush Wahi Hai Jo Do Jagah Muh Maar Raha Hai...🙃🤞", "Single hone ka Ek Fayeda hai.. Single Logo ka sirf Hath dukhta hai... Dil 💔 nhi Dukhta 😝🫣😂", "Mehant Karte Raho Waqt Badlta hai..✍️\n Waqt Badlta Hai !  Par Waqt Lagta h🙃✌️😍", "Mohabbat main Ek dusre ke itna Kareeb bhi Nhi Anaa Chahiye ke dono me se Ek ko Nahana Parr Jye..🤣🫢\n Garmi Bahut Hai nah😒🤐", "Mere Room ke to Bedsheets bhi Double hai, bas Ek main hi Single hu...🙁🥹", "Aurat ki Zuban Aur Mard ki Aankhon ko Araam Marne ke Baad hee Aata hai..🤨🤔😬", "Motorcycle Aur Boyfriend me Ek Baat Common hai..Motorcycle ko Pahle Kick Marte hai phir Use krte hai....Aur Boyfriend ko Pahle Use krte Hai Phir Kick Marte Hai...😐🤣✨️", "Arz Kiya hai.....✍️:)\nBaat sirf Itni sii Hai Nazar Ka Opration ho sakta hai... Nazariye Ka Opration nhi Ho sakte..✨️🖤", "Attention ⚠️\n  Dukh!  Sukh!  Soch Samjh Kar Banta Kare Ye Screenshot Ka Jamana Hai...😐🖤💥", "Ek Ladki ki Respect 🙏 Karna Usko Khubsurat kahne se Zayda Khubsurat Hai....🤗🙃💞", "Pyar agar jhuta nikle to Khud ko Sambhalna Mushkil Ho Jata hai...😔 Aur agar Sachha Nikle To Bachho ko Sambhalna Mushkil Ho Jata hai...🤣😆", "Shadi Ek Aisa khubsurat Jangl Hai.. Jaha Bahadur Shero 🦁 ka Shikar Kiya Jata hai...🤣🤣🤣", "Khansi ki Dawa nah Pio to (TB) bann Jati hai...😕 Aur Girlfriend waqt pe nah badlo to vo BiBi bann Jati hai...😂😝😗", "Shadi waha kro jaha Sasur Maaldaar ho Ladki Jaisi bhi ho par *SAALI* Jaandar ho..🤣😁", "Pahle Jamane ke Jo Aashiq the vo Pyar main Wafa Dhunte the...😇 Aaj ke dour Aashiq vo Flat 🏠 main Jagah Dhundte 🤦‍♂️😆", "Shadi Ek aisa khel hai.. Jo khela Bachho ke liye hi Jata hai..aur agar ek Bachha ho jye phir vo Khelne nhi Deta.😂😂", "Duniya main Dabaye jane wali tange aaj bhi Dusre Number par hai...😐😬\n pahle number pr Galaa😂😆", "Ishq ke Rishte Itne Nazook Hote Hai ke Raat ko Number Busy Jane se hi tut Jate hain.! 💔🙃", "Ladkiyo ka dil Pani ki tarh hota hai Ladko ka dil Moblie ki trh hota hai ab Chahe Moblie Pani main gire ya Pani Moblie pe Gire Satiyanas Moblie Ka hi Hota hai..😕😆", "Dard Dilon ke Kamm Ho Jate.!🙁 Agar Kuchh Rishtedaro ke Muhh band ho Jate...😂🫢", "Pahle Unse Ghanto Baten Hoti thi... Ab Ghanta 🔔 Baat hoti hai...😡😕", "Aisi Ladkiyo pr kabhi Etbaar mat krna jo Dieting krti ho kionki Jo Ladkiya Dubla patla hone ke Liye Khana chhor sakti hai vo kisi ko bhi chhor skti hai....😂😂", "Gadi 🚗 kitni hi khubsurat aur Chamakdar Kion nah ho lekin Uska silencer Hamesha Kala hi Hota Hai....😐😬🥲", "Zindagi main vohi Ladkiya agee Jati Jo Jhadu Lagati Hai...🤭 Pucha Lagane wali to Piche ko Aati hai..🤣🤐", "Please don't disturb me", "Always Be Happy ♥️♥️ Kion Ke TindEe Jesa Muh BanaNe SEe tenXan kM nahi Hoti 🤫🤫🤫", "Meri Jann Kya Hua", "I Love uhh Always", "Baby, Kaho tO Kiss Kar Lu", "Gussa apni jga lekin bhai hum sy nahi mara jata phone deewar py😐🙄" ,"Hi love you ummmmmmmaaaaaaaàahhhhhhh 💋 babY", "Dur HaT Tere ko Aur Koi Kam Nhi Jb DeKho Bot Bot 😡 ShaDi KerLe Mujhsy 😉😋🤣", "Teri meri kahani Aj blue hai pani pani pani pani pani pani💦💧", "Kahani Suno !😔 Zubani suno !😔 Mujhe Bukhar Huwa Tha'w 😔) Ek So Chaar Huwa tha'w 🥺💔", "😁🎗_ZeHer banaNa sikH raHaa hUn😂👀 BuS iskO trY karnY waLa cHaHiye _💔🙄😹", "Ha ha ab meri yaad ab ai nah phly to babu shona kerna gy thy 😾 ab ham aap sy naraz hai jao aap bye ☹️", "Aaj kal Log Dua 🤲 me kam😐 Chugli me Zayda Yaad Rakhte Hai😁😛", "Ittuu🤏 si shram ker Lya kro hr wqt tr tr krty ho 🙂 💔✨⚠️†", "Khush Raha kro Dosto, ........kya pata kab Shadi ho jye.....😂😆😜", "Kisi ki bhi babu sona baby bachha ki Shakal Chand 🌙 se nhi milti hai, to Kirpya Apni Aukat m rahe😏😆", "haiy ma sadky jawa teri masoom Shakal phe 😁", "kya bot bot bot Laga Rakha hai 😀", "Bot nah bol oye ! Janu bol mjhy" , "Shaqal Sy masoom lgty ho 😂 btao din m kitni baar naak m ungli dalte ho 🤧🤣", "kash tum single hoty  😂", "Ary Hutiya pnti nah kar jo kam hai bol do sharma nahi , bol de koi nahi dakh rha 😂", "Dur Dur Fity Muh Aur Koi Kam Nahi Kiya Har Waqat Mjhy Tang Kerta Rhta Ha 🥺", "ary ary bolo meri jaan kia hal hai", "Teri pic dakhna sy phly shukr hai ma anda hu 😂", "esy hi hansty rhao kyu ky hnsa sy konsa tera bill ah jata hai 😂", "Ladkiya apni sirf 1 hi Ghalti manti hai ki Ghalti kardi tumpe Bharosa krke😬😆", "Bandi hoti to usko choti choti 2 papiyan krta😒😔👩‍🦯", "Udas matt ho Jaan 😏har Guzrta waqt ⏲️ tumhe tumhari Shadi 👩‍❤️‍💋‍👨 ke Kareeb le ja rhaa h 😜🥳", "Hame Ignore Kijye😪 aur Pao Bhad me Jaane ka Khubsurat😍 Mouka...😆", "Ary Yahin Hon namony😗", "Haye Main Sadke jawa Teri Masoom Shakal pe baby 💋 ", "Bar Bar Disturb Na Krr JaNu Ke SaTh Busy Hun 🤭🐒", "Main Gareebon Sy Bt Nhi kRta 😉😝😋🤪", "Itna Pass Na 😐 aa Pyar h0o JayGa", "Bolo Meri Jaan Tum Mujhse Pyar Karte Ho Na 🙈💋💋", "Are jaan Majaak ke mood me nhi hu main jo kaam hai bol do sharmao nahi", "Bar Bar Bolke Dimag Kharab Kiya toh. Teri ...... Fad dunga🤬", "Abe Dhakkan Bandh ho ja kitna preshan Karega 😒🤬", "Kitna Preshan Karta hai😔 Gali Sunna H kya? 🤬", "Teri Baat Ka Faluda Maru Chup kr😾🤬", "Tujhe Kya koi aur Kam nhi ha?🤔 Messenger pe Bot Bot Karta h🤧😕", "Tujhe Apna Bejjati Karne Ka Saukh h..🤐", "Abhi Bola Toh Bola Dubara Mat Bolna", "Teri Ground me began laga dunga😂😁", "Haaye Main Mar Jawa Babu Ek Chuma To Do Kafi Din Se Chumi Nahi Di 😝", "Dur Hat Be😡 Tujhe Aur Koi Kam Nahi Kya Har Waqat Mujhy Tang Kerte Rhte ho 😂", "Are Bolo Meri Jaan Kya Hall Hai😚", "IB Aja Yahan Nhi B0ol Salta 🙈😋", "Bot Bolke Bejjti Kar Rahe ho yall...Main To Tumhare Dil Ki Dhadkan Hu Baby...💔🥺", "Are Tum Wahi ho nah Jisko Main Nahi Janta 🤪" , "Kal Haveli Pe Mil Jra Tu 😈", "Bx KRr Uh k0o Pyar H0o Na H0o Mujhe H0o JayGa..🥺🫂", "Phle NaHa kRr Aa Chapri people 🤧😂", "Main yahin hoon kya hua sweetheart‎ 🤗😗", "Boss Dk Tujhe Aur Koi Kaam Nhi H 🤔 Har Waqt Bot Bot Karta H🫣🤨", "MaiNy Uh Sy Bt Nhi kRrni🙂", "MeKo Kxh DiKhai Nhi Dy Rha 🌚", "Bar Bar Disturb Na KRr JaNu Ke SaTh Busy Hun  😋", "Main Gareebon Sy Bt Nhi kRta 😉😝😋🤪", "Itna Na Pass aa Pyar h0o JayGa", "Ary yrr MaJak Ke M0oD Me Nhi Hun 😒", "Dur HaT Terek0o 0or K0oi Kam Nhi Jb DeKho Bot Bot ShaDi KerLe Mujhsy 😉😋🤣", "TeRi K0oi Ghr Me Nhi SunTa T0o Main Q SuNo 🤔😂 ", "Mujhe Mat BuLao Naw Main buSy h0o 🛌 ", "Are TuMari T0o Sb he baZzati kRrty Me Be kRrDun 🤏😜", "Phle NaHa kRr Aa 😂 phir koi n koi pat Jayega😬🤓", "TeRa T0o GaMe BaJana PreGa", "Ta Huwa 🥺"  , "TuM Phr AaGye 🙄 Kisi Aor Ny Muh Nhi LaGaYa Kya🤣🤣🤣", "Hurt 💔Krne se Acha hai Flirt 😉 Kar lo", "Tumse Acha to Google hai jo Likhna Start Karte he Dil ki Baat jan leta hai😏😏", "Chal Chal Hawa Ane de Lol😏", "Ek Ladki ne mere dil ke 1000 tukde kar diye😢aur ab mere dil ka har 1 tukda alag alag ladkio se pyar krta hai😔🥹", "Block Your ‘’ bf ‘’ And Purpose meh 🙂💔", "Sirf 10% Ladkiya dhup se jalti hai,🙄Baki ki 90% ladkiya ek dusre se Jalti hai😜🤣", "Tum itny Masoom Q Ho babu🥺❤️", "Ammi ne aaj digital saza di hai Charger hi utha kar le gyi😭😦", "Aao dard banttay hain 🫂 Tum darwazay mein ungli do Phir mil kar cheekhain maartay hain 😬🥲", "Suna hai aap ki muskurahat par har koi mrta 😳 hai Zara sa time nikaal kar ao chooha 🐀 marvana hai...🙃🤣", "Kisi ko sachey dil ❤️ se chaaho to poori kaayenaat uski shadi kisi aur se krwane mein lag jati hai..💔😒", "Tang nai kro I am udas🙂💔", "kbhi naaak se balloon bnaya hai..😁😁", "Bs kro tharki kitni Bot Bot kro gye🙂💔", "Pait ke ander sab kuch chala jata hai, Bas pait hi ander nahi jata🙄🙁", "Soch raha hon inbox rent pe de dun khali jo para rehta hai 😒", "Abe Ja Chawal Insan😏Aisi Shakal Se Koi Nahi Patne Wali😐😂", "Vo Kahti thi bhag kar Shadi kar lenge vo bhag gyi meko le jana bhool gyi😔", "Agar Ladkiya InstaGram, Facebook, WhatsApp, pr nah ho to ye bhi Nahi Chalega..😜🤭", "Middle Class Ladko ke sapne, aur Urfi jabed ke Kapde kabhi bhi Pure Nahi Hote🤣🫣", "Sacha pyaar to mera mobile apane charger se karata hai ek din mile bina rah nahi sakta😂💥", "kuchh logon ko mohabbat ka aisa nasha chadata hai… ki shaayari vo likhate hain dard poora facebook sehan karta hai..🤧🥲", "Crush 😍 ho ya Brush Waqt pr Badal Lena Chahiye 🙃 wrna Dil ho ya Dant tut hi Jata hai,..🤭💔🤯", "Dost Hamesha Kale Banao 😪 Kionki vo Rang nhi Badlte...🤣", "Tanki m tanki - tanki m Pani 💦 Babu Shona ke Chakkar m Don't waste 🗑 your Jawaani..😝🫣", "Bahas karne se Rishta kamzor hota hai, Isliye turant Tahppar maar kar Rishte Majbut kar len😐😆😏", "Facebook ka Matlab jo 'Face' pasand ho use turant 'Book' kar do..😜🤣", "Mitha Aam 🥭 kabhi kachcha nahi 😐 hota, aur Babu Shona wala pyar kabhi sachcha nahi hota..😆😆", "Use Paane ke Liye ped 🌴 par dhaga bandha tha 🥺 Nagar nigam wale ped 🌳 hi kaat le gaye...😒😪", "Har Larki dukh nahi deti, Kuch Gaaliyan bhi deti hain 😒🫢","kali kali zulfon k phandy na dalo Heer burka smbhalo, bhai stand utha lo🙂🚶", "Lips  kissing is not Romance It's sharing Bacteria>>>🙂", "💸💚🖇️Tm Propose kr k to dekho qabul  krny ki zimedari merii - 🙂🫣_", "~ Piyawr Hameshw Aalsii InsaN sw kwr0 mUjhei aby neend  ary hai baki Kl Bta0 gw 🙂🔪", "𝙀𝙠 𝙗𝙖𝙖𝙧 𝙨𝙝𝙖𝙙𝙞 𝙝𝙤𝙟𝙖𝙚 𝙥𝙝𝙞𝙧 𝙬𝙞𝙛𝙚 𝙠𝙞 𝙜𝙝𝙪𝙡𝙖𝙢𝙞 🧸🙂", "*Ghr məıın - عـــزت noi werna Admii thy hum bhi kam kə'w -' ♡🖇️😞*😒", "🦋🍒____________🙂🎀پتہ لگا تینوں شوق لتراں دا🤝🏻🔐🫰🏻", "Suno Jawn DiL کرتا ha ہر Waqt تمہاری Chumiya لیتا Raho😌🙈", "Khud ko single keh kr Apne khufiya janu ka janaza na nikala kro.😀🤞😓", "Love me 💕 like Dani love's Dua♥️", "Hi mujY Dani Malik chokra ne baNaYa hY 🙂", "Kᴀʜᴀɴɪ Sᴜɴᴏ !😔 Zᴜʙᴀɴɪ sᴜɴᴏ !😔Mᴜᴊʜʏ Bᴜᴋʜᴀʀ Hᴏᴡᴀ Tʜᴀ'ᴡ 😔 )Eᴋ sᴏ Cʜᴀᴀʀ Hᴏᴡᴀ Tʜᴀ'ᴡ 🥺💔:)", "- 𝙩𝙪𝙢 𝙢𝙚𝙧𝙖 𝙙𝙞𝙡 𝙩𝙤 𝘾𝙝𝙪𝙧𝙖 𝙣𝙝𝙞 𝙥𝙖𝙮 𝙠𝙞𝙖 𝙛𝙖𝙞𝙙𝙖 𝙩𝙢𝙝𝙖𝙧𝙞 𝘾𝙝𝙤𝙤𝙧 𝙟𝙚𝙨𝙞 𝙨𝙝𝙠𝙖𝙡 𝙠𝙖!! 🙂", "𝐄𝐤 𝐛𝐚𝐚𝐫 𝐈 𝐋𝐨𝐯𝐞 𝐘𝐎𝐲 𝐁𝐨𝐥 𝐃𝐨 𝐍𝐚 𝐌𝐚𝐫 𝐓𝐡𝐨𝐫𝐢 𝐉𝐚𝐮𝐠𝐢 🙄😕)( 👑🍒", "SharaM kr0'w LarKiy0' mujhe aaj AnTii ne propose Kar Diiy4'w ___/////😞🍁☠️🌸", "Imagine I am your Ex 🥲say whatever you want to say", "-😁🎗_ZeHer banaNa sikH raHiii hUn😂👀 BuS iskO trY karnY waLa cHaHiye _💔🙄😹", "I love You Madiha♥️ ,fatima,Ayesha, Maryam,and 299 others 🙂", "Hye ye Cute Cute DpiYa  Unke peeche'w Chhupii MoTii Kalii AnTiiYa 🙂🍁", "°Mein واقعی Piyaara Hun Ya Log چونا Lagaty hain-🙂💔","Ittuu🤏 si shram ker Lya kro bot bot krty wqt 🙂 💔✨⚠️†", "Ary Yahin Hon Jan😗", "jiee Shona 😍", "Love you", "Miss YoU NaW Inna sara👌🏻👌🏻", "To mera putar chutti kr", "OkkaY Babbu", "😁Smile I am Taking Selfy✌️🤳", "🥺Jan nahi kehna to men naraz ho jana he", "Jesay Yaad Karne Se Hi Mood Kharab Hojaye Ek Aisa Fazool Khayal Ho Tum", "Main ap ki ami ko btaou ga ap Facebook use kerty ho 😂", "#__LaLa__LaLa__Lori #__Koi___Chori__Set__Ni__HoRRI", ,"Bhai Wese Ldki Patane Ka Trick Btao Na Bada Din Ho Gya Single Hu ;🙂" ,"Ufff aap Ki اداٸیں😗 Chaly Shabas Apna'w munh Dho kY aye'w..]] . 🙂✨//. 🦋🍒)" ,"Suno Jawn DiL کرتا ha ہر Waqt تمہاری Chumiya لیتا Raho😌🙈","𝐄𝐤 𝐛𝐚𝐚𝐫 𝐈 𝐋𝐨𝐯𝐞 𝐘𝐎𝐲 𝐁𝐨𝐥 𝐃𝐨 𝐍𝐚 𝐌𝐚𝐫 𝐓𝐡𝐨𝐫𝐢 𝐉𝐚𝐮𝐠𝐢 🙄😕)( 👑🍒","Jab tk mein single hun yeh bh meri hai wo bhi meri ha Tum kia parh rahi tum bh meri ho😒❤🙂" ,"𝗜𝘁𝗡𝗮 𝗦𝗶𝗻𝗴𝗟𝗲 𝗛𝘂 𝗞 𝗝𝗮𝗻 𝗕𝗵𝗶 𝗹𝗶𝗸𝗛o to 𝗔𝘂𝘁𝗼 𝗖𝗼𝗿𝗿𝗲𝗰𝘁 𝐣𝐚𝐩𝐚𝐧 𝐤𝐫 𝐝𝐞𝐭𝐚 𝐡𝐚" ,"kxh LoGon Ki TyPing.. Ase LiKha Aa Rha HoTa Hai Jse WasiHat LiKh Rhy H0on 😒0or RePly ATa Hai Hmmmm 😂" ,"Baz DaFa JaWab DeNy Ke LiYe alFaz Nhi 👉😒 Ase SaQal He KaFi H0oTi Hai 😹" ,"YaKeen KRren Kxh L0og Bread Ke 1 Slice Ke TarHan H0oTy Hain j0o Kisi K0o Axhy Nhi LagTy Tum W0o Slice H0o 🫢🫣😂" ,"JeSe Aap Ki ZuBan ChalTi Hai Wse KhuD ChLo T0o MoTaPay Ka RoNa Na DalNa Pre 😂" ,"MeRi PosT PRr aYa KRro Main Kbhi Kbhi MehB0ob K0o MuThi Me kRrNy Ke Tawiz Be BTaTa Hun 😜" ,"KTny WaHaYaT H0o 🥺 Phr Be HaYaT H0o 🤭😹😹😹" ,"SaNnu ilam aa Tu BaRi VaDDi Film aa 😅" ,"ApNy DiMag Ka PaSsWord DeNa 😝 Aqal Install kRrNi Hai 😂" ,"Phr Aaj KaL KiSs Ke SaTh ChaKar Hai Uh Ka 😂😂😂" ,"➝𝗚𝗶𝗿𝗹𝘀 𝗶𝗻 𝗠𝗮𝗿𝗸𝗲𝘁: ➝𝗪𝗼 𝗕𝗹𝗮𝗰𝗸𝗗𝗿𝗲𝘀𝐬𝗗𝗲𝗸𝗵𝗮𝗡𝗮➝𝗕𝐨𝐲 𝗶𝗻 𝗠𝗮𝗿𝗸𝗲𝗧:➝𝗪𝗼 𝗕𝗹𝗮𝗰𝗞 𝗗𝗿𝗲𝘀𝘀 𝗪𝗮𝗹𝗶 𝗗𝗲𝗸𝗛🙂🤝" ,"➝𝗧𝘂𝗺 𝗪𝗼𝗛𝗶 𝗵𝗢 𝗡𝗮➝𝗝𝗶𝘀 𝗞𝗶 𝗩𝗼𝗶𝗰𝗲 𝗕𝗲𝗲𝗵𝗸𝗮𝗥𝗶𝗼 𝗝𝗮𝘀𝗶 𝗛𝗮𝗶-^☘️🙂" ,"Ek pyare s Bandi ko Mention karo 🙂🤝Set may khudh karlonga🌚🙈🌸" ,"➝𝗞𝘂𝗰𝗛 𝗱𝗶𝗻 𝗕𝗮𝗱 𝗠𝗲𝗿𝗮 𝗡𝗶𝗸𝗸𝗮𝗛 𝗛𝗮𝗶➝𝗝𝗶𝘀 𝗻𝗬 𝗞𝗿𝗻𝗮 𝗛𝗮𝗶 𝗔 𝗷𝗮𝗬🙂🤝" ,"تـیـری بیـوفـائـی نـے مجھـے ٹھـرکـی بنـا دیـا😞" ,"تم تو شکـل سے ہی میـری لگتـی ہو🥺" ,"➝𝗗𝘂𝗻𝗶𝗬𝗮 𝗸 𝗦𝗮𝗥𝘆 𝗠𝘇𝗮𝗞 𝗘𝗸 𝗧𝗮𝗿𝗮𝗳 𝗢𝗿➝𝗜𝗗 𝗖𝗮𝗿𝗱 𝗽𝗬 𝗔𝗽𝗻𝗶 𝗣𝗵𝗼𝘁𝗼 𝗘𝗸 𝗧𝗮𝗿𝗮𝗳🥹💔" ,"Dil De Diya Hen Gurda Nahi Dengy, Jo Karna Hai Karlo Sanam 👀😌" ,"Main chAhta hun ky Woh jab B Dhoka kHae nOtificationS mujhe Ayee🙂💔" ,"اپنے پتیلے جیسے منہ سے میرا نام مت لیا کرو🙂" ,"Tum wahi ho naww jessy apna blood group bhi nahi pata ^^..🙂" ,"All Girls Are My Sisters Osko Chor k jo ye Parh RaHi Hai😒👍" ,"Boys Sana, Laiba, Aliza, Sadia, Maham Zoya ishu ayzal or Ayesha py Mar ky bhi Trust na krna🌚" ,"➝𝗥𝗲𝗹𝗮𝘁𝗶𝗼𝗻𝘀𝗛𝗶𝗽 𝗔𝗿𝗲 𝗟𝗶𝗸𝗲 𝗖𝗮𝗸𝗲➝𝗝𝗶𝘁𝗻𝗮 𝗕𝗵𝗶 𝗖𝘂𝘁𝗲 𝗛𝗼 𝗞𝗮𝘁𝗬 𝗚𝗮 𝗭𝗿𝗼𝗿🙂🤝" ,"Koi Ladki Mera Name hath pw likh dy🤝🙂 Me phr uski dp lga k Cool lgo ga" ,"️Man Toh Accha H Nhi. Kam  Se Kam Shakal Toh Accha Karlo Meri Jaan","Karlo Meri Jaan" ,"kbi sun to zra jo me keh na ska meri dunya tmi o tmi ashraa" ,"kahni sno zubani suno mjy payar howa tha iqrar howa tha" ,"kash ap humry hoty ye lafz tumry hoty" ,"𝐚𝐠𝐫 𝐛𝐧𝐝 𝐡𝐨 𝐣𝐚𝐲𝐞 𝐠𝐢 𝐦𝐞𝐫𝐢 𝐬𝐚𝐧𝐬𝐲 𝐭𝐦𝐲 𝐭𝐞𝐫𝐢 𝐤𝐮𝐬𝐡𝐛𝐨 𝐬𝐚 𝐩𝐞𝐜𝐡𝐚𝐧 𝐥𝐨 𝐠𝐚" ,"lahor da pawa akhter lawa" ,"AK br biwi mil jaye Run mureedi k sary record Tor deny hn....🙂💔😐" ,"➝𝗭𝗶𝗻𝗱𝗮𝗚𝗶 𝗺𝗮𝗶𝗻 𝗔𝗴𝗥 𝗸𝘂𝗖𝗵 𝗧𝗵𝗘𝗲𝗸 𝗖𝗵𝗮𝗟 𝗥𝗮𝗛𝗮 𝘁𝘂\n\n➝𝗪𝗼 𝗠𝗲𝗿𝗮 𝗠𝗼𝗯𝗶𝗟𝗲 𝗛𝗮𝗶🙂🍒", "➝𝗠𝗮𝗺𝗮 𝗢𝗿 𝗦𝗻𝗮𝗽𝗰𝗵𝗮𝘁\n\n➝𝗕𝘀 𝗬𝗲𝗛𝗶 𝗺𝗨𝗷𝗵𝘆 𝗣𝗶𝗬𝗮𝗿𝗶 𝗦𝗺𝗷𝗵𝘁𝘆 𝗛𝗻🙂🥺", "ہسیا کر تے ہسایا کر ، چوسنی ورگا منہ نا بنایا کر", "-Kitna  مــــــــنہوس ha YaAr online ate he Nazar a jata ha 😒⚠️†", "+92 _____________HasEen LrkiyA KhaLi JGa Pur kArEin🌚🙂" , "Aeh, Bi, Chi, Di, Ee, Ef, Ji, Eich, Ai, Lub, You, So, Much 🙂🥺", "𝙎𝙝𝙖𝙙𝙞 𝙠𝙖 𝙨𝙝𝙤𝙦 𝙣𝙝𝙞 𝙝𝙖 𝙢𝙪𝙟𝙮 𝙗𝙖𝙨 𝙙𝙪𝙡𝙝𝙖 𝙗𝙖𝙣'𝙣𝙮 𝙠𝙖 𝙨𝙝𝙤𝙦 𝙝𝙖*(🥺", "پیار محبّت سب فضول تو چلی گئے تو تیری سہیلی قبول ہ", "Logo ki bestie hoti he Meri bezzati hoti he 🙂💔", "People who daily react to my posts I'll invite you to my marriage! 🤍🫶", "-Block Your ‘’ gf ‘’ And Purpose me.❤️🙂🖤🥀🔪", "- 𝘼𝙪𝙧 𝙗𝙖𝙩𝙖𝙤 𝙩𝙬𝙢 𝙬𝙤𝙝𝙞 𝙝𝙬 𝙣𝙖𝙬 𝙟𝙞𝙨𝙚𝙮 𝙠𝙤𝙞 𝙢𝙪𝙣 𝙣𝙤𝙞 𝙡𝙖𝙜𝙖𝙩𝙖𝙬 🥹;", "𝘗𝘩𝘢𝘴 𝘨𝘢𝘺𝘢 𝘮𝘯 𝘣𝘩𝘪 𝘵𝘦𝘳𝘺 𝘉𝘦𝘢𝘶𝘵𝘺 𝘛𝘳𝘢𝘱 𝘮𝘯 🥺💝", "Kash siNGLe HONY k paisy MILTY to mn sab sY ameer HOTA😓", "غلامــــی صـٓــــرف بیگـــَــم دی  🚶-", "Jawn❤️I'm waiting for your text..🙂🙉", "Ek bestie to ma b deserve karta Hun ❤😁🙉",  "بات عزت کی تھی ورنہ آج سڑک پہ پڑا دس کا نوٹ بلکل اصلی تھا🥺🌿", "فاصلہ رکھیں👀\n\nپیار تو ہونا نہیں خوامخواہ لڑائی ہو جائے گی😒😬", "محبت کرو تو انباکس میں اکیلے اکیلے🙄\n\nاور رونا دھونا  پورے Facebook میں۔۔۔واہ رے پلاسٹک کے عاشقو🙁", "•سنو لڑکیو🙋\n\nسفید ڈریس پر لال لپ اسٹک لگاتی ہو💄 قسم سے ایمبولینس لگتی ہو😂", "اگر یہ❤️   ہے\n\nتو پھر یہ 🫀 کیا ہے.", "وہ روز کہتی تھی ہم بھاگ جائیں گے🙈\n\nاور پھر وہ بھاگ گئ مجھے لے جانا بھول گئ😥", " غیر کی دِل میں اگر اُترنا تھا  تو میرے دِل سے اُتر گئے ہوتے ۔ 💔🙂", "makeup kya hai mard hi k paiso se mard hi ko bewakoof banane ki sazish🤝🙂", "𝘚𝘜𝘕𝘖 𝘒𝘕 𝘚𝘈 𝘔𝘖𝘋𝘌𝘓 𝘏𝘖 \n𝘔𝘌 :2002🦋🥴🖤", "عورت بڑا سا بڑا دُکھ بھول سکتی ہے\n\nلیکِن پڑوس میں گیا برتن نہیں 💯😁", "💫✨💙Tazab Piyo Zindagi Jiyo✍️🙂","لفظوں میں اتنا زہر کہا سے لاتے ہو لگتا ہے سانپ کا زہر پی کے آتے ہو","وہ ہمیں بے شرم کہتے ہے تو کہتے رہے فراز امی کہتی ہی جو کہتا ہے وہ ہی ہوتا ہے🤣","دل کرتا ہے تمھے دعا میں مانگو پر ڈر لگتا ہے کہی سچی میں نہ پلے پر جاؤ🤣","Pyar Karne Se Pehlay Pyar Ka Anjaam Dekh Lo Agar Phir Bhi Samjh Na Aaye TouFilm Tere Naam Dekh Lo","Kabhi Roti Ke Tukron Mein Kabhi Salan Ke Payale Mein Teri Zulfon Ka Dedaar Begum Har Nawale Mein","Jis Nay Jald Baazi Mein Ki Shadi Unse Apni Jawani Barbaad Ki Aur Jisne Soch Samjh Karki Unse Konsa Teer Maar lia ha","Daulat shohrat nahi chahiye Eidi chahiye sirf🙂🤝🏻","زندگی ایک ہی بار ملتی ہے اسے کزنوں کے ساتھ شادی کر کے برباد مت کرنا🤭🤣","Waldain se barh k is duniya main kuch nahi hai,so,Jaldi se shadi waldain ban jayen..Rishta wohi soch nayi 😅😅😅😅","Meri gf hoti to mai v usse bt krta aaj puri rt time hi time hai 🤭🤭", "Aao tmhare sath relationship post laga ke tmhe Femous kr du😊", "EK QUESTION HAI SABHI SE BTAO MAI ACHA LGTA HU YA MERI MEMES 🙈😾🤤", "Chakar arhy hein apki Ib ma aa k gir jaun>>🥺🚶🏻‍♀️", "Mout ka farishta ya Mera  rishta?🙂❤️🙊•", "Wife k sath date pe gya tha \nJis ki thi usne dhek lya", "_ Sab ko loyal bnda chahiye tw hum dhokebaz kidhar jayen? 🥺💔", "WhatsApp k last seen k elwa mera koi or scene nai hai🙂", "Hai Tamna TumhY ChaHt sy Girayn🙂",  "Finally es group kee do teen  larkiya mujH pasanD agai Hai🚶‍♂😪🌚", "میرا دل یہ پکارے آجا پیچھے والے مقام میں 🤝🙂🤞", "Suno👀\n\nKya tum mery leye surf kha kar muu sy bulbly nikal skti ho🙂🫴", "- GhUlabii آنــکھیں jh0 terii dekhii Harami Yevw Dill h0 Gya   3; 🙂 😆", "- مجھــــــے کیـــــا مــــیں تــــو سنــــگل ہــــوں 😒", "Dil ko krar Aya khud pa Pyr aya😒🙈😂", "Ehsaas kryn Bakwas nahi, Janam 🥺Shukria_😊🙆‍♂️", "Bs yar daily 3 4 crore ki zarorat mahsos Hoti hai 😂", "Begum walaw مــــــوســـــم ho rahaw haii aj to 🙂", "Shkl insani, soch ibleesi\n\nHnji apki hee ", "تـــــم میــــری بیگـــــم بنو گی کیا -🥺🖤", "LARKIO KAY BHI MAZAY HAY🥴 \nNO BRAIN NO TNSN⛑🔪⚡", "تمہارے حصے کی چُمیاں مچھر لے رہے ہیں.🙂💔", "Sirf Maggie noodles bna'ny sy Ghar nahi chalta SHABANA..🙂💔", "Wp pa add hona chahty ha apky sath ☺️💔", "- کھاؤ قسم تمہارے پاؤں کالے نہیں۔۔!!👣🙄", "Meny fail hokr bhi dekha hai Ye log shadi nh kraty 🙂💔", "Or batao kb ayga tumahara dill mujhe py😌🥺", "bht bura hu na mai? bhiin dedo apnii🙂", "Pyari Pyari ladkiyan Hazir Ho jay😁", "Kisi k pss لاش wali dp h tw send krein janu replY nahi de rhy..!", "MerKo abhi tk pink clr ki gf nh meli 😒🥺🙂💔:⁠-⁠)", "میرے مولا ایک thrkii بچــی yess کروا دے..🙂", "ایک kiss ادهار دے دو 💋\nکل واپس کردوں گا پکّا 😝", "Ajeeb ghr wale hain yr, mera phone 28% pr nikal kr apne 90% ko charge karte 𝐡𝐚𝐢𝐧-🌚", "Lagta hai mery sabar k phal  ka koi juice bna k pee gya..😐", "Dil Dany ki Umar ma  Exam's  Dy raha hoo 🙂🤝", "Behes karne se Rishty kmzor hojaate hn isiliye Direct mun pe thapr marein😊", "Bestie ki chummi halal hai ya Haram ? 🙂", "2001 \nJahan dalda wahan Mamta😊\n\n2023 \nJahan larki  wahan tharki😒", "Koi Pyari c Bachi a kr sar daba dy, Dard sa sar phat rha💔🥲", "Breakup k waqT kE dUa \n\n( KHUSH RAHEIN ) 🙂", "Thora sa Whatsapp number dy do naw🥺♥️", "لوٹ آؤ اور کہدو کہ \nمیں لسی پی کے سو گئی تھی😫", "Kuch Log achy ki Talaash Mein Mery Jaisy Masoom ko kho dety Hain☺️", "Tum wohi ho na jiska mood bilawaja khrab hojata h...!!!🙂", "Pyari pyari larkio ki talash ma berozgar larky add krliye hain 🥲💔", "Jab mera Message aye toh sare kaam chor kar sirf Mujhe reply kia karo😾😒", "Or Btao Real Life Ma bh itnyy Achy ho jitny social media per Bntyy ho>>🙂", "Pakistani Relationship:\nTum Feel Kro Meh Tumary uper hun 😒💔", "Us k jany k bd uski Pasnd ki Nail Polish lgaa k khana khata hu aesw lgta ha jesy wo khela rhee ha😒", "Be a Good Human.Delete GB Whatsapp💔🙂", "2 Din Pyar sy Baat kr loo tou Ammiyan bn  jatii hain🙂😒", "Girls after One Mint of Relationship...\nBegam hu mn apki🙂🤦", "Larkiyon ko achy sy pta hai kahan -Bhai- Bolna kaha -Ap- or kaha -Tum- 🙂", "Aaj mein ny Khud ko TV py dheka \n\nJab Tv Band Tha 🙂", "Qadar krlo Meri...\nKya pta Main b Panadol ki trha aik dam shaat hojun😒", "Naraz bandy ko manany ka sab sy acha tareka Ap khud us sy naraz hojaoo🙂🐣", "Jaisi meri shakal hai kunwara he marunga🙂👀", "میں نے جس دن سکول میں پہلی پوزیشن حاصل کی میں اسی دن سمجھ گیا تھا کے یہ ملک کبھی ترقی نہیں کر سکتا😐😐", "یقین کریں میٹرک کے پیپر بہت آسان ہیں.میں نے خود سات دفعہ دیئے ہیں😐", "Itni memories mere khud dimagh mai nahi hai jitni Snapchat ny bna rkhi hai", "Chakki Chakki Meko Is Mulk Sy Bahir Nikal 🥹","Bestie ki chummi Mza hai ya gunaah ? 🙂", "2001 \nJahan dalda wahan Mamta😊\n\n2023 \nJahan larki  wahan tharki😒 jaise mera tharki dost", "Koi Pyari c Bachi a kr sar daba dy, Dard sa sar phat rha💔🥲", "Mjy chahyain 3 lrkiyan kahan Hain lrkiyan 👀", "Relationship private rakho ya public Kate ga sabka hi🙂", "Thak GYa hu Yr uski dP dHek Dhek Kr😩", "Insy Milo inko lgta hai sab larky in pr Martay hain🙂", "MentiOn YOur Dushman On FaceBOok'🙂🤝", "Haldi 🤲 Lagane Ki Umar Hai Iski 😎 Aur Ladkiyan 👉 Chuna Laga Kar Ja Rahi 😜 Hai" , "😂Jalne Ko Aag Kahte Hai 🔥 Buji Ko Rakh Kahte Hai 💨 Aur Jo Aapke Pas Nahi Usse Dimag🧠 Kahte Hai 😜", "Moongfali 🥜 Mai Dana 👎Nahi Trust 👉 Karne Ka Aab Zamana 🌎 Nahi 🤣" , "Bhai😎 Thoda☝ Break Laga 🙅🤘 Otherwise Do Char💑 Ka Or Breakup💔👫 Ho jayega😂" , "Apne Dimag 🧠 Ka Password Dena Akkal 👉 Install Karni 😜 Hai" , "Aapki Surat Mere ❤️ Dil Me Aise Bas 👌 Gayi Hai Jaise Chote Se 🚪 Darwaze Mein Bhains 🐂 Fas Gayi Hai 😬🤣" , "Nasheeli😌 Aankhe👁👁 + Katil💘 Smile😊 Bhai Ka High Attitude😎 Or Desi 🤕Style" , "Duniya Ka Sabse Muskil Kam Bina Dimag Wale Dosto Ko Jelna 😝🔥" , "g janu ap na q yad keya huma😒" , "Jo Uske ❤️ Pyaar Samjhe Woh Sabse Bada 🐴 Ghada Hai 😂" , "Teri Is Smile Par Girls To Kya Boys Bhi Fida","Stop dreaming BTS your czn Ahmed is waiting for you.🙂", "Meri jaan kaise ho aap 😊", "Paros Wala Larka inhe MUH Nhi Lagata aur Banda inhe Korean Chahiye🙂", "move on krle bhaii kbb Tak uskii profilee dekhtaaa rahegaaa<<", "Ajeeb generation hai ywr, Larkiya korean dhund rahi hai, Aur larky Russian!!🙂", "Aj kal ki nibiyo me khon kam attitude zyada hota hai bro🙂", "Kasy Han Sab Pyare Madni Munny or Muniyaan😊", "Bhut khail liya lrkion ki feelings k sath ao ab hum Ludo khailty han☺️♥️", "Jaaz cash sy 1400 ka loan leky sim h band kardi 🙂👍", "Number do ramzan mn sehri tak bat kr k chand_rat ko hi block krduga promise.🙂🤝", "Sara saal duniya ko topi krwany waly Ramadan m khud topi pehn kar ghumengy.🙂", "ji ji hukam kro 😂", "Bot na bolo! Janu bolo mujy aur janu sy piyar sy bat kerty hai 🥰🌸", "rat ko kahan thy nazar nahi ay bht miss kiya 🌸🌎", "Shaqal Sy masoom lgty ho 🥰 lkn hrkaton sy ni", "kash tum single hoty to aj hum mingle hoty 🥰😂", "Ha ha ab meri yaad ab ai na phly to janu sth busy thy 😾 ab ham ap sy naraz hai jao ap bye ☹️", "idr ao kuchii kuchii kru 😘", "Ary ary itna yd na kiya kro🥰", "Hy Ma Mar Jawa janu itna piyar krty mujsy😂", "Har Waqat Mjhy Tang Kerta Rhta Ha 😂" , "ary ary bolo meri jan kia hal ha ;)", "Bot jaan ha sbki" , "Ji Ji Kia hal chal ha apky 🌸" , "Bot nhi Shahzada bolo sun k acha lgta 🌸" , "Bot gulam ha apka hukam kryn 🌸" , "Bot nahi bolo piyar sy janu bola kro na 🥰" , "wo be yhi khty thy sb phr ek din koi utha k ly gya onko 😂" , "Meri jan ek tm hi ho jo dil ma bs gay ho🥰ni te koshish czna ne v bht kiti c" , "Badal gay na tm the hi lanti 😂" , "kesa tera steel dy doungy wrga moo ay 😂" , "Apki shkl aesy lgti jesy gandi tar pr suki jarab latkai ho 😂" , "Bot bot na karo ma apsy set nhi ho skta" , "ib ajao shup shup k btein krty ha 🌸" , "Ek kahani suno meri zubani suno lnt deny ka dil krta ha isiliye pehly dil ki suno🌸" , "Marry me, I can boil water" , "Mujsy shadi karlo chocolate la k duga daily 🌸" , "Idr ao kesa apka chapair jesa moo lg raha 😂" , "Ajao jaan pizza khilau apko 🌸" , "Duniya ma sb kuch khtm ho skta saway logo ki bakwas k" , "Everything is temporary,But katna is permanent 😂" , "Jitna mrzi janu manu krlo end ma ghr waly nh many gy 😂" , "Sb kuch ho skta lkn fb ka relation kbi china jitna nh chl skta" , "Allhumdiallah Kabhi Kasi laRki ko Bhen ki nazar se nhi dekHa😌🤧", "Mushkil Toh Hoti Hogi Naa itni Sardi Me Apne Dono Chehry Dhote Hoye🙂", "Mein B Urooj Pey Charna chahta hoon, Sorry Jana chahta*☹️", "Parry Hat ma Londy baz nhi hu 🙂🤝", "Do Ankho Wali Larkia Bewafa hoti Hn Bro🙂💔", "Mera beta bda ho kar larkiyo ke inbox me °hey hello° karega🙂🏃", "Likhte Likhte Qalm Thak Gya Iss Qadr Begartiyaan Han Tumhari🙂", "Itni Meri Age Ni Jitne Mera Masly Han Yawr💔😐", "Ameer Larki Set kr k sab Dosto ka udhar wapis karon ga😔🤲", "Lagtaa hai Career Bhi Titanic ki trhan dhoob Gaya Hai💔☹️", "𝑻𝑯𝑬 𝑯𝑬𝑨𝑹𝑻 𝑾𝑨𝑺 𝑴𝑨𝑫𝑬 𝑻𝑶 𝑩𝑬 𝑩𝑹𝑶𝑲𝑬𝑵 💔🥺", "2001 me bachy kehty thy ink Dena 2023 me bachy kehty Link Dena🙂", "Mehnat Kro!! Kamyabi Apke Hont Chume Gi🙂🙌🏻", "Kahani suno Muje payar howa tha Us ki tarf se inkar howa tha 🙂🤝", "Piyarii piyarii larkiyan message karen JazakAllah🌚♥️🙌", "itna single hun ky khuwab mai bhi  lrki k han krny sy phly ankh khul jati🙂", "Zroori Nhi Har Lrki Dhoka Dey, Kch Larkiyan Galiyan Bhi Deti Hen.🙁💸", "- sab chorr k chaly jaty hain kia etna bura hu mein - 🙂", "Piyari voice wali girlz mujhe voice message kar skti hen JazakAllah 🙂🤝", "Why you hate me..?? I am not your ex don't Hate me Please", "MuBarak H0o AapKa NaMe MakS0os LiST Me Top PRr aYa Hai 😹😹😹", "BeTa TuM SingLe Hi MaR0 GaY🙄🙂", "Samj Jao Larkiyo\n\nAbhi B WaQt Hai Dakh kr Koi Delete Ni Krtaw🙂", "Mard na Apne Haqooq Nahi Mangy \n\nJab Bhi Manga Whatsapp No Manga🥺", "Muj se Exam Me Cheating Nöıı Hotiw Relationship Me kya khaak Karu Ghw😔", "Mujy to ludo kehlni bhi ni ati apky Dil sy kya kehlu ga🙂", "Loyal Dhoonte Dhoonte khud Harami ban Gya Hon😔", "Mard ki izat karna Sikho Uski rooh se pyr kro Jism se nh Wehshii Womens💔😐","Haaye Main Sadke jawa Teri Masoom Shakal pe😘🙈💋💋💋💋💋  " , "Bot Na Bol Oye Janu bol Mujhe🙆‍♂🙈🦋🤍🍒🕊🥀💗 " , "Kal Kali pahadi ke piche mil tu jara😈⟴᭄⃢🍂༄* ✥❥⃟😌 🤭🐒" , "Main Gareebon Se Bt Nhi kRta 😉😝😋🤪" , "Itna Na Pass aa Pyar h0 JayGa😝😋🤪" , "Bolo Babu Tum Mujhse Pyar Karte Ho Na 🙈 " , "Are jaan Majaak ke mood me nhi hu main jo kaam hai bol do sharmao nahi🎸🎭━━•☆°•°•💗" , "Bar Bar Bolke Dimag Kharab Kiya toh.id hack kr lunga🙂♡• || _[🙂]~🖤 •|" , "Tum Band nhi Karoge kya?🙂" , "Gali Sunoge kya" ,  "Are Band kar Brna amabani se bolke tera net bnd kra dunga" , "M hath jod ke Modi Ji Se Gujarish Karta hu teri madad krenge❁⃝❤➸⃟̗̗̗̗̀̀̀̀̀̀̀̀̀̀̀̀̀ ❤̋҉̋⃢*💫" , "Tumko koi aur Kam nhi ha? Pura din Khate ho Aur Messenger pe Bot Bot Karte ho" , " Aaryan Ake tera band bja dega glt cammand mt dena🙈🙈🙈🙈 " , "Abhi Bola Toh Bola Dubara Mat Bolna" , "Bol De koi nahi dekh rha 🙄☢━💛🌹💛" , "Haaye Main Mar Jawa Babu Ek Chuma To Do Kafi Din Se Chumi Nahi Di 😝🦋🤍🍒🕊🥀💗" , "Dur Hat Be  Mujhe Aur Koi Kam Nahi Kya Har Waqt Mujhe Tang Kerte Rhte ho 😂" , "Are Bolo Meri Jaan Kya Hall Hai😚 " , "Chup Reh Nhi To Bahar Ake tera Dat Tod Dunga♡• || •___'[💔]~~🖤 " , "Yes Meri Jaan Chalo bedroom Romance karenge😹🙈", "teri yaad na aaye aisa koi din nhi😝🙈🙈🙈 " , "zindagi me lgne lge ki koi apna nhi hai to aajana mere pass mai rakh lunga tumko😝•||•●┼┼──🦋☘•|" , "Kal haweli pe mil Jara tu Kuchh jaruri baat karni hai😈🙈♡• || _[🙂]~🖤 •| " , "Saala pura din log bot bot krte hai pr koi gf nhi bnti🙄" , "Arre jaan jada paresan mat karo..My boss Chiku  babu..dekh lenge🙈😝🎸🎭━━•☆°•°•💗","Kya tumne abhi tk kaam nhi kiya...","Ab to ye social media nhi reh gya hai logo ne facebook ko dating website bna liya hai shi bola naa maine","Kisi or se dhoka khane se achha hai kii mere saath chalo momos or golgappe khayenge..","Chenese chiz mahabbat thi sahab tut kr bikhar gyi pr dil hindustani tha dusri pta liya turant","मोहब्ब्त 2 लोगों के बीच का नशा है जिसे पहले होश आ जाए वो बेवफा है।😌","Ek baat batao, kabhi khud message bhi kar lete ho ya sirf humein hi wait karwate ho? 😒","Ab tumse baat nahi karungi, bahut hi zyada irritate kar rahe ho 🙅","Tumhari muskurahat se meri saari pareshaniyaan dur ho jati hai 😊","Ab tumse baat nahi karungi, bahut hi zyada irritate kar rahe ho 🙅","सरकारी नौकरी के लिए कोटा और सुबह हल्का होने के लिए लोटा बहुत मायने रखता है।","Tumne aaj mere mood ko theek kar diya hai, thank you so much 😘","Ab tumse baat nahi karungi, bahut hi zyada irritate kar rahe ho 🙅"," Iss Dil Ko Toh Ek Baar Ko, Bahla Kar Chup Kara Lunga, Par Iss Dimaag Ka Kya Karun, Jiska Tumne Dahi Kar Diya Hai.","Tumhari yaad me jeena mushkil hai","Kabhi kabhi mujhe bhi lgta hai ki main kuchh jyaada hi busy ho gya hu","Haye M Mar Java Babu Ak Chuma To Do pr dena mere jute ko 😁😂😂 bura nhi manna mjak h","Dur HT Terek0o or Koi Kam Nhi h Jb DeKho Bot Bot ShaDi KerLe Mujhse 😉😋🤣","दोस्त हमेशा काले बनाओ  क्योंकि वो रंग नही बदलते😂","Kya tum mere liye ek surprise plan kar sakte ho? 🤔","Yaar, aaj bahut mushkil se time nikala hai, koi accha sa movie suggest karo 😊","haye babu ne ha boliya hai sayad propose krna hai mujhe ab bas bolo bolo babu 😘","कुछ बातें तो सीधे दिल पर जाकर लगती हैं जैसे कि आपके द्वारा डायल किया हुआ नंबर अभी किसी अन्य कॉल पर व्यस्त है","Mujhe tumse baat karke bahut achha lagta hai","रामचंद्र कह गए सिया से ऐसा कलयुग आयेगा  सच्चा आशिक तड़पेगा और मेला बाबू थाना थाएगा😝","are are bolo meri jaan kya haal h 😉 😘", "Hai tamanna hamain tumhain CHARSI bnain 🙂🤝 " ,"Ye duniya ik dhoka hai, tum bhi chohr do apne waly ko abhi bhi moka hai 😞✨🙌🤣", "Sukoon chahtii ho toh meri Wife ban jaOo 🫣🫰🏻" , "Tery jany ke bad😔Mny apny munh py likhwa liya Single hu pta lo"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

  if ((event.body.toLowerCase() == "by") || (event.body.toLowerCase() == "bye")) {return api.sendMessage("ChaL NiKaL 🙄", threadID);
   };

  if ((event.body.toLowerCase() == "inbox") || (event.body.toLowerCase() == "ib")) {
     return api.sendMessage("️ KYa IB IB 👿 Idher BOL MeRe SaMny ", threadID);
   };


   if ((event.body.toLowerCase() == "baby") || (event.body.toLowerCase() == "babu")) {
     return api.sendMessage("️🙈🙉🙊", threadID);
   };

   if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "admin")) {
     return api.sendMessage("𝗠𝗬 𝗢𝗪𝗡𝗘𝗥 𝗦𝗛𝗔𝗔𝗡 𝗞𝗛𝗔𝗠 𝗛𝗔𝗶🥀🖤", threadID);
   };
if ((event.body.toLowerCase() == "sim") || (event.body.toLowerCase() == "simi")) {
     return api.sendMessage("Sim Sim Na KRr IjjaT Sy MeRa Prefix LaGa 0or Bt kRr ITna Free Nhi kRta Me 😎🤞", threadID);
   };

   if ((event.body.toLowerCase() == "amy") || (event.body.toLowerCase() == "amyy")) {
     return api.sendMessage("Amy Amy Na KRr IjjaT Sy MeRa Prefix LaGa 0or Bt kRr ITna Free Nhi kRta Me 😎🤞", threadID);
   };

   if ((event.body.toLowerCase() == "tharki bot") || (event.body.toLowerCase() == "Bot tharki")) {
     return api.sendMessage("Tu TharKi Tra Bap TharKi TeRa DaDa TharKi 🤬🤗", threadID);
   };

   if ((event.body.toLowerCase() == "lanti bot") || (event.body.toLowerCase() == "lanti hai")) {
     return api.sendMessage("Aby Chuuu Tu LanTi Le KaB0ol kRr 🖐️🐾👣", threadID);
   };

   if ((event.body.toLowerCase() == "bc") || (event.body.toLowerCase() == "bhenchod")) {
     return api.sendMessage("Tu Hai Bc 🙂 Main T0o BoT Hun 😂😂😂 ", threadID);
   };

   if ((event.body.toLowerCase() == "ja rha") || (event.body.toLowerCase() == "ja rhi")) {
     return api.sendMessage("Are Tu Ja Na Ree ", threadID);
   };

   if ((event.body.toLowerCase() == "nikal") || (event.body.toLowerCase() == "nikl")) {
     return api.sendMessage("ChaL ChaL Tu NiKaL", threadID);
   };

   if ((event.body.toLowerCase() == "jan") || (event.body.toLowerCase() == "janu")) {
     return api.sendMessage("Aww🥰 Yes My LoVe", threadID);
   };

if ((event.body.toLowerCase() == "😀") || (event.body.toLowerCase() == "😀😀")) {
     return api.sendMessage("ShaRafat Sy MusKara Rhy 😂", threadID);
   };

   if ((event.body.toLowerCase() == "😃") || (event.body.toLowerCase() == "😃😃")) {
     return api.sendMessage("ChuhY JasA MuH Na DekHa 😆", threadID);
   };

   if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "😂😂")) {
     return api.sendMessage("Ye HanS RahY H0o Yaa ROo RahY Hoo 🤔 ", threadID);
   };

   if ((event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😁😁")) {
     return api.sendMessage("TrRi Shakal Sy Tu ZiaDa Dant Chmak RhYy 🫡", threadID);
   };

   if ((event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "😆😆")) {
     return api.sendMessage("Muh OpeN ankhY Band Ye koNsa Magic Ha ThaRki🙄", threadID);
   };

   if ((event.body.toLowerCase() == "😅") || (event.body.toLowerCase() == "😅😅")) {
     return api.sendMessage("Tri TinD Sy PaNi KYun TaPak Rha 😂", threadID);
   };

   if ((event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "🤣🤣")) {
     return api.sendMessage("AsY Kon HansTa Hai BesHram insaN", threadID);
   };

   if ((event.body.toLowerCase() == "😭") || (event.body.toLowerCase() == "😭😭")) {
     return api.sendMessage("Awww Meko V LoooNa Aa RaHa 🥹🥺", threadID);
   };

   if ((event.body.toLowerCase() == "😉") || (event.body.toLowerCase() == "😉😉")) {
     return api.sendMessage("GanDi NaZar Sy AnKh Na Mar 😂😂😂", threadID);
   };

   if ((event.body.toLowerCase() == "😗") || (event.body.toLowerCase() == "😗😗")) {
     return api.sendMessage("😚😚😚", threadID);
   };

   if ((event.body.toLowerCase() == "😙") || (event.body.toLowerCase() == "😙😙")) {
     return api.sendMessage("😗😗😗", threadID);
   };

   if ((event.body.toLowerCase() == "😚") || (event.body.toLowerCase() == "😚😚")) {
     return api.sendMessage("😗😙😚", threadID);
   };

   if ((event.body.toLowerCase() == "😘") || (event.body.toLowerCase() == "😘😘")) {
     return api.sendMessage("MeKo BHi kR L0o Naw Pappi 🥹", threadID);
   };

   if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "🥰🥰")) {
     return api.sendMessage("Aww Love You Naw Jaan 😘", threadID);
   };

   if ((event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😍😍")) {
     return api.sendMessage("ChaLl Hatt ThaRki", threadID);
   };

   if ((event.body.toLowerCase() == "🤩") || (event.body.toLowerCase() == "🤩🤩")) {
     return api.sendMessage("InSano Ki Ankhe HoTi Uh Ke Star Hain 😂😂😂", threadID);
   };

   if ((event.body.toLowerCase() == "🥳") || (event.body.toLowerCase() == "🥳🥳")) {
     return api.sendMessage("0oo0o TeRa HaPpy BirthDay", threadID);
   };


   if ((event.body.toLowerCase() == "🙃") || (event.body.toLowerCase() == "🙃🙃")) {
     return api.sendMessage("HaYe Rabba ☹️", threadID);
   };

   if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == "🙂🙂")) {
     return api.sendMessage("Awww Fake Smile Na Do Me Hu Naw Baby 🥺🥹🥹", threadID);
   };

   if ((event.body.toLowerCase() == "🥲") || (event.body.toLowerCase() == "🥲🥲")) {
     return api.sendMessage("Ase Muu BaNa KRr MT R0o 😒", threadID);
   };

   if ((event.body.toLowerCase() == "😊") || (event.body.toLowerCase() == "😊😊")) {
     return api.sendMessage("AaJ Tuu BahUt KhuSh Ho 🫡", threadID);
   };

   if ((event.body.toLowerCase() == "☺️") || (event.body.toLowerCase() == "☺️☺️")) {
     return api.sendMessage("Ye Smile Na D0o Naw🥺", threadID);
   };

   if ((event.body.toLowerCase() == "😌") || (event.body.toLowerCase() == "😌😌")) {
     return api.sendMessage("HaYe Mas0om", threadID);
   };

   if ((event.body.toLowerCase() == "😏") || (event.body.toLowerCase() == "😏😏")) {
     return api.sendMessage("SasTa AttiTude Mtt dekHya kR MerY SamNy 😒😐", threadID);
   };

   if ((event.body.toLowerCase() == "😴") || (event.body.toLowerCase() == "😴😴")) {
     return api.sendMessage("ChaL Ja NaHa kRr Aa", threadID);
   };

   if ((event.body.toLowerCase() == "😪") || (event.body.toLowerCase() == "😪😪")) {
     return api.sendMessage("Ye kYa kR rahY Apni  Nose Sth🤔😂", threadID);
   };

   if ((event.body.toLowerCase() == "🤤") || (event.body.toLowerCase() == "🤤🤤")) {
     return api.sendMessage("Ral Mat Tapka MeKo ulTi Aa Rhi 🤮🤢", threadID);
   };

   if ((event.body.toLowerCase() == "😋") || (event.body.toLowerCase() == "😋😋")) {
     return api.sendMessage("Yah ToTay Jesi Zuban Mt DiKha 😂", threadID);
   };

   if ((event.body.toLowerCase() == "😛") || (event.body.toLowerCase() == "😛😛")) {
     return api.sendMessage("Aww Gandyy 😂😂😂", threadID);
   };

   if ((event.body.toLowerCase() == "😝") || (event.body.toLowerCase() == "😝😝")) {
     return api.sendMessage("ABy Ankhe KhoL 0or ZuBan Ander kRr WRna KaT DunGa", threadID);
   };

   if ((event.body.toLowerCase() == "😜") || (event.body.toLowerCase() == "😜😜")) {
     return api.sendMessage("BaRi MasTi ChaRi Chai TeRy Ko 1 Ankh Band KRrke ZuBan Bhir Aagyi 😂😂😂", threadID);
   };

   if ((event.body.toLowerCase() == "🤪") || (event.body.toLowerCase() == "🤪🤪")) {
     return api.sendMessage("Ye Ajeeb_0_GaReeb Muu Na BaNa 😂 CarT0on 🤣", threadID);
   };

   if ((event.body.toLowerCase() == "🥴") || (event.body.toLowerCase() == "🥴🥴")) {
     return api.sendMessage("SasTa Nasha KRr LiYa LagTa Hai 😂", threadID);
   };

   if ((event.body.toLowerCase() == "😔") || (event.body.toLowerCase() == "😔😔")) {
     return api.sendMessage("JanU ChoR Gyaw Kya 😒😂", threadID);
   };

   if ((event.body.toLowerCase() == "🥺") || (event.body.toLowerCase() == "🥺🥺")) {
     return api.sendMessage("Hayye BabY Looty Ni Naw ye loo pioo 🍼🥺", threadID);
   };

   if ((event.body.toLowerCase() == "😬") || (event.body.toLowerCase() == "😬😬")) {
     return api.sendMessage("Kis Ki Baja Di 🤨🧐", threadID);
   };

   if ((event.body.toLowerCase() == "😑") || (event.body.toLowerCase() == "😑😑")) {
     return api.sendMessage("Wha Muu Ke SaTh Ankhe Be Band H0o GYi 😂", threadID);
   };

   if ((event.body.toLowerCase() == "😐") || (event.body.toLowerCase() == "😐😐")) {
     return api.sendMessage("TeRyy Muhh Py Elfiii Lgaw Di kYa ksi ny 😹", threadID);
   };

   if ((event.body.toLowerCase() == "😶") || (event.body.toLowerCase() == "😶😶")) {
     return api.sendMessage("Nak T0o Thi Nhi Muu Be Gyb H0o GYa TeRa 😂😂😂", threadID);
   };

   if ((event.body.toLowerCase() == "🤐") || (event.body.toLowerCase() == "🤐🤐")) {
     return api.sendMessage("Ab Tri Awaz Ai Na T0o Me Alfi Sy Band Krunga 😒", threadID);
   };

   if ((event.body.toLowerCase() == "🤔") || (event.body.toLowerCase() == "🤔🤔")) {
     return api.sendMessage("KashmiR AZaaD KrwanY Ka SocH RahY Tyaa 🙄🤔", threadID);
   };

   if ((event.body.toLowerCase() == "🤫") || (event.body.toLowerCase() == "🤫🤫")) {
     return api.sendMessage("Tri Yeh Ungli Tri He Nak Me DyDeni MaiNy 😒😂", threadID);
   };

   if ((event.body.toLowerCase() == "🤭") || (event.body.toLowerCase() == "🤭🤭")) {
     return api.sendMessage("😂😂😂", threadID);
   };

   if ((event.body.toLowerCase() == "🥱") || (event.body.toLowerCase() == "🥱")) {
     return api.sendMessage("AJa BaBe MeLy Pas S0o Jaa😜", threadID);
   };

   if ((event.body.toLowerCase() == "🤗") || (event.body.toLowerCase() == "🤗🤗")) {
     return api.sendMessage("PhLe NaHa kRr Aa 😂", threadID);
   };

   if ((event.body.toLowerCase() == "😱") || (event.body.toLowerCase() == "😱😱")) {
     return api.sendMessage("KYa HuWa 😱 SheSha DeKh LiYa KYa 😳", threadID);
   };

   if ((event.body.toLowerCase() == "🤨") || (event.body.toLowerCase() == "🤨🤨")) {
     return api.sendMessage("Tu Hushyar Ban kRr Na Dekh Main Hun Naw 😂", threadID);
   };

   if ((event.body.toLowerCase() == "🧐") || (event.body.toLowerCase() == "🧐🧐")) {
     return api.sendMessage("Tu HaT Main DekhTa Hun 🧐🧐🧐", threadID);
   };

   if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "😒😒")) {
     return api.sendMessage("AsY DekH Rahy H00o MujH Mas0om ki Jan leNi Hai Tyaa 🥺", threadID);
   };

   if ((event.body.toLowerCase() == "🙄") || (event.body.toLowerCase() == "🙄🙄")) {
     return api.sendMessage("UpeR TeRi PhupHi NaSreen Hai kYa 🙄", threadID);
   };

   if ((event.body.toLowerCase() == "😤") || (event.body.toLowerCase() == "😤😤")) {
     return api.sendMessage("AbbY Ye kYa kR raHa hai 😂", threadID);
   };

   if ((event.body.toLowerCase() == "😠") || (event.body.toLowerCase() == "😠😠")) {
     return api.sendMessage("Ma nY Taaa tiYa Jo GhuSsa KRr RahY 🥺😢", threadID);
   };

   if ((event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "😡😡")) {
     return api.sendMessage("Ma nY Taaa tiYa Jo GhuSsa KRr RahY 🥺😢", threadID);
   };

   if ((event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "🤬🤬")) {
     return api.sendMessage("Aww 😐", threadID);
   };

   if ((event.body.toLowerCase() == "😞") || (event.body.toLowerCase() == "😞😞")) {
     return api.sendMessage("Aww My lOve UpR UtHao Muh", threadID);
   };

      if ((event.body.toLowerCase() == "😓") || (event.body.toLowerCase() == "😓😓")) {
     return api.sendMessage("☹️", threadID);
   };

      if ((event.body.toLowerCase() == "😢") || (event.body.toLowerCase() == "😢😢")) {
     return api.sendMessage("Looo Ni Melii Jàwn", threadID);
   };

      if ((event.body.toLowerCase() == "☹️") || (event.body.toLowerCase() == "☹️☹️")) {
     return api.sendMessage("awww baby🥺", threadID);
   };

      if ((event.body.toLowerCase() == "🙁") || (event.body.toLowerCase() == "🙁🙁")) {
     return api.sendMessage("Aww taa Huwa☹️", threadID);
   };

      if ((event.body.toLowerCase() == "😕") || (event.body.toLowerCase() == "😕😕")) {
     return api.sendMessage("🙁🙁🙁", threadID);
   };

      if ((event.body.toLowerCase() == "😰") || (event.body.toLowerCase() == "😰😰")) {
     return api.sendMessage("Aww 😨", threadID);
   };


      if ((event.body.toLowerCase() == "😨") || (event.body.toLowerCase() == "😨😨")) {
     return api.sendMessage("😰😰😰", threadID);
   };

      if ((event.body.toLowerCase() == "😧") || (event.body.toLowerCase() == "😧😧")) {
     return api.sendMessage("😳", threadID);
   };

      if ((event.body.toLowerCase() == "😦") || (event.body.toLowerCase() == "😦😦")) {
     return api.sendMessage("😧", threadID);
   };

      if ((event.body.toLowerCase() == "😮") || (event.body.toLowerCase() == "😮😮")) {
     return api.sendMessage("OYyye MuuH BanD KRr WrNa MakHi Chali JaNi Hai😂😂😂", threadID);
   };

      if ((event.body.toLowerCase() == "😯") || (event.body.toLowerCase() == "😯😯")) {
     return api.sendMessage("😲", threadID);
   };

      if ((event.body.toLowerCase() == "😲") || (event.body.toLowerCase() == "😲😲")) {
     return api.sendMessage("😯", threadID);
   };

      if ((event.body.toLowerCase() == "😳") || (event.body.toLowerCase() == "😳😳")) {
     return api.sendMessage("Kya hOgYa Inna AnkhY PhaR pHar k MujhY ku Dekh Rahy Ho 😳😳😳", threadID);
   };

      if ((event.body.toLowerCase() == "🤯") || (event.body.toLowerCase() == "🤯🤯")) {
     return api.sendMessage("TeRy Sar Me BumB Kis Ny PhoRa 😂", threadID);
   };

      if ((event.body.toLowerCase() == "😖") || (event.body.toLowerCase() == "😖😖")) {
     return api.sendMessage("ShaDeed Sad Ho kAaa BabY😂", threadID);
   };

      if ((event.body.toLowerCase() == "😣") || (event.body.toLowerCase() == "😣😣")) {
     return api.sendMessage("😣😣😣", threadID);
   };

      if ((event.body.toLowerCase() == "😩") || (event.body.toLowerCase() == "😫")) {
     return api.sendMessage("ChaL HaT NoTanKii😫😂😂", threadID);
   };

      if ((event.body.toLowerCase() == "😵") || (event.body.toLowerCase() == "😵😵")) {
     return api.sendMessage("TeRi Eyes kiDr Gyye😟", threadID);
   };

      if ((event.body.toLowerCase() == "🥶") || (event.body.toLowerCase() == "sardi")) {
     return api.sendMessage("Aww BaBe  SarDi Lag Rhi T0o MeRe PaSs Ajao 🙈😜", threadID);
   };

      if ((event.body.toLowerCase() == "🥵") || (event.body.toLowerCase() == "🥵🥵")) {
     return api.sendMessage("NaHa Le 😂🥶", threadID);
   };

      if ((event.body.toLowerCase() == "🤢") || (event.body.toLowerCase() == "🤮")) {
     return api.sendMessage("Aaaaa Tho0oo", threadID);
   };

      if ((event.body.toLowerCase() == "🤧") || (event.body.toLowerCase() == "😷")) {
     return api.sendMessage("Aryy BhaG Ja0o MeKo bHi BeemaR kR0o gaY 🥺", threadID);
   };

      if ((event.body.toLowerCase() == "🤒") || (event.body.toLowerCase() == "🤕")) {
     return api.sendMessage("Aww BaBe K0o Ta HuWa Idher Aow ThoRa Pyal L0o 😜💉💉💉", threadID);
   };

      if ((event.body.toLowerCase() == "😎") || (event.body.toLowerCase() == "😎😎")) {
     return api.sendMessage("ChaSHma BHi New Lelo ab 🙂", threadID);
   };

      if ((event.body.toLowerCase() == "😇") || (event.body.toLowerCase() == "😇😇")) {
     return api.sendMessage("😇😇😇", threadID);
   };

      if ((event.body.toLowerCase() == "🥸") || (event.body.toLowerCase() == "🤓")) {
     return api.sendMessage("AiNeK WaLa JiN😂", threadID);
   };

      if ((event.body.toLowerCase() == "🤡") || (event.body.toLowerCase() == "🤡🤡")) {
     return api.sendMessage("Aww S0o SweeT 😂 CarT0on", threadID);
   };

      if ((event.body.toLowerCase() == "😈") || (event.body.toLowerCase() == "👿")) {
     return api.sendMessage("👽👽👽", threadID);
   };

      if ((event.body.toLowerCase() == "😹") || (event.body.toLowerCase() == "😹😹")) {
     return api.sendMessage("AbbY BiLli 😂", threadID);
   };

      if ((event.body.toLowerCase() == "😺") || (event.body.toLowerCase() == "😸")) {
     return api.sendMessage("😼😼😼", threadID);
   };

      if ((event.body.toLowerCase() == "😼") || (event.body.toLowerCase() == "😼😼")) {
     return api.sendMessage("Ye SaSTa AttiTuDe EdR MtT DekHa😂", threadID);
   };

      if ((event.body.toLowerCase() == "💋") || (event.body.toLowerCase() == "💋💋💋")) {
     return api.sendMessage("Yah PapPiYa Nhi kRr Kxh Kxh Nhi Bht KxH HoTa Hai 😂😂😂", threadID);
   };

      if ((event.body.toLowerCase() == "❤️") || (event.body.toLowerCase() == "💚")) {
     return api.sendMessage("🖤🧡💜💙🤎🤍", threadID);
   };

      if ((event.body.toLowerCase() == "🧡") || (event.body.toLowerCase() == "🤎")) {
     return api.sendMessage("❤️🖤🤍🤎💚💜", threadID);
   };

      if ((event.body.toLowerCase() == "💜") || (event.body.toLowerCase() == "💙")) {
     return api.sendMessage("💚🤎🤍🖤❤️🧡", threadID);
   };

         if ((event.body.toLowerCase() == "🖤") || (event.body.toLowerCase() == "🤍")) {
     return api.sendMessage("❤️🧡💛💚💙💜🤎", threadID);
   };

      if ((event.body.toLowerCase() == "👻") || (event.body.toLowerCase() == "👻👻")) {
     return api.sendMessage("Bh0oT Hi H0o", threadID);
   };

      if ((event.body.toLowerCase() == "🖕") || (event.body.toLowerCase() == "🖕🖕")) {
     return api.sendMessage("Bund Me LeLe ApNi Bhens Chor 😂😂😂", threadID);
   };

      if ((event.body.toLowerCase() == "💉") || (event.body.toLowerCase() == "💊")) {
     return api.sendMessage("TumHy isKi ZaiDa Zarurat Hai 🤣", threadID);
   };

      if ((event.body.toLowerCase() == "🙈") || (event.body.toLowerCase() == "🙊")) {
     return api.sendMessage("Sch Me Bander He Hai 😂", threadID);
   };

      if ((event.body.toLowerCase() == "Chutia") || (event.body.toLowerCase() == "chutiya")) {
     return api.sendMessage("Tu Hai ChuTiya 🙂 Main T0o BoT Hun Naw🥺😂", threadID);
   };

      if ((event.body.toLowerCase() == "oye") || (event.body.toLowerCase() == "oyee")) {
     return api.sendMessage("0ye HoYe 😈", threadID);
   };

   if ((event.body.toLowerCase() == "Kkkkkk") || (event.body.toLowerCase() == "jjj")) {
     return api.sendMessage("KYa ", threadID);
   };

   if ((event.body.toLowerCase() == "Kkkkk") || (event.body.toLowerCase() == "Buraaa")) {
     return api.sendMessage(" H I J K L M N O P Q R S T U V W X Y Z 🙄", threadID);
   };

   if ((event.body.toLowerCase() == "huh") || (event.body.toLowerCase() == "hmm")) {
     return api.sendMessage("Kya Hmm 🙄ThaRki", threadID);
   };

   if ((event.body.toLowerCase() == "acha") || (event.body.toLowerCase() == "acha g")) {
     return api.sendMessage("Han Ji 🙄 Jaan", threadID);
   };

   if ((event.body.toLowerCase() == "abeer") || (event.body.toLowerCase() == "@Shayan X.")) {
     return api.sendMessage("𝐀𝐁𝐄𝐄𝐑 𝐓𝐎 𝐒𝐀𝐍𝐀 𝐊𝐀 𝐁𝐀𝐇𝐈 𝐇𝐀 𝐘𝐀𝐑 ", threadID);
   };

   if ((event.body.toLowerCase() == "bot goes to sleep") || (event.body.toLowerCase() == "bot goes to sleep")) {
     return api.sendMessage("I'm a bot, you're the one who should go to sleep <3", threadID);
   };

   if ((event.body.toLowerCase() == "has the bot eaten yet") || (event.body.toLowerCase() == "bot an comrade")) {
     return api.sendMessage("I'm full when I see you eat <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love me") || (event.body.toLowerCase() == "does the bot love me")) {
     return api.sendMessage("Yes <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot have a brand") || (event.body.toLowerCase() == "does the bot fall")) {
     return api.sendMessage("Yes <3", threadID);
   };
   mess = "{name}"

  if (event.body.indexOf("Bot") == 0 || (event.body.indexOf("bot") == 0)) {
    var msg = {
      body: `┏━━ೋ•  •ೋ━━┓\n       𓆩»»𝑶𝑾𝑵𝑬𝑹««★™»»𝑻𝑨𝑯𝑨 𝑲𝑯𝑨𝑵««𓆩๏𓆪\n┗━━ೋ•  •ೋ━━┛\n\n「 𓆩⃝${name}𓆩๏𓆪 」  \n\n❥──────────────❥\n\n    ${rand}\n\n❥──────────────❥`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }