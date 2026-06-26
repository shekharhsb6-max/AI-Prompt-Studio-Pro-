/**
 * ==========================================================
 * AI Prompt Studio Pro
 * Version : 0.1.0
 * File    : Installer.gs
 * Author  : Himadri Shekhar Bhattacharjee & ChatGPT
 * ==========================================================
 */

const APP = {
  NAME: "AI Prompt Studio Pro",
  VERSION: "0.1.0",

  SHEETS: [
    "Dashboard",
    "Prompt Builder",
    "Video Builder",
    "Prompt Library",
    "Character Library",
    "Style Library",
    "Camera Library",
    "Lighting Library",
    "Hair Library",
    "Pose Library",
    "Negative Prompts",
    "Templates",
    "History",
    "Settings",
    "Help"
  ]
};

/**
 * Creates custom menu
 */
function onOpen() {

  SpreadsheetApp.getUi()
    .createMenu("🎨 AI Prompt Studio")
    .addItem("Install Studio","installStudio")
    .addSeparator()
    .addItem("Open Dashboard","openDashboard")
    .addSeparator()
    .addItem("About","aboutStudio")
    .addToUi();

}


/**
 * Main installer
 */
function installStudio(){

  const ss = SpreadsheetApp.getActiveSpreadsheet();

  APP.SHEETS.forEach(name=>{

      let sh = ss.getSheetByName(name);

      if(!sh){

          sh = ss.insertSheet(name);

      }

  });

  createDashboard();
  createSettings();
  createHelp();

  SpreadsheetApp.getUi().alert(
    APP.NAME +
    "\nVersion : " +
    APP.VERSION +
    "\n\nInstallation Complete."
  );

}


/**
 * Dashboard
 */
function createDashboard(){

  const sh = SpreadsheetApp
      .getActiveSpreadsheet()
      .getSheetByName("Dashboard");

  sh.clear();

  sh.setTabColor("#1565C0");

  sh.getRange("A1:H1")
      .merge();

  sh.getRange("A1")
      .setValue("AI Prompt Studio Pro")
      .setFontSize(22)
      .setFontWeight("bold")
      .setHorizontalAlignment("center");

  sh.getRange("A3").setValue("Application");
  sh.getRange("B3").setValue(APP.NAME);

  sh.getRange("A4").setValue("Version");
  sh.getRange("B4").setValue(APP.VERSION);

  sh.getRange("A6").setValue("Status");
  sh.getRange("B6").setValue("Installed");

}


/**
 * Settings
 */
function createSettings(){

  const sh = SpreadsheetApp
      .getActiveSpreadsheet()
      .getSheetByName("Settings");

  sh.clear();

  sh.getRange("A1").setValue("Setting");
  sh.getRange("B1").setValue("Value");

  sh.getRange("A2").setValue("Theme");
  sh.getRange("B2").setValue("Light");

  sh.getRange("A3").setValue("Default AI");
  sh.getRange("B3").setValue("ChatGPT");

  sh.getRange("A4").setValue("Aspect Ratio");
  sh.getRange("B4").setValue("4:5");

}


/**
 * Help
 */
function createHelp(){

  const sh = SpreadsheetApp
      .getActiveSpreadsheet()
      .getSheetByName("Help");

  sh.clear();

  sh.getRange("A1")
    .setValue("AI Prompt Studio Pro");

  sh.getRange("A3")
    .setValue("Run Install Studio from the AI Prompt Studio menu.");

}


/**
 * Opens Dashboard
 */
function openDashboard(){

  const ss = SpreadsheetApp.getActiveSpreadsheet();

  ss.setActiveSheet(
    ss.getSheetByName("Dashboard")
  );

}


/**
 * About
 */
function aboutStudio(){

  SpreadsheetApp.getUi().alert(

      APP.NAME +
      "\nVersion : " +
      APP.VERSION +
      "\n\nDeveloped by\nHimadri Shekhar Bhattacharjee"

  );

}
