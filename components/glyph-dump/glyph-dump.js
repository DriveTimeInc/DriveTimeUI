// This amd-dependency is required because the require line below does not correctly add the amd dependency.  This is a problem with the typescript compiler
/// <amd-dependency path="text!./glyph-dump-html.html" />
define(["require", "exports", "knockout", "text!./glyph-dump-html.html"], function (require, exports, ko) {
    exports.template = require("text!./glyph-dump-html.html");
    var ViewModel = (function () {
        function ViewModel() {
            this.glyphSelectors = ko.observableArray([]);
            this.glyphGroupsArray = ko.observableArray([]);
            this.glyphGroups = ko.observable({});
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
                                        var selector = rules[j].selectorText.match('^\.(glyph-[^:]*):');
                                        if (selector != null && selector.length > 0) {
                                            var iconSet = selector[1].split("-")[1], groups = this.glyphGroups();
                                            // add this set to the dictionary if its not already there
                                            if (!groups[iconSet]) {
                                                groups[iconSet] = [];
                                                this.glyphGroupsArray.push(iconSet);
                                            }
                                            // add this to the list of selectors for this set
                                            groups[iconSet].push(selector[1]);
                                            this.glyphGroups(groups);
                                            // we found a glyph! or something else that starts with .icon-
                                            this.glyphSelectors.push("glyph " + selector[1]);
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
        return ViewModel;
    })();
    exports.ViewModel = ViewModel;
    // knockout expects a lowercase viewModel and not our standard way of doing classes with an uppercase first letter, so here we're exporting it as "viewModel"
    exports.viewModel = ViewModel;
});

//# sourceMappingURL=../../../src/components/glyph-dump/glyph-dump.js.map