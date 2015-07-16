/// <reference path="../../require.d.ts" />
import demoApp = require("src/components/demo-application/demo-application");
export declare var template: string;
export declare class ViewModel {
    /** showing an example of having a complex type from C# in your KO VM */
    exampleData: KnockoutObservable<DriveTime.UI.Models.TypeLiteDemoClass>;
    constructor(params: demoApp.viewModel);
}
