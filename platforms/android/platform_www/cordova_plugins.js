cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-pedometer.Pedometer",
    "file": "plugins/cordova-plugin-pedometer/www/pedometer.js",
    "pluginId": "cordova-plugin-pedometer",
    "clobbers": [
      "pedometer"
    ]
  },
  {
    "id": "cordova-plugin-device-motion.Acceleration",
    "file": "plugins/cordova-plugin-device-motion/www/Acceleration.js",
    "pluginId": "cordova-plugin-device-motion",
    "clobbers": [
      "Acceleration"
    ]
  },
  {
    "id": "cordova-plugin-device-motion.accelerometer",
    "file": "plugins/cordova-plugin-device-motion/www/accelerometer.js",
    "pluginId": "cordova-plugin-device-motion",
    "clobbers": [
      "navigator.accelerometer"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-pedometer": "0.4.1",
  "cordova-plugin-device-motion": "1.2.5"
};
// BOTTOM OF METADATA
});