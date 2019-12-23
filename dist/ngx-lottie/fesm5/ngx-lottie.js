import { isPlatformServer, CommonModule } from '@angular/common';
import { __awaiter, __generator, __values, __read, __extends } from 'tslib';
import { Directive, Input, Output, EventEmitter, Injectable, NgZone, Inject, PLATFORM_ID, ChangeDetectorRef, Self, ElementRef, Component, ChangeDetectionStrategy, ViewChild, NgModule, defineInjectable, inject } from '@angular/core';
import { TransferState, makeStateKey } from '@angular/platform-browser';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var getLottiePlayer = function () {
    return import(/* webpackChunkName: 'lottie' */ 'lottie-web/build/player/lottie.js');
};
/**
 * @param {?} options
 * @param {?} container
 * @return {?}
 */
function resolveOptions(options, container) {
    /** @type {?} */
    var defaulOptions = {
        container: container,
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
    return __awaiter(this, void 0, void 0, function () {
        var player;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    options = resolveOptions(options, container);
                    return [4 /*yield*/, getLottiePlayer()];
                case 1:
                    player = _a.sent();
                    return [2 /*return*/, zone.runOutsideAngular(function () { return player.loadAnimation((/** @type {?} */ (options))); })];
            }
        });
    });
}
/**
 * Some dispatched events are in the `snake_case` registry, for convenience,
 * we create this object that will map event name to the `camelCase` registry
 * @type {?}
 */
var eventsMap = {
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
var lottieEvents = [
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
var BaseDirective = /** @class */ (function () {
    function BaseDirective() {
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
    BaseDirective.prototype.loadAnimation = /**
     * @protected
     * @param {?} ref
     * @param {?} zone
     * @param {?} platformId
     * @param {?} lottieEventsService
     * @param {?} container
     * @param {?} instance
     * @return {?}
     */
    function (ref, zone, platformId, lottieEventsService, container, instance) {
        return __awaiter(this, void 0, void 0, function () {
            var animationItem;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (isPlatformServer(platformId)) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, loadAnimation(zone, this.options, container)];
                    case 1:
                        animationItem = _a.sent();
                        lottieEventsService.animationCreated(animationItem, this.animationCreated);
                        lottieEventsService.setAnimationItemAndLottieEventListeners(animationItem, instance);
                        // Basically make this view static and never check it in the future
                        if (this.detach) {
                            ref.detach();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
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
    return BaseDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LottieEventsService = /** @class */ (function () {
    function LottieEventsService(zone, platformId) {
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
    LottieEventsService.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.dispose();
    };
    /**
     * This method is invoked after calling `loadAnimation` and dispatches the new one
     * created `AnimationItem` instance
     */
    /**
     * This method is invoked after calling `loadAnimation` and dispatches the new one
     * created `AnimationItem` instance
     * @param {?} animationItem
     * @param {?} animationCreated
     * @return {?}
     */
    LottieEventsService.prototype.animationCreated = /**
     * This method is invoked after calling `loadAnimation` and dispatches the new one
     * created `AnimationItem` instance
     * @param {?} animationItem
     * @param {?} animationCreated
     * @return {?}
     */
    function (animationItem, animationCreated) {
        animationCreated.emit(animationItem);
    };
    /**
     * @param {?} animationItem
     * @param {?} instance
     * @return {?}
     */
    LottieEventsService.prototype.setAnimationItemAndLottieEventListeners = /**
     * @param {?} animationItem
     * @param {?} instance
     * @return {?}
     */
    function (animationItem, instance) {
        var _this = this;
        this.animationItem = animationItem;
        // `AnimationItem` triggers different events every ms, we have to listen
        // them outside Angular's context, thus it won't affect performance
        this.zone.runOutsideAngular(function () { return _this.setupLottieEventListeners(instance); });
    };
    /**
     * @private
     * @param {?} instance
     * @return {?}
     */
    LottieEventsService.prototype.setupLottieEventListeners = /**
     * @private
     * @param {?} instance
     * @return {?}
     */
    function (instance) {
        var _this = this;
        lottieEvents.forEach(function (name) {
            _this.setupLottieEventListener(name, instance);
        });
    };
    /**
     * @private
     * @param {?} name
     * @param {?} instance
     * @return {?}
     */
    LottieEventsService.prototype.setupLottieEventListener = /**
     * @private
     * @param {?} name
     * @param {?} instance
     * @return {?}
     */
    function (name, instance) {
        /** @type {?} */
        var emitter = getEventEmitterFromDirectiveInstance(instance, name);
        /** @type {?} */
        var listener = function (event) { return emitter.emit(event); };
        (/** @type {?} */ (this.animationItem)).addEventListener(name, listener);
        // We don't have to save `destroy` listener, because `AnimationItem`
        // is able to remove `destroy` event listener itself
        if (name !== 'destroy') {
            this.listeners.set(name, listener);
        }
    };
    /**
     * @private
     * @return {?}
     */
    LottieEventsService.prototype.dispose = /**
     * @private
     * @return {?}
     */
    function () {
        var e_1, _a;
        if (isPlatformServer(this.platformId) || this.animationItem === null) {
            return;
        }
        try {
            for (var _b = __values(this.listeners.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), name_1 = _d[0], callback = _d[1];
                (/** @type {?} */ (this.animationItem)).removeEventListener(name_1, callback);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        // Release listeners as we don't need them
        this.listeners.clear();
        // We cannot call `destroy` before removing event listeners
        // as after calling `destroy` - `removeEventListener` becomes unavailable
        (/** @type {?} */ (this.animationItem)).destroy();
        this.animationItem = null;
    };
    LottieEventsService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LottieEventsService.ctorParameters = function () { return [
        { type: NgZone },
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    return LottieEventsService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LottieDirective = /** @class */ (function (_super) {
    __extends(LottieDirective, _super);
    function LottieDirective(ref, zone, platformId, lottieEventsService, host) {
        var _this = _super.call(this) || this;
        _this.ref = ref;
        _this.zone = zone;
        _this.platformId = platformId;
        _this.lottieEventsService = lottieEventsService;
        _this.host = host;
        return _this;
    }
    /**
     * @return {?}
     */
    LottieDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        _super.prototype.loadAnimation.call(this, this.ref, this.zone, this.platformId, this.lottieEventsService, this.host.nativeElement, this);
    };
    LottieDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[lottie]',
                    providers: [LottieEventsService]
                },] }
    ];
    /** @nocollapse */
    LottieDirective.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: NgZone },
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: LottieEventsService, decorators: [{ type: Self }] },
        { type: ElementRef, decorators: [{ type: Self }] }
    ]; };
    return LottieDirective;
}(BaseDirective));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LottieComponent = /** @class */ (function (_super) {
    __extends(LottieComponent, _super);
    function LottieComponent(ref, zone, platformId, lottieEventsService) {
        var _this = _super.call(this) || this;
        _this.ref = ref;
        _this.zone = zone;
        _this.platformId = platformId;
        _this.lottieEventsService = lottieEventsService;
        _this.container = (/** @type {?} */ (null));
        return _this;
    }
    /**
     * @return {?}
     */
    LottieComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        _super.prototype.loadAnimation.call(this, this.ref, this.zone, this.platformId, this.lottieEventsService, this.container.nativeElement, this);
    };
    LottieComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng-lottie',
                    template: "\n    <div\n      #container\n      [style.width.px]=\"width\"\n      [style.height.px]=\"height\"\n      style=\"margin: 0 auto\"\n      [ngStyle]=\"styles\"\n      [ngClass]=\"containerClass\"\n    ></div>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [LottieEventsService]
                }] }
    ];
    /** @nocollapse */
    LottieComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: NgZone },
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: LottieEventsService, decorators: [{ type: Self }] }
    ]; };
    LottieComponent.propDecorators = {
        container: [{ type: ViewChild, args: ['container',] }]
    };
    return LottieComponent;
}(BaseDirective));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LottieModule = /** @class */ (function () {
    function LottieModule() {
    }
    LottieModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [BaseDirective, LottieDirective, LottieComponent],
                    exports: [BaseDirective, LottieDirective, LottieComponent]
                },] }
    ];
    return LottieModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} animation
 * @return {?}
 */
function transformAnimationFilenameToKey(animation) {
    return "animation-" + animation.split('.json')[0];
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LottieTransferState = /** @class */ (function () {
    function LottieTransferState(state) {
        this.state = state;
    }
    /**
     * @template T
     * @param {?} animation
     * @return {?}
     */
    LottieTransferState.prototype.get = /**
     * @template T
     * @param {?} animation
     * @return {?}
     */
    function (animation) {
        animation = transformAnimationFilenameToKey(animation);
        /** @type {?} */
        var key = makeStateKey(animation);
        return this.state.get(key, null);
    };
    LottieTransferState.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    LottieTransferState.ctorParameters = function () { return [
        { type: TransferState }
    ]; };
    /** @nocollapse */ LottieTransferState.ngInjectableDef = defineInjectable({ factory: function LottieTransferState_Factory() { return new LottieTransferState(inject(TransferState)); }, token: LottieTransferState, providedIn: "root" });
    return LottieTransferState;
}());

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