
var O365Auth;
(function (O365Auth) {
    (function (Settings) {
        Settings.clientId = 'e412a7a3-44fc-46ae-9b47-25679f8da872';
        Settings.authUri = 'https://login.microsoftonline.com/common/';
        Settings.redirectUri = 'http://localhost:4400/services/office365/redirectTarget.html';
        Settings.domain = 'rzdemos.onmicrosoft.com';
    })(O365Auth.Settings || (O365Auth.Settings = {}));
    var Settings = O365Auth.Settings;
})(O365Auth || (O365Auth = {}));
