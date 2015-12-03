// This amd-dependency is required because the require line below does not correctly add the amd dependency.  This is a problem with the typescript compiler
/// <amd-dependency path="text!./home-page-html.html" />
define(["require", "exports", "knockout", "text!./home-page-html.html"], function (require, exports, ko) {
    exports.template = require("text!./home-page-html.html");
    var ViewModel = (function () {
        function ViewModel(params) {
            /** showing an example of having a complex type from C# in your KO VM */
            this.exampleData = ko.observable(null);
            this.exampleData(params.exampleData);
        }
        return ViewModel;
    })();
    exports.ViewModel = ViewModel;
});

//# sourceMappingURL=home-page.js.map
