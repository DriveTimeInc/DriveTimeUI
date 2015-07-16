/// <reference path="../../require.d.ts" />
/// <reference path="../../TypeLite.Net4.d.ts" />
import router = require("./router");
export declare var template: string;
export declare class viewModel {
    /** do-nothing observable */
    appName: KnockoutObservable<string>;
    /** keeps track of what the current route is */
    route: KnockoutObservable<router.RouteType>;
    /** list of available routes */
    allRoutes: KnockoutObservableArray<router.RouteType>;
    currentPageName: KnockoutComputed<any>;
    currentPageComponent: KnockoutComputed<any>;
    /** showing an example of having a complex type from C# in your KO VM */
    exampleData: DriveTime.UI.Models.TypeLiteDemoClass;
    constructor(params: {
        data: DriveTime.UI.Models.TypeLiteDemoClass;
    });
}
