/**
 * =====================================================
 * AI Prompt Studio Pro
 * Backend.gs
 * =====================================================
 */

function getAppInfo() {
  return {
    name: CONFIG.APP_NAME,
    version: CONFIG.VERSION,
    author: CONFIG.AUTHOR
  };
}

function getSupportedPlatforms() {
  return CONFIG.SUPPORTED_PLATFORMS;
}

function ping() {
  return "AI Prompt Studio Pro Backend Ready";
}
