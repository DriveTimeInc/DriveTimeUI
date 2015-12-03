// This amd-dependency is required because the require line below does not corr`ectly add the amd dependency.  This is a problem with the typescript compiler
/// <amd-dependency path="text!./demo-application-html.html" />
/// <amd-dependency path="bootstrap" />
define(["require", "exports", "knockout", "./router", "text!./demo-application-html.html", "bootstrap"], function (require, exports, ko, router) {
    exports.template = require("text!./demo-application-html.html");
    var viewModel = (function () {
        function viewModel(params) {
            var _this = this;
            /** do-nothing observable */
            this.appName = ko.observable("DriveTime.UI");
            /** keeps track of what the current route is */
            this.route = router.currentRoute;
            /** list of available routes */
            this.allRoutes = ko.observableArray(router.allRoutes);
            this.currentPageName = ko.pureComputed(function () {
                var r = _this.route();
                if (!r) {
                    return null;
                }
                return r.params.pageName;
            });
            this.currentPageComponent = ko.pureComputed(function () {
                var r = _this.route();
                if (!r) {
                    return null;
                }
                return r.params.pageComponent;
            });
            this.exampleData = params.data;
            //Note: we wouldnt normally put something on the window scope, but this is here for convenience and demo purposes
            window["vm"] = this;
        }
        return viewModel;
    })();
    exports.viewModel = viewModel;
});

//# sourceMappingURL=demo-application.js.map
