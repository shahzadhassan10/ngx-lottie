import { NgModule, InjectionToken, APP_INITIALIZER } from '@angular/core';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { join } from 'path';
import { tap } from 'rxjs/operators';
import { transformAnimationFilenameToKey } from 'ngx-lottie';
import { readFile } from 'fs';
import { Observable, forkJoin } from 'rxjs';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} path
 * @return {?}
 */
function readFileWithAnimationData(path) {
    // `Promise` is not used here to avoid creation of microtasks
    return new Observable(function (observer) {
        readFile(path, { encoding: 'utf-8' }, function (error, data) {
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
        var path = pathsToAnimations[i];
        /** @type {?} */
        var source = readFileWithAnimationData(path).pipe(tap(function (animationData) {
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
    animation = transformAnimationFilenameToKey(animation);
    /** @type {?} */
    var key = makeStateKey(animation);
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
    return function () { return forkJoin(sources).toPromise(); };
}
/**
 * @param {?} __0
 * @return {?}
 */
function resolveLottiePaths(_a) {
    var preloadAnimations = _a.preloadAnimations;
    var folder = preloadAnimations.folder, animations = preloadAnimations.animations;
    /** @type {?} */
    var path = join(process.cwd(), folder);
    return animations.map(function (animation) { return join(path, animation); });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var LOTTIE_SERVER_OPTIONS = new InjectionToken('LOTTIE_SERVER_OPTIONS');
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
                    provide: APP_INITIALIZER,
                    useFactory: appInitializerFactory,
                    multi: true,
                    deps: [LOTTIE_SERVER_OPTIONS, TransferState]
                }
            ]
        };
    };
    LottieServerModule.decorators = [
        { type: NgModule }
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

export { LottieServerModule, appInitializerFactory as ɵb, LOTTIE_SERVER_OPTIONS as ɵa };

//# sourceMappingURL=ngx-lottie-server.js.map