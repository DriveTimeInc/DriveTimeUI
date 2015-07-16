// Note: this module is a sample module to show how to consume a ts file from the bower package
define(["require", "exports"], function (require, exports) {
    var logger = (function () {
        function logger() {
        }
        logger.log = function (message) {
            console.log(message);
        };
        return logger;
    })();
    exports.logger = logger;
});

//# sourceMappingURL=../../src/app/shared.js.map