/// <amd-dependency path="text!./demo-page-html.html" />
/// <reference path="../../require.d.ts" />
/// <reference path="../../TypeLite.Net4.d.ts" />
define(["require", "exports", "jquery", "knockout", "text!./demo-page-html.html"], function (require, exports, $, ko) {
    exports.template = require("text!./demo-page-html.html");
    var viewModel = (function () {
        function viewModel(params) {
            var _this = this;
            /** showing an example of having a complex type from C# in your KO VM */
            this.exampleData = ko.observable(null);
            this.runAjaxRequest = function () {
                $.ajax({
                    url: "/api/test",
                    data: _this.exampleData(),
                    type: "POST",
                    success: function (response) {
                        // testing out some of the strong typing 
                        console.log("Result from the server", response.ListProperty);
                        _this.exampleData(response);
                    }
                });
            };
            /** the current frame of the animated sprite */
            this.currentFrame = ko.observable(1);
            /** the delay passed to setInterval when animating the sprite */
            this.animationSpeed = 50;
            /** the interval by which we can increase and decrease the animation speed */
            this.animationSpeedInterval = 5;
            this.slowAnimation = function () {
                _this.animationSpeed = _this.animationSpeed + _this.animationSpeedInterval;
                _this.startAnimation(true);
            };
            this.speedAnimation = function () {
                _this.animationSpeed = _this.animationSpeed - _this.animationSpeedInterval;
                _this.startAnimation(true);
            };
            this.startAnimation = function (stopFirst) {
                if (stopFirst) {
                    window.clearInterval(_this.animationIntervalHandle);
                }
                _this.animationIntervalHandle = window.setInterval(function () {
                    var current = _this.currentFrame();
                    if (current === 16) {
                        current = 1;
                    }
                    else {
                        current++;
                    }
                    _this.currentFrame(current);
                }, _this.animationSpeed);
            };
            this.dispose = function () {
                // make sure that we clear the interval
                window.clearInterval(_this.animationIntervalHandle);
            };
            this.exampleData(params.exampleData);
            this.startAnimation(false);
        }
        return viewModel;
    })();
    exports.viewModel = viewModel;
});

//# sourceMappingURL=../../../src/components/demo-page/demo-page.js.map