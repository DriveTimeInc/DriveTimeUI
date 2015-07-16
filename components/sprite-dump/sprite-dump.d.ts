/// <reference path="../../require.d.ts" />
export declare var template: string;
export declare class viewModel {
    spriteSelectors: KnockoutObservableArray<string>;
    spriteGroupsArray: KnockoutObservableArray<string>;
    spriteGroups: KnockoutObservable<{
        [iconSet: string]: string[];
    }>;
    constructor();
}
