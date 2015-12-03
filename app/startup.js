/// <amd-dependency path="knockout.punches" />
/// <amd-dependency path="bootstrap" />
/// <amd-dependency path="knockout-validation" />
/// <amd-dependency path="bindingHandlers/debugger" />
/// <amd-dependency path="bindingHandlers/dataTable" />
define(["require", "exports", "components/debug/debug", "knockout", "knockout.punches", "bootstrap", "knockout-validation", "bindingHandlers/debugger", "bindingHandlers/dataTable"], function (require, exports, debugComponent, ko) {
    // [Scaffolded component registrations will be inserted here. To retain this feature, don't remove this comment.]
    ko.components.register('sprite-dump', { require: 'components/sprite-dump/sprite-dump' });
    ko.components.register('references-page', { require: 'components/references-page/references-page' });
    ko.components.register('demo-page', { require: 'components/demo-page/demo-page' });
    ko.components.register('home-page', { require: 'components/home-page/home-page' });
    ko.components.register('demo-application', { require: 'components/demo-application/demo-application' });
    ko.components.register('glyph-dump', { require: 'components/glyph-dump/glyph-dump' });
    ko.components.register('debug', { viewModel: debugComponent.viewModel, template: debugComponent.template });
    // enable {{ text }} style binding with knockout punches, see this url for more info: http://mbest.github.io/knockout.punches/
    ko.punches.enableAll();
    // Start the application, we can skip the viewmodel since we're just going to let the demo-app component start everything up
    ko.applyBindings({});
});

//# sourceMappingURL=startup.js.map
