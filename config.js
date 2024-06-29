//David Cyril
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0xHMDhMUEFKTDZVeEpjMlM4aFlFaENHRGRkUjlWdmNOSWFCSjRJVlFFaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibTZoUHJ5UU5Qc2R6ZjY1MTA0TWVabmV1QUlTZDNBMmNZSlcvdHR1bE9UWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwQ3JLSEdRazMycjZrRm4wOTdjU1BhajhWeTkrVy9GenAyMnFuTVErVlUwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1Wkx0eDBKMUljbG85Q0MzYk93UDN6YWZ1dEZHYTNxQVUrenZDdE4xdnc4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFCRk5rWUxUdE01MG9KR24xUVBkQ0FiQmZ3TisxSGkwM2NNUzlYS2thMk09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdjSDV3MGgvQW9WM1YrMGtYWVlvVkU4ZFBUL3RPZUtpeTZ4SjJ6ZFRIVkU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUNDdnpyejVFMkJkMFluK3hRZnMrNjVkRzNJeUYyV3p0c2dXNFVidVBITT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiczVQQkJZdnZsNy9wVkVrcHV3N3lJNGdjNSs0M2o5bFl0UEpSS09hbXBTYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iitsdzk0ZU1KeXgzTjVnRitFL1c2YklBa1l3VVFnclJUa1dVYk05NDdTZFlRdXZ3eFllMENkaXVZTXVLVVI0Z3Joc0FpU2hqblRFZmZWeDJvZEFwSWdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjYsImFkdlNlY3JldEtleSI6IjhIMC9WM3lSR2xBT3Z5bTYxWmlvVkIxT01OMTd3OWJFMUVJWUpqWFQwb3M9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ik5YMm92UE5VVGRPbmxqZHFyTUFJZVEiLCJwaG9uZUlkIjoiNzg3OTFkMjMtZTY0NC00M2UyLTlhMWYtNTY4NWQwNTlhMWM2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZQdXVXMkFkQWNHU2o4ZWt2bk05R1F6bkdsND0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVcjc0RzZYd0lsSGlIVUI4SDExb0FOQ2IyNkE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUVpRRVBKTDciLCJtZSI6eyJpZCI6IjI1NDc4MjU3MjExMDo0OUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJEYXZpZCBDeXJpbCA1LjAifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xPeHFmWUhFTFdrKzdNR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ind5dnpBczhubkJzdUtGUlhoSmJjT050UmZXYkNuV241RGZsNkIra1BSWGc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IllRRTlpaTRrd2pwcTRTd2NOak9KYnhGb3RCWW9KcmFwdnBLaEhNQ3JMYVRtbGljR2R4bFp4enJuM0ZabEZscjNjKzJnMTFYSklzV010VXhXYlZSVUFRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJXUWIxeXFrTnBhVGZOR1NpRC9oenhZY2ZPVFlId2lZYjVieDgyZEpIRWltODgybzBIWkc2eG96K2hVd2dpWnFvMGQ1MHV4MVVYOGY1UHc3c2Q4YnRqdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDc4MjU3MjExMDo0OUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjTXI4d0xQSjV3YkxpaFVWNFNXM0RqYlVYMW13cDFwK1EzNWVnZnBEMFY0In19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE5NTg3Mzk0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUwzRSJ9";
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
