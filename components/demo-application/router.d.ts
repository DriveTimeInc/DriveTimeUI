export = router;
declare module router {
    interface RouteType {
        url: string;
        params: any;
    }
    var allRoutes: RouteType[];
    var currentRoute: KnockoutObservable<RouteType>;
    var changeRoute: (hash: string) => void;
}
