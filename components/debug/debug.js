/// <amd-dependency path="text!./debug-html.html" />
/// <reference path="../../require.d.ts" />
define(["require", "exports", "knockout", "text!./debug-html.html"], function (require, exports, ko) {
    exports.template = require("text!./debug-html.html");
    var viewModel = (function () {
        function viewModel(params) {
            this.data = ko.observable();
            this.data(params);
        }
        return viewModel;
    })();
    exports.viewModel = viewModel;
});

//# sourceMappingURL=debug.js.map
