/// <reference path="../../require.d.ts" />
/// <reference path="../../TypeLite.Net4.d.ts" />
import parent = require("components/demo-application/demo-application");
export declare var template: string;
export declare class viewModel {
    constructor(params: parent.viewModel);
    /** showing an example of having a complex type from C# in your KO VM */
    exampleData: KnockoutObservable<DriveTime.UI.Models.TypeLiteDemoClass>;
    runAjaxRequest: () => void;
    /** the current frame of the animated sprite */
    currentFrame: KnockoutObservable<number>;
    /** the handle used to clear the interval generated via setInterval */
    animationIntervalHandle: number;
    /** the delay passed to setInterval when animating the sprite */
    animationSpeed: number;
    /** the interval by which we can increase and decrease the animation speed */
    animationSpeedInterval: number;
    slowAnimation: () => void;
    speedAnimation: () => void;
    startAnimation: (stopFirst: boolean) => void;
    dispose: () => void;
}
