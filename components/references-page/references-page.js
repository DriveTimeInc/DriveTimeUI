/// <amd-dependency path="text!./references-page-html.html" />
/// <reference path="../../require.d.ts" />
define(["require", "exports", "text!./references-page-html.html"], function (require, exports) {
    exports.template = require("text!./references-page-html.html");
    var viewModel = (function () {
        function viewModel() {
        }
        return viewModel;
    })();
    exports.viewModel = viewModel;
});

//# sourceMappingURL=../../../src/components/references-page/references-page.js.map