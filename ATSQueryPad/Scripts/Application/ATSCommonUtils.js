Common.Utils = (function (util) {
    "use strict";

    util = util || {};

    // Custom Jquery Plugin
    // Courtesy: http://stackoverflow.com/a/1186309/540345
    $.fn.serializeObject = function () {
        var o = {};
        var a = this.serializeArray();
        $.each(a, function () {
            if (o[this.name] !== undefined) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };

    var getParameterByName = function (name, caseSensitive) {
        var caseSensitive = caseSensitive || false;
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");

        if (!caseSensitive) {
            name = name.toUpperCase();
        }

        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(caseSensitive ? window.location.search : window.location.search.toUpperCase());

        return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    };

    var notification = (function () {

        $('#closeNotification').click(function () {
            Common.Utils.notification.hide();
        });

        function showNotification(context, className, message, suppressCallback) {
            context.hide(true);

            $('#notification').removeClass('hide').addClass(className);

            var $message = $('#messageContent');

            if ($message.length) {
                $message.text(message);
            } else {
                console.log(message);
            }

            if (!suppressCallback) {
                if (context.onOpen && typeof (context.onOpen) === "function") {
                    context.onOpen();
                }
            }
        }

        return {
            showError: function (message, suppressCallback) {
                showNotification(this, 'error', message, suppressCallback);
            },
            showWarning: function (message, suppressCallback) {
                showNotification(this, 'warning', message, suppressCallback);
            },
            showSuccess: function (message, suppressCallback) {
                showNotification(this, 'success', message, suppressCallback);
            },
            hide: function (suppressCallback) {
                // The removeClass() has a bug in few jQuery versions. Hence, replacing it with removeAttr('class').
                // Refer - http://bugs.jqueryui.com/ticket/9015
                $('#notification').removeAttr('class').addClass('notification-bar hide');

                $('#messageContent').text('');

                if (!suppressCallback) {
                    if (this.onClose && typeof (this.onClose) === "function") {
                        this.onClose();
                    }
                }
            },
            onOpen: null,
            onClose: null
        };

    }());

    var parseJsonDate = function (jsonDate) {
        return new Date(parseInt(jsonDate.substr(6)));
    };

    var redirectPost = function (location, args) {
        var form = '';
        $.each(args, function (key, value) {
            form += '<input type="hidden" name="' + key + '" value="' + value + '">';
        });
        $('<form action="' + location + '" method="POST">' + form + '</form>').appendTo('body').submit();
    };

    // Courtesy: http://stackoverflow.com/a/8809472/540345
    var generateUUID = function () {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    };

    util.getParameterByName = getParameterByName;
    util.ajaxCall = ajaxCall;
    util.notification = notification;
    util.parseJsonDate = parseJsonDate;
    util.redirectPost = redirectPost;
    util.getNewUUID = generateUUID;

    return util;

}(Common.Utils));