cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "phonegap-nfc.NFC",
    "file": "plugins/phonegap-nfc/www/phonegap-nfc.js",
    "pluginId": "phonegap-nfc",
    "runs": true
  },
  {
    "id": "cordova-plugin-statusbar.statusbar",
    "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
    "pluginId": "cordova-plugin-statusbar",
    "clobbers": [
      "window.StatusBar"
    ]
  },
  {
    "id": "cordova-plugin-headercolor.HeaderColor",
    "file": "plugins/cordova-plugin-headercolor/www/HeaderColor.js",
    "pluginId": "cordova-plugin-headercolor",
    "clobbers": [
      "cordova.plugins.headerColor"
    ]
  },
  {
    "id": "phonegap-plugin-barcodescanner.BarcodeScanner",
    "file": "plugins/phonegap-plugin-barcodescanner/www/barcodescanner.js",
    "pluginId": "phonegap-plugin-barcodescanner",
    "clobbers": [
      "cordova.plugins.barcodeScanner"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "phonegap-nfc": "1.0.3",
  "cordova-plugin-statusbar": "2.4.2",
  "cordova-plugin-headercolor": "1.0",
  "cordova-plugin-android-window-background": "1.0.1",
  "phonegap-plugin-barcodescanner": "8.0.0"
};
// BOTTOM OF METADATA
});