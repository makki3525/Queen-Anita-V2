//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5vf05MUaVgitg30e";
global.website = process.env.GURL || "..";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "...";
global.devs =process.env.DEVS || "..";
global.sudo = process.env.SUDO || "923257607934,923245643588";
global.owner = process.env.OWNER_NUMBER || "923245643588";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "..";
global.waPresence = process.env.WAPRESENCE || "unavailable";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUY4QnRENnRFV0tqMnZoRGoyYStGK1g5YkxOVXJ4SHlBeWkwRmYwYnNtbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYzFYSXhmYVR5d0dsMktrR3FCSWpTYkFpak1CVVBqUUY4dHJSVS9OR2RDST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhQmV4VmtUTHdvSEdMbFpDN21lUWxnUG0va243ZGJLVEczOSt1OXoyY0YwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBOGJOaVNWS09YRmFxV0FnS000VW9RTUVlbE0xbkNqUU5UU0g1dkFYQm1rPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9NSWVqcnlsblBtOXJBeFFXYUtoQXgxRWtNNGJmbWNENHE3M1piMVlJa2M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBXNXZEQklsQ2E0dVhTaGV3VHBpaUZFZVFRSFprUUg0MTBVeVdrK2NWUU09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidURGV1VHNmlPdnF6YkRZeGQ3TnYxVXZRbFA3WFc0aGVPamFJMm12WWMzRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN1B0eWR2RkhWWUluUUw0ZzZFU3N1MVpxdVhpME0zY21yQ3VtdXdlZ3Nqcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdSTm5UK2UzYjl6b3RFdXVWUTh0eVEvQzYrdmlVOWlhaXRWbVltbjNmTmRsQjhOVk1HUEg3YVcyTSt5RTFxYUY4ZTZSeXhIVnJmcGRqdmFrYStCTkFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDIsImFkdlNlY3JldEtleSI6Ik1IdjlYN2JOcFRwN3RZdUxLUXQ2aU1TYWc0VENoNys0amhCOGdIdlJiSjg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkFfYk4wVGNVUlg2Rmt3eDhETGJWenciLCJwaG9uZUlkIjoiMWEwZTZkZjQtNjg1MS00NmNjLTg3NmMtN2VjNjIzZTRmMDEyIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFsZ2V2Mm1mRi9RVkRsc3V1M3UxTzZwcnpocz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzZHRBVng4OFFUQk92UU03amh0clVqU000VVU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQkM2OVc3TE0iLCJtZSI6eyJpZCI6IjkyMzI1NzYwNzkzNDoyNkBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTzdkczVnREVLMmgycllHR0FnZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiWHpXbTZRczZ0TjNoZjhRb3lRTG5ySmN5UUJ3Ukt5a2hUNUN0RlNrUUMyVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiSmtwWHBnM1JPOVo0akZPRnlndDdSRTcxTjZURXlJSEJoVTd4MnBwQzFaaUx1bWFSN3RZYVliVkEwYVVkaUkzUXlra1BOV0oyazFFemNtelhqR1RvRHc9PSIsImRldmljZVNpZ25hdHVyZSI6Inh6YzltWEVPelhXbkVWZ3hPNGdXbFV1ZVV5WDYwbG1xQzBXdzUvZ3Rld0lHT2F5UFRybSthU1U1d1c4SWs2SFMxUUpQclJuWUJuSXZkVVJyRCthR0FBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMjU3NjA3OTM0OjI2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlY4MXB1a0xPclRkNFgvRUtNa0M1NnlYTWtBY0VTc3BJVStRclJVcEVBdGwifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjUzMzc3ODUsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBT0dwIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝓟𝓸𝔀𝓮𝓻𝓮𝓭 𝓑𝔂 𝓜𝓪𝓴𝓴𝓲-𝓜𝓓",
  author: process.env.PACK_AUTHER || "𝕄𝔸𝕂𝕂𝕀
𝟡𝟚𝟛𝟚𝟜𝟝𝟞𝟜𝟛𝟝𝟠𝟠",
  packname: process.env.PACK_NAME || "𝕄𝔸𝔻𝔼 𝔹𝕐",
  botname: process.env.BOT_NAME || "BATMAN-MD",
  ownername: process.env.OWNER_NAME || "Muhammad Makki",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
