function isDevelopment() {
  return window.location.hostname === 'localhost' ||
         window.location.hostname === '127.0.0.1' ||
         window.location.hostname.includes('dev.')
}

window.configReady = new Promise((resolve) => {
  window.onConfigLoaded = resolve;
});

function loadConfig() {
  const configScript = document.createElement('script');
  configScript.src = isDevelopment() ? './js/config.dev.js' : './js/config.prod.js';
  configScript.onload = function() {
    if (window.onConfigLoaded) {
      window.onConfigLoaded(window.ENV_CONFIG);
    }
  };
  document.head.appendChild(configScript);
}

loadConfig();