// This module configures crossroads.js, a routing library. If you prefer, you
// can use any other routing library (or none at all) as Knockout is designed to
// compose cleanly with external libraries.
//
// You *don't* have to follow the pattern established here (each route entry
// specifies a 'page', which is a Knockout component) - there's nothing built into
// Knockout that requires or even knows about this technique. It's just one of
// many possible ways of setting up client-side routes.
define(["require", "exports", "knockout", "crossroads", "hasher"], function (require, exports, ko, crossroads, hasher) {
    var router;
    (function (router) {
        ;
        // TODO: add a type for allRoutes
        router.allRoutes = [
            {
                url: '',
                params: {
                    pageComponent: 'home-page',
                    pageName: 'Home Page'
                }
            },
            {
                url: 'glyphs',
                params: {
                    pageComponent: 'glyph-dump',
                    pageName: 'Glyphs'
                }
            },
            {
                url: 'sprites',
                params: {
                    pageComponent: 'sprite-dump',
                    pageName: 'Sprites'
                }
            },
            {
                url: 'demo',
                params: {
                    pageComponent: 'demo-page',
                    pageName: 'Demo Page'
                }
            },
            {
                url: 'references',
                params: {
                    pageComponent: 'references-page',
                    pageName: 'References / Documentation'
                }
            }
        ];
        // TODO: remove the any type here
        router.currentRoute = ko.observable(router.allRoutes[0]);
        // Register routes with crossroads.js
        ko.utils.arrayForEach(router.allRoutes, function (route) {
            crossroads.addRoute(route.url, function (requestParams) {
                router.currentRoute(ko.utils.extend(requestParams, route.params));
            });
        });
        router.changeRoute = function (hash) {
            var why = hasher;
            why.setHash(hash);
        };
        // Activate crossroads
        function parseHash(newHash, oldHash) { crossroads.parse(newHash); }
        crossroads.normalizeFn = crossroads.NORM_AS_OBJECT;
        hasher.initialized.add(parseHash);
        hasher.changed.add(parseHash);
        hasher.init();
    })(router || (router = {}));
    return router;
});

//# sourceMappingURL=router.js.map
