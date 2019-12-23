(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/platform-browser'), require('path'), require('rxjs/operators'), require('ngx-lottie'), require('fs'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('ngx-lottie/server', ['exports', '@angular/core', '@angular/platform-browser', 'path', 'rxjs/operators', 'ngx-lottie', 'fs', 'rxjs'], factory) :
    (factory((global['ngx-lottie'] = global['ngx-lottie'] || {}, global['ngx-lottie'].server = {}),global.ng.core,global.ng.platformBrowser,global.path,global.rxjs.operators,global['ngx-lottie'],global.fs,global.rxjs));
}(this, (function (exports,core,platformBrowser,path,operators,ngxLottie,fs,rxjs) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} path
     * @return {?}
     */
    function readFileWithAnimationData(path$$1) {
        // `Promise` is not used here to avoid creation of microtasks
        return new rxjs.Observable(function (observer) {
            fs.readFile(path$$1, { encoding: 'utf-8' }, function (error, data) {
                if (error) {
                    observer.error(error);
                }
                else {
                    observer.next(data);
                }
                observer.complete();
            });
        });
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} state
     * @param {?} animations
     * @param {?} pathsToAnimations
     * @return {?}
     */
    function readAndTransferAnimationData(state, animations, pathsToAnimations) {
        /** @type {?} */
        var sources = [];
        var _loop_1 = function (i, length_1) {
            /** @type {?} */
            var path$$1 = pathsToAnimations[i];
            /** @type {?} */
            var source = readFileWithAnimationData(path$$1).pipe(operators.tap(function (animationData) {
                transferAnimationData(state, animations[i], animationData);
            }));
            sources.push(source);
        };
        for (var i = 0, length_1 = animations.length; i < length_1; i++) {
            _loop_1(i, length_1);
        }
        return sources;
    }
    /**
     * @param {?} state
     * @param {?} animation
     * @param {?} animationData
     * @return {?}
     */
    function transferAnimationData(state, animation, animationData) {
        animation = ngxLottie.transformAnimationFilenameToKey(animation);
        /** @type {?} */
        var key = platformBrowser.makeStateKey(animation);
        state.set(key, JSON.parse(animationData));
    }
    /**
     * @param {?} options
     * @param {?} state
     * @return {?}
     */
    function appInitializerFactory(options, state) {
        /** @type {?} */
        var pathsToAnimations = resolveLottiePaths(options);
        /** @type {?} */
        var sources = readAndTransferAnimationData(state, options.preloadAnimations.animations, pathsToAnimations);
        return function () { return rxjs.forkJoin(sources).toPromise(); };
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    function resolveLottiePaths(_a) {
        var preloadAnimations = _a.preloadAnimations;
        var folder = preloadAnimations.folder, animations = preloadAnimations.animations;
        /** @type {?} */
        var path$$1 = path.join(process.cwd(), folder);
        return animations.map(function (animation) { return path.join(path$$1, animation); });
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var LOTTIE_SERVER_OPTIONS = new core.InjectionToken('LOTTIE_SERVER_OPTIONS');
    var LottieServerModule = /** @class */ (function () {
        function LottieServerModule() {
        }
        /**
         * @param {?} options
         * @return {?}
         */
        LottieServerModule.forRoot = /**
         * @param {?} options
         * @return {?}
         */
            function (options) {
                return {
                    ngModule: LottieServerModule,
                    providers: [
                        {
                            provide: LOTTIE_SERVER_OPTIONS,
                            useValue: options
                        },
                        {
                            provide: core.APP_INITIALIZER,
                            useFactory: appInitializerFactory,
                            multi: true,
                            deps: [LOTTIE_SERVER_OPTIONS, platformBrowser.TransferState]
                        }
                    ]
                };
            };
        LottieServerModule.decorators = [
            { type: core.NgModule }
        ];
        return LottieServerModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.LottieServerModule = LottieServerModule;
    exports.ɵb = appInitializerFactory;
    exports.ɵa = LOTTIE_SERVER_OPTIONS;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ngx-lottie-server.umd.js.map