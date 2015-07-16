/// <amd-dependency path="text!./sprite-dump-html.html" />
/// <reference path="../../require.d.ts" />
define(["require", "exports", "knockout", "text!./sprite-dump-html.html"], function (require, exports, ko) {
    exports.template = require("text!./sprite-dump-html.html");
    var viewModel = (function () {
        function viewModel() {
            this.spriteSelectors = ko.observableArray([]);
            this.spriteGroupsArray = ko.observableArray([]);
            this.spriteGroups = ko.observable({});
            var styleSheets = document.styleSheets;
            if (styleSheets.length > 0) {
                for (var i = 0; i < styleSheets.length; i++) {
                    var styleSheet = styleSheets[i];
                    if ('cssRules' in styleSheet) {
                        try {
                            var rules = styleSheet.cssRules;
                            if (rules != null && rules.length > 0) {
                                for (var j = 0; j < rules.length; j++) {
                                    if (rules[j].selectorText != null) {
                                        var selector = rules[j].selectorText.match('^\.(sprite-[^:]*):');
                                        if (selector != null && selector.length > 0) {
                                            var iconSet = selector[1].split("-")[1], groups = this.spriteGroups();
                                            // add this set to the dictionary if its not already there
                                            if (!groups[iconSet]) {
                                                groups[iconSet] = [];
                                                this.spriteGroupsArray.push(iconSet);
                                            }
                                            // add this to the list of selectors for this set
                                            groups[iconSet].push(selector[1]);
                                            this.spriteGroups(groups);
                                            // we found a sprite! or something else that starts with .icon-
                                            this.spriteSelectors.push(selector[1]);
                                        }
                                    }
                                }
                            }
                        }
                        catch (e) {
                        }
                    }
                }
            }
        }
        return viewModel;
    })();
    exports.viewModel = viewModel;
});

//# sourceMappingURL=../../../src/components/sprite-dump/sprite-dump.js.map