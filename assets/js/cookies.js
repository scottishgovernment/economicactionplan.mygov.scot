var utils = {

        /**
         * Utility to get or set a cookie
         *
         * Usage examples:
         * 1) Setting a cookie's value
         * utils.cookie('foo', 'bar', 7)
         *
         * 2) Getting a cookie's value
         * var cookieValue = utils.cookie('foo')
         *
         * @param {string} name - name of the cookie
         * @param {string} value - value of the cookie to set (undefined if getting)
         * @param {int} days - number of days til cookie expires (undefined if getting)
         * @returns {string|object} value of the cookie if getting, object of cookie data if setting
         */
        cookie: function(name, value, days) {
            if (typeof value === 'undefined') {
                // with no value param, we are in read mode

                var nameEQ = name + '=',
                    cookiesArray = document.cookie.split(';');

                // find a matching cookie
                for (var i = 0, il = cookiesArray.length; i < il; i++) {
                    var cookie = cookiesArray[i];

                    while (cookie.charAt(0) === ' ') {
                        cookie = cookie.substring(1, cookie.length);
                    }

                    if (cookie.indexOf(nameEQ) === 0) {
                        return cookie.substring(nameEQ.length, cookie.length);
                    }
                }

                // return null if no matching cookie found
                return null;
            } else {
                // with a value param, we are in write mode

                var cookieData = {
                    name: name,
                    value: value
                };

                if (days) {
                    var date = new Date();
                    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));

                    cookieData.expires = date.toUTCString();
                }

                // build the string, as IE wants expiry parameter omitted if no expiry set
                var cookieString = name + '=' + value + '; ';
                if (cookieData.expires) {
                    cookieString += 'expires=' + cookieData.expires + '; ';
                }
                cookieString += 'path=/';

                document.cookie = cookieString;

                // this variable is used in tests to verify that things are being set correctly
                return cookieData;
            }
        }
    };


var handleCookies = function(){

    /**
     * Checks whether to display the cookie notice
     * Binds click handler to the cookie notice close button
     */
    var that = this;

    var cookieNotice = document.getElementById('cookie-notice');
    var cookieNoticeClose = document.getElementById('close-cookie-notification');

    // check whether we need to display the cookie notice
    if (!utils.cookie('eap-cookie-notification-acknowledged')) {
        cookieNotice.classList.remove('hidden');
    }

    // bind a click handler to the close button
    cookieNoticeClose.onclick = function(event) {
        event.preventDefault();

        cookieNotice.classList.add('hidden');
        utils.cookie('eap-cookie-notification-acknowledged', 'yes', 365);
    };
};

handleCookies();
