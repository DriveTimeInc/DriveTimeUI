define(["require", "exports", "knockout"], function (require, exports, ko) {
    ko.bindingHandlers["debugger"] = {
        init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
            debugger;
        }
    };
});

//# sourceMappingURL=debugger.js.map
