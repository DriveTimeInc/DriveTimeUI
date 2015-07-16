/// <reference path="../../require.d.ts" />
export declare var template: string;
export declare class ViewModel {
    glyphSelectors: KnockoutObservableArray<string>;
    glyphGroupsArray: KnockoutObservableArray<string>;
    glyphGroups: KnockoutObservable<{
        [iconSet: string]: string[];
    }>;
    constructor();
}
export declare var viewModel: typeof ViewModel;
