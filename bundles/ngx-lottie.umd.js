(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/platform-browser')) :
    typeof define === 'function' && define.amd ? define('ngx-lottie', ['exports', '@angular/common', '@angular/core', '@angular/platform-browser'], factory) :
    (factory((global['ngx-lottie'] = {}),global.ng.common,global.ng.core,global.ng.platformBrowser));
}(this, (function (exports,common,i0,i1) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p]; };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [0, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }

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
                        return [2 /*return*/, zone.runOutsideAngular(function () { return player.loadAnimation(( /** @type {?} */(options))); })];
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
        return ( /** @type {?} */(instance[mapEventToCamelCase(name)]));
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
            this.width = ( /** @type {?} */(null));
            this.height = ( /** @type {?} */(null));
            this.detach = false;
            /**
             * `animationCreated` is dispatched after calling `loadAnimation`
             */
            this.animationCreated = new i0.EventEmitter();
            /**
             * `complete` is dispatched after completing the last frame
             */
            this.complete = new i0.EventEmitter();
            /**
             * `loopComplete` is dispatched after completing frame loop
             */
            this.loopComplete = new i0.EventEmitter();
            /**
             * `enterFrame` is dispatched after entering the new frame
             */
            this.enterFrame = new i0.EventEmitter();
            /**
             * `segmentStart` is dispatched when the new segment is adjusted
             */
            this.segmentStart = new i0.EventEmitter();
            /**
             * Original event name is `config_ready`. `config_ready` is dispatched
             * after the needed renderer is configured
             */
            this.configReady = new i0.EventEmitter();
            /**
             * Original event name is `data_ready`. `data_ready` is dispatched
             * when all parts of the animation have been loaded
             */
            this.dataReady = new i0.EventEmitter();
            /**
             * Original event name is `data_failed`. `data_failed` can be dispatched
             * if the `XMLHttpRequest`, that tried to load animation data using
             * provided `path`, has errored
             */
            this.dataFailed = new i0.EventEmitter();
            /**
             * Original event name is `loaded_images`. `loaded_images` can be
             * dispatched after all assets are preloaded
             */
            this.loadedImages = new i0.EventEmitter();
            /**
             * Original event name is `DOMLoaded`. `DOMLoaded` is dispatched
             * when elements have been added to the DOM
             */
            this.domLoaded = new i0.EventEmitter();
            /**
             * `destroy` will be dispatched in the `ngOnDestroy` hook of the service,
             * it's useful for releasing resources
             */
            this.destroy = new i0.EventEmitter();
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
                                if (common.isPlatformServer(platformId)) {
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
            { type: i0.Directive, args: [{ selector: '[lottie]' },] }
        ];
        BaseDirective.propDecorators = {
            options: [{ type: i0.Input }],
            containerClass: [{ type: i0.Input }],
            styles: [{ type: i0.Input }],
            width: [{ type: i0.Input }],
            height: [{ type: i0.Input }],
            detach: [{ type: i0.Input }],
            animationCreated: [{ type: i0.Output }],
            complete: [{ type: i0.Output }],
            loopComplete: [{ type: i0.Output }],
            enterFrame: [{ type: i0.Output }],
            segmentStart: [{ type: i0.Output }],
            configReady: [{ type: i0.Output }],
            dataReady: [{ type: i0.Output }],
            dataFailed: [{ type: i0.Output }],
            loadedImages: [{ type: i0.Output }],
            domLoaded: [{ type: i0.Output }],
            destroy: [{ type: i0.Output }]
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
                ( /** @type {?} */(this.animationItem)).addEventListener(name, listener);
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
                if (common.isPlatformServer(this.platformId) || this.animationItem === null) {
                    return;
                }
                try {
                    for (var _b = __values(this.listeners.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var _d = __read(_c.value, 2), name_1 = _d[0], callback = _d[1];
                        ( /** @type {?} */(this.animationItem)).removeEventListener(name_1, callback);
                    }
                }
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return))
                            _a.call(_b);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
                }
                // Release listeners as we don't need them
                this.listeners.clear();
                // We cannot call `destroy` before removing event listeners
                // as after calling `destroy` - `removeEventListener` becomes unavailable
                ( /** @type {?} */(this.animationItem)).destroy();
                this.animationItem = null;
            };
        LottieEventsService.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        LottieEventsService.ctorParameters = function () {
            return [
                { type: i0.NgZone },
                { type: String, decorators: [{ type: i0.Inject, args: [i0.PLATFORM_ID,] }] }
            ];
        };
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
            { type: i0.Directive, args: [{
                        selector: '[lottie]',
                        providers: [LottieEventsService]
                    },] }
        ];
        /** @nocollapse */
        LottieDirective.ctorParameters = function () {
            return [
                { type: i0.ChangeDetectorRef },
                { type: i0.NgZone },
                { type: String, decorators: [{ type: i0.Inject, args: [i0.PLATFORM_ID,] }] },
                { type: LottieEventsService, decorators: [{ type: i0.Self }] },
                { type: i0.ElementRef, decorators: [{ type: i0.Self }] }
            ];
        };
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
            _this.container = ( /** @type {?} */(null));
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
            { type: i0.Component, args: [{
                        selector: 'ng-lottie',
                        template: "\n    <div\n      #container\n      [style.width.px]=\"width\"\n      [style.height.px]=\"height\"\n      style=\"margin: 0 auto\"\n      [ngStyle]=\"styles\"\n      [ngClass]=\"containerClass\"\n    ></div>\n  ",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        providers: [LottieEventsService]
                    }] }
        ];
        /** @nocollapse */
        LottieComponent.ctorParameters = function () {
            return [
                { type: i0.ChangeDetectorRef },
                { type: i0.NgZone },
                { type: String, decorators: [{ type: i0.Inject, args: [i0.PLATFORM_ID,] }] },
                { type: LottieEventsService, decorators: [{ type: i0.Self }] }
            ];
        };
        LottieComponent.propDecorators = {
            container: [{ type: i0.ViewChild, args: ['container',] }]
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
            { type: i0.NgModule, args: [{
                        imports: [common.CommonModule],
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
                var key = i1.makeStateKey(animation);
                return this.state.get(key, null);
            };
        LottieTransferState.decorators = [
            { type: i0.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */
        LottieTransferState.ctorParameters = function () {
            return [
                { type: i1.TransferState }
            ];
        };
        /** @nocollapse */ LottieTransferState.ngInjectableDef = i0.defineInjectable({ factory: function LottieTransferState_Factory() { return new LottieTransferState(i0.inject(i1.TransferState)); }, token: LottieTransferState, providedIn: "root" });
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

    exports.LottieModule = LottieModule;
    exports.LottieDirective = LottieDirective;
    exports.LottieComponent = LottieComponent;
    exports.LottieTransferState = LottieTransferState;
    exports.transformAnimationFilenameToKey = transformAnimationFilenameToKey;
    exports.ɵa = BaseDirective;
    exports.ɵb = LottieEventsService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ngx-lottie.umd.js.map