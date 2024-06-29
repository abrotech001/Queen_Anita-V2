//David Cyril
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUVxV3dIYTNZZVpWakdReHgxL3ZLRFh4VnpNN3Y5UTllOVZEZzVHcTJsbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieVBYcnl4am1oV1lNUGV2TDNla3BGSk5QdUV2RHdScmNWK1A0MHUrWVYwTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhTURKQk5Jblpqa3pQUzl0QTBOcFg5QnZXeG5kbnloWlJKUE5rVWlSWlVzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjYmcyMXp4b1dKLzdNYWJjL0Zac2xtcncwcHd5a1RWRFVONnZXVTBENDBNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFNMjJQTXVQYy9rVXQvK3BFVVhRbm1PWGZQWjdNVjYyd3A0MHpOTTI4MW89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVuYjZzNUd4ZXVSWTdmVGxNYVdub1NXV0twZlNkc2s1TlV6SVh5UGRRUk09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUYwNmVLeVh4M0IvOHcrcUNIOS9DRU5BYU51Nlc1MkZxcHhyeDd1eDFIQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidHFTZmJJYWIwQURlYkY4Z3lpN0YzWmdna0RIWFFJY0V2bzFrYkxvRnUyST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldONTlWVGVUYVdLMzhDWTkwcHpXcHhJSFZFY2lpNW1OazRHTjkxK1RCN0xpeU05YVMzRUxvUDBWSmRURnd1ZmhudlJSbmZLaElHRjBSTEo0QzZxMENnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MiwiYWR2U2VjcmV0S2V5Ijoia3dOaUNzNHVyYTl0TUxCN29RdXc0TnNvYXRQN2hhejVhNEVOQytzZmFVST0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiOExHYXZZNUVSVmVqZzU0NHNpcExsdyIsInBob25lSWQiOiJiMjk3ODk0NS1mOWU4LTRmMDUtOWI3YS03MDJiZGU4Nzk5NDQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0E2TDdvRS9pMUxLb091N0c1dDYweTRuM1VVPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJSXB3cGFac0c0YzNXVkxkMFVaUDc0MlZQR289In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNMU3ZvTTRHRUxqbytyTUdHQXNnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJpSVU1eFhyS1J2c2VJai94dFRYemxEUk90K1BSU3l0YjlJV0Erc0RpRmcwPSIsImFjY291bnRTaWduYXR1cmUiOiIrY3pQOUtaNHhaQnJXbFlLNEJvZjFxVEtBZXBWRVd2RkFlSGplem9DRUJLOFlya1JmTkpVYkZmVmlUVHVUaE04ZVZGc2tBamNCSTQydXdGSUdiQmlCUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiV0FTYjFOUkNaN2gxa0dvcm9wSFE3WmFLQ0ZUK0p5TkJJRHdxODk4SDJWaURkVlVXaGZaMXV3MW0vZTVHTFkyZDJ6SnpkaDVOS0NLem5HeGU1OGtKQnc9PSJ9LCJtZSI6eyJpZCI6IjIzNDgxMDAxNTEwNDg6NTJAcy53aGF0c2FwcC5uZXQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0ODEwMDE1MTA0ODo1MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZaUZPY1Y2eWtiN0hpSS84YlUxODVRMFRyZmowVXNyVy9TRmdQckE0aFlOIn19XSwicGxhdGZvcm0iOiJpcGhvbmUiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTk1Nzk3MTcsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTmhYIn0=";
global.MONGODB = process.env.MONGODB_URI || "";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "null";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "")
  : "2348100151048";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg,https://telegra.ph/file/7275967ae7b5283fada69.jpg";
global.userImages =
  process.env.USER_IMAGES ||
  "https://telegra.ph/file/7275967ae7b5283fada69.jpg,https://telegra.ph/file/c3049cd3ac77f371e119e.jpg,https://telegra.ph/file/a22200a780671e0e32383.jpg,https://telegra.ph/file/85fe388fdd14930cf86a0.jpg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4,https://telegra.ph/file/9691d14be9f6e392422a4.mp4,https://telegra.ph/file/81dd10d6810f0c2e616f2.mp4,https://telegra.ph/file/c858cdfbea4d459ef251c.mp4";
///===========[global iMPORTS]====================//

module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "!",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`©QUEEN_ANITA-V2`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WhatsApp").toUpperCase(),
};
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/QUEEN_ANITA-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaZsyQ21XqudOTjyG30Z";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaZsyQ21XqudOTjyG30Z";
global.devs = "2349066528353";
global.msg_style = process.env.STYLE || "4";
global.session_reset = process.env.SS_RESET || "false";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "null";
global.read_status_from = process.env.READ_STATUS_FROM || "null";
global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://mainv2-f66485a0f702.herokuapp.com/";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
