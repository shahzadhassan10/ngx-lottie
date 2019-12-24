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
    return new Observable((observer) => {
        readFile(path, { encoding: 'utf-8' }, (error, data) => {
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
    const sources = [];
    for (let i = 0, length = animations.length; i < length; i++) {
        /** @type {?} */
        const path = pathsToAnimations[i];
        /** @type {?} */
        const source = readFileWithAnimationData(path).pipe(tap((animationData) => {
            transferAnimationData(state, animations[i], animationData);
        }));
        sources.push(source);
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
    const key = makeStateKey(animation);
    state.set(key, JSON.parse(animationData));
}
/**
 * @param {?} options
 * @param {?} state
 * @return {?}
 */
function appInitializerFactory(options, state) {
    /** @type {?} */
    const pathsToAnimations = resolveLottiePaths(options);
    /** @type {?} */
    const sources = readAndTransferAnimationData(state, options.preloadAnimations.animations, pathsToAnimations);
    return () => forkJoin(sources).toPromise();
}
/**
 * @param {?} __0
 * @return {?}
 */
function resolveLottiePaths({ preloadAnimations }) {
    const { folder, animations } = preloadAnimations;
    /** @type {?} */
    const path = join(process.cwd(), folder);
    return animations.map((animation) => join(path, animation));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const LOTTIE_SERVER_OPTIONS = new InjectionToken('LOTTIE_SERVER_OPTIONS');
class LottieServerModule {
    /**
     * @param {?} options
     * @return {?}
     */
    static forRoot(options) {
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
    }
}
LottieServerModule.decorators = [
    { type: NgModule }
];

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