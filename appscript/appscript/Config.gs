/**
 * ==========================================================
 * AI Prompt Studio Pro
 * Config.gs
 * Version 0.1.0
 * ==========================================================
 */

const CONFIG = {

  APP_NAME: "AI Prompt Studio Pro",

  VERSION: "0.1.0",

  AUTHOR: "Himadri Shekhar Bhattacharjee",

  DEFAULT_PLATFORM: "ChatGPT",

  DEFAULT_ASPECT_RATIO: "4:5",

  DEFAULT_THEME: "Light",

  PROMPT_VERSION: "Image Prompt v1",

  LIBRARIES: {

    POSES: "Pose Library",

    STYLES: "Style Library",

    CAMERAS: "Camera Library",

    LIGHTING: "Lighting Library",

    HAIR: "Hair Library",

    CHARACTERS: "Character Library",

    NEGATIVE: "Negative Prompts"

  },

  SUPPORTED_PLATFORMS: [

    "ChatGPT",

    "Gemini",

    "Google Flow",

    "Google Veo",

    "Midjourney",

    "Flux",

    "Stable Diffusion XL",

    "Kling",

    "Runway",

    "Leonardo",

    "Ideogram"

  ]

};


/**
 * Returns application version
 */
function getVersion(){

  return CONFIG.VERSION;

}


/**
 * Returns application name
 */
function getAppName(){

  return CONFIG.APP_NAME;

}


/**
 * Returns supported AI platforms
 */
function getPlatforms(){

  return CONFIG.SUPPORTED_PLATFORMS;

}
