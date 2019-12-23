import { __awaiter } from 'tslib';
import { isPlatformServer, CommonModule } from '@angular/common';
import { Directive, Input, Output, EventEmitter, Injectable, NgZone, Inject, PLATFORM_ID, ChangeDetectorRef, Self, ElementRef, Component, ChangeDetectionStrategy, ViewChild, NgModule, defineInjectable, inject } from '@angular/core';
import { TransferState, makeStateKey } from '@angular/platform-browser';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const getLottiePlayer = () => {
    return import(/* webpackChunkName: 'lottie' */ 'lottie-web/build/player/lottie.js');
};
/**
 * @param {?} options
 * @param {?} container
 * @return {?}
 */
function resolveOptions(options, container) {
    /** @type {?} */
    const defaulOptions = {
        container,
        renderer: 'svg',
        loop: true,
        autoplay: true
    };
    return Object.assign(defaulOptions, options);
}
/**
 * @param {?} zone
 * @param {?} options
 * @param {?} container
 * @return {?}
 */
function loadAnimation(zone, options, container) {
    return __awaiter(this, void 0, void 0, function* () {
        options = resolveOptions(options, container);
        /** @type {?} */
        const player = yield getLottiePlayer();
        return zone.runOutsideAngular(() => player.loadAnimation((/** @type {?} */ (options))));
    });
}
/**
 * Some dispatched events are in the `snake_case` registry, for convenience,
 * we create this object that will map event name to the `camelCase` registry
 * @type {?}
 */
const eventsMap = {
    complete: 'complete',
    loopComplete: 'loopComplete',
    enterFrame: 'enterFrame',
    segmentStart: 'segmentStart',
    config_ready: 'configReady',
    data_ready: 'dataReady',
    data_failed: 'dataFailed',
    loaded_images: 'loadedImages',
    DOMLoaded: 'domLoaded',
    destroy: 'destroy'
};
/**
 * @param {?} name - Name of the event in the `snake_case` dispatched by Lottie
 * @return {?} - Resolved event name in the `camelCase`
 */
function mapEventToCamelCase(name) {
    return eventsMap[name];
}
/**
 * @param {?} instance
 * @param {?} name
 * @return {?}
 */
function getEventEmitterFromDirectiveInstance(instance, name) {
    return (/** @type {?} */ (instance[mapEventToCamelCase(name)]));
}
/**
 * Events that can be dispatched by `Animationitem`
 * @see https://github.com/airbnb/lottie-web#events
 * @type {?}
 */
const lottieEvents = [
    'complete',
    'loopComplete',
    'enterFrame',
    'segmentStart',
    'config_ready',
    'data_ready',
    'data_failed',
    'loaded_images',
    'DOMLoaded',
    'destroy'
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BaseDirective {
    constructor() {
        this.options = null;
        this.containerClass = null;
        this.styles = null;
        this.width = (/** @type {?} */ (null));
        this.height = (/** @type {?} */ (null));
        this.detach = false;
        /**
         * `animationCreated` is dispatched after calling `loadAnimation`
         */
        this.animationCreated = new EventEmitter();
        /**
         * `complete` is dispatched after completing the last frame
         */
        this.complete = new EventEmitter();
        /**
         * `loopComplete` is dispatched after completing frame loop
         */
        this.loopComplete = new EventEmitter();
        /**
         * `enterFrame` is dispatched after entering the new frame
         */
        this.enterFrame = new EventEmitter();
        /**
         * `segmentStart` is dispatched when the new segment is adjusted
         */
        this.segmentStart = new EventEmitter();
        /**
         * Original event name is `config_ready`. `config_ready` is dispatched
         * after the needed renderer is configured
         */
        this.configReady = new EventEmitter();
        /**
         * Original event name is `data_ready`. `data_ready` is dispatched
         * when all parts of the animation have been loaded
         */
        this.dataReady = new EventEmitter();
        /**
         * Original event name is `data_failed`. `data_failed` can be dispatched
         * if the `XMLHttpRequest`, that tried to load animation data using
         * provided `path`, has errored
         */
        this.dataFailed = new EventEmitter();
        /**
         * Original event name is `loaded_images`. `loaded_images` can be
         * dispatched after all assets are preloaded
         */
        this.loadedImages = new EventEmitter();
        /**
         * Original event name is `DOMLoaded`. `DOMLoaded` is dispatched
         * when elements have been added to the DOM
         */
        this.domLoaded = new EventEmitter();
        /**
         * `destroy` will be dispatched in the `ngOnDestroy` hook of the service,
         * it's useful for releasing resources
         */
        this.destroy = new EventEmitter();
    }
    /**
     * @protected
     * @param {?} ref
     * @param {?} zone
     * @param {?} platformId
     * @param {?} lottieEventsService
     * @param {?} container
     * @param {?} instance
     * @return {?}
     */
    loadAnimation(ref, zone, platformId, lottieEventsService, container, instance) {
        return __awaiter(this, void 0, void 0, function* () {
            if (isPlatformServer(platformId)) {
                return;
            }
            /** @type {?} */
            const animationItem = yield loadAnimation(zone, this.options, container);
            lottieEventsService.animationCreated(animationItem, this.animationCreated);
            lottieEventsService.setAnimationItemAndLottieEventListeners(animationItem, instance);
            // Basically make this view static and never check it in the future
            if (this.detach) {
                ref.detach();
            }
        });
    }
}
BaseDirective.decorators = [
    { type: Directive, args: [{ selector: '[lottie]' },] }
];
BaseDirective.propDecorators = {
    options: [{ type: Input }],
    containerClass: [{ type: Input }],
    styles: [{ type: Input }],
    width: [{ type: Input }],
    height: [{ type: Input }],
    detach: [{ type: Input }],
    animationCreated: [{ type: Output }],
    complete: [{ type: Output }],
    loopComplete: [{ type: Output }],
    enterFrame: [{ type: Output }],
    segmentStart: [{ type: Output }],
    configReady: [{ type: Output }],
    dataReady: [{ type: Output }],
    dataFailed: [{ type: Output }],
    loadedImages: [{ type: Output }],
    domLoaded: [{ type: Output }],
    destroy: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LottieEventsService {
    /**
     * @param {?} zone
     * @param {?} platformId
     */
    constructor(zone, platformId) {
        this.zone = zone;
        this.platformId = platformId;
        this.animationItem = null;
        /**
         * Save listeners so we're able to remove them from `AnimationItem`
         * by references in the future when this service is destroyed
         */
        this.listeners = new Map();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.dispose();
    }
    /**
     * This method is invoked after calling `loadAnimation` and dispatches the new one
     * created `AnimationItem` instance
     * @param {?} animationItem
     * @param {?} animationCreated
     * @return {?}
     */
    animationCreated(animationItem, animationCreated) {
        animationCreated.emit(animationItem);
    }
    /**
     * @param {?} animationItem
     * @param {?} instance
     * @return {?}
     */
    setAnimationItemAndLottieEventListeners(animationItem, instance) {
        this.animationItem = animationItem;
        // `AnimationItem` triggers different events every ms, we have to listen
        // them outside Angular's context, thus it won't affect performance
        this.zone.runOutsideAngular(() => this.setupLottieEventListeners(instance));
    }
    /**
     * @private
     * @param {?} instance
     * @return {?}
     */
    setupLottieEventListeners(instance) {
        lottieEvents.forEach((name) => {
            this.setupLottieEventListener(name, instance);
        });
    }
    /**
     * @private
     * @param {?} name
     * @param {?} instance
     * @return {?}
     */
    setupLottieEventListener(name, instance) {
        /** @type {?} */
        const emitter = getEventEmitterFromDirectiveInstance(instance, name);
        /** @type {?} */
        const listener = (event) => emitter.emit(event);
        (/** @type {?} */ (this.animationItem)).addEventListener(name, listener);
        // We don't have to save `destroy` listener, because `AnimationItem`
        // is able to remove `destroy` event listener itself
        if (name !== 'destroy') {
            this.listeners.set(name, listener);
        }
    }
    /**
     * @private
     * @return {?}
     */
    dispose() {
        if (isPlatformServer(this.platformId) || this.animationItem === null) {
            return;
        }
        for (const [name, callback] of this.listeners.entries()) {
            (/** @type {?} */ (this.animationItem)).removeEventListener(name, callback);
        }
        // Release listeners as we don't need them
        this.listeners.clear();
        // We cannot call `destroy` before removing event listeners
        // as after calling `destroy` - `removeEventListener` becomes unavailable
        (/** @type {?} */ (this.animationItem)).destroy();
        this.animationItem = null;
    }
}
LottieEventsService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LottieEventsService.ctorParameters = () => [
    { type: NgZone },
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LottieDirective extends BaseDirective {
    /**
     * @param {?} ref
     * @param {?} zone
     * @param {?} platformId
     * @param {?} lottieEventsService
     * @param {?} host
     */
    constructor(ref, zone, platformId, lottieEventsService, host) {
        super();
        this.ref = ref;
        this.zone = zone;
        this.platformId = platformId;
        this.lottieEventsService = lottieEventsService;
        this.host = host;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        super.loadAnimation(this.ref, this.zone, this.platformId, this.lottieEventsService, this.host.nativeElement, this);
    }
}
LottieDirective.decorators = [
    { type: Directive, args: [{
                selector: '[lottie]',
                providers: [LottieEventsService]
            },] }
];
/** @nocollapse */
LottieDirective.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NgZone },
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: LottieEventsService, decorators: [{ type: Self }] },
    { type: ElementRef, decorators: [{ type: Self }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LottieComponent extends BaseDirective {
    /**
     * @param {?} ref
     * @param {?} zone
     * @param {?} platformId
     * @param {?} lottieEventsService
     */
    constructor(ref, zone, platformId, lottieEventsService) {
        super();
        this.ref = ref;
        this.zone = zone;
        this.platformId = platformId;
        this.lottieEventsService = lottieEventsService;
        this.container = (/** @type {?} */ (null));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        super.loadAnimation(this.ref, this.zone, this.platformId, this.lottieEventsService, this.container.nativeElement, this);
    }
}
LottieComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-lottie',
                template: `
    <div
      #container
      [style.width.px]="width"
      [style.height.px]="height"
      style="margin: 0 auto"
      [ngStyle]="styles"
      [ngClass]="containerClass"
    ></div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [LottieEventsService]
            }] }
];
/** @nocollapse */
LottieComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NgZone },
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: LottieEventsService, decorators: [{ type: Self }] }
];
LottieComponent.propDecorators = {
    container: [{ type: ViewChild, args: ['container',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LottieModule {
}
LottieModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [BaseDirective, LottieDirective, LottieComponent],
                exports: [BaseDirective, LottieDirective, LottieComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} animation
 * @return {?}
 */
function transformAnimationFilenameToKey(animation) {
    return `animation-${animation.split('.json')[0]}`;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LottieTransferState {
    /**
     * @param {?} state
     */
    constructor(state) {
        this.state = state;
    }
    /**
     * @template T
     * @param {?} animation
     * @return {?}
     */
    get(animation) {
        animation = transformAnimationFilenameToKey(animation);
        /** @type {?} */
        const key = makeStateKey(animation);
        return this.state.get(key, null);
    }
}
LottieTransferState.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
LottieTransferState.ctorParameters = () => [
    { type: TransferState }
];
/** @nocollapse */ LottieTransferState.ngInjectableDef = defineInjectable({ factory: function LottieTransferState_Factory() { return new LottieTransferState(inject(TransferState)); }, token: LottieTransferState, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { LottieModule, LottieDirective, LottieComponent, LottieTransferState, transformAnimationFilenameToKey, BaseDirective as ɵa, LottieEventsService as ɵb };

//# sourceMappingURL=ngx-lottie.js.map