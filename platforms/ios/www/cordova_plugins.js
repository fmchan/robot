cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.apache.cordova.device/www/device.js",
        "id": "org.apache.cordova.device.device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.console/www/console-via-logger.js",
        "id": "org.apache.cordova.console.console",
        "clobbers": [
            "console"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.console/www/logger.js",
        "id": "org.apache.cordova.console.logger",
        "clobbers": [
            "cordova.logger"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.dialogs/www/notification.js",
        "id": "org.apache.cordova.dialogs.notification",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.statusbar/www/statusbar.js",
        "id": "org.apache.cordova.statusbar.statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "file": "plugins/com.rjfun.cordova.sms/www/SMS.js",
        "id": "com.rjfun.cordova.sms.SMS",
        "clobbers": [
            "window.SMS"
        ]
    },
    {
        "file": "plugins/com.cordova.plugins.sms/www/sms.js",
        "id": "com.cordova.plugins.sms.Sms",
        "clobbers": [
            "window.sms"
        ]
    },
    {
        "file": "plugins/info.asankan.phonegap.smsplugin/www/smsplugin.js",
        "id": "info.asankan.phonegap.smsplugin.smsplugin",
        "clobbers": [
            "smsplugin"
        ]
    },
    {
        "file": "plugins/phonegap-plugin-push/www/push.js",
        "id": "phonegap-plugin-push.PushNotification",
        "clobbers": [
            "PushNotification"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.0.0",
    "org.apache.cordova.device": "0.3.0",
    "org.apache.cordova.console": "0.2.13",
    "org.apache.cordova.dialogs": "0.3.0",
    "org.apache.cordova.statusbar": "0.1.10",
    "com.rjfun.cordova.sms": "1.0.3",
    "com.cordova.plugins.sms": "0.1.4",
    "info.asankan.phonegap.smsplugin": "0.2.0",
    "phonegap-plugin-push": "1.2.3"
}
// BOTTOM OF METADATA
});