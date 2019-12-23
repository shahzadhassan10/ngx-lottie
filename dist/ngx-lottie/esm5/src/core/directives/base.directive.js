/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, Input, Output, EventEmitter } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { loadAnimation } from '../../internals';
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var animationItem;
            return tslib_1.__generator(this, function (_a) {
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
export { BaseDirective };
if (false) {
    /** @type {?} */
    BaseDirective.prototype.options;
    /** @type {?} */
    BaseDirective.prototype.containerClass;
    /** @type {?} */
    BaseDirective.prototype.styles;
    /** @type {?} */
    BaseDirective.prototype.width;
    /** @type {?} */
    BaseDirective.prototype.height;
    /** @type {?} */
    BaseDirective.prototype.detach;
    /**
     * `animationCreated` is dispatched after calling `loadAnimation`
     * @type {?}
     */
    BaseDirective.prototype.animationCreated;
    /**
     * `complete` is dispatched after completing the last frame
     * @type {?}
     */
    BaseDirective.prototype.complete;
    /**
     * `loopComplete` is dispatched after completing frame loop
     * @type {?}
     */
    BaseDirective.prototype.loopComplete;
    /**
     * `enterFrame` is dispatched after entering the new frame
     * @type {?}
     */
    BaseDirective.prototype.enterFrame;
    /**
     * `segmentStart` is dispatched when the new segment is adjusted
     * @type {?}
     */
    BaseDirective.prototype.segmentStart;
    /**
     * Original event name is `config_ready`. `config_ready` is dispatched
     * after the needed renderer is configured
     * @type {?}
     */
    BaseDirective.prototype.configReady;
    /**
     * Original event name is `data_ready`. `data_ready` is dispatched
     * when all parts of the animation have been loaded
     * @type {?}
     */
    BaseDirective.prototype.dataReady;
    /**
     * Original event name is `data_failed`. `data_failed` can be dispatched
     * if the `XMLHttpRequest`, that tried to load animation data using
     * provided `path`, has errored
     * @type {?}
     */
    BaseDirective.prototype.dataFailed;
    /**
     * Original event name is `loaded_images`. `loaded_images` can be
     * dispatched after all assets are preloaded
     * @type {?}
     */
    BaseDirective.prototype.loadedImages;
    /**
     * Original event name is `DOMLoaded`. `DOMLoaded` is dispatched
     * when elements have been added to the DOM
     * @type {?}
     */
    BaseDirective.prototype.domLoaded;
    /**
     * `destroy` will be dispatched in the `ngOnDestroy` hook of the service,
     * it's useful for releasing resources
     * @type {?}
     */
    BaseDirective.prototype.destroy;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbG90dGllLyIsInNvdXJjZXMiOlsic3JjL2NvcmUvZGlyZWN0aXZlcy9iYXNlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQTZCLE1BQU0sZUFBZSxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQWNoRDtJQUFBO1FBR1MsWUFBTyxHQUF5QixJQUFJLENBQUM7UUFHckMsbUJBQWMsR0FBeUIsSUFBSSxDQUFDO1FBRzVDLFdBQU0sR0FBcUMsSUFBSSxDQUFDO1FBR2hELFVBQUssR0FBVyxtQkFBQSxJQUFJLEVBQUMsQ0FBQztRQUd0QixXQUFNLEdBQVcsbUJBQUEsSUFBSSxFQUFDLENBQUM7UUFHdkIsV0FBTSxHQUFHLEtBQUssQ0FBQzs7OztRQU1OLHFCQUFnQixHQUFHLElBQUksWUFBWSxFQUFpQixDQUFDOzs7O1FBTXJELGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBbUIsQ0FBQzs7OztRQU0vQyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUF1QixDQUFDOzs7O1FBTXZELGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBcUIsQ0FBQzs7OztRQU1uRCxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUF1QixDQUFDOzs7OztRQU92RCxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7Ozs7O1FBT3ZDLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDOzs7Ozs7UUFRckMsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7Ozs7O1FBT3RDLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQzs7Ozs7UUFPeEMsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7Ozs7O1FBT3JDLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBa0IsQ0FBQztJQXNCL0QsQ0FBQzs7Ozs7Ozs7Ozs7SUFwQmlCLHFDQUFhOzs7Ozs7Ozs7O0lBQTdCLFVBQ0UsR0FBc0IsRUFDdEIsSUFBWSxFQUNaLFVBQWtCLEVBQ2xCLG1CQUF3QyxFQUN4QyxTQUEwQyxFQUMxQyxRQUF1Qjs7Ozs7O3dCQUV2QixJQUFJLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxFQUFFOzRCQUNoQyxzQkFBTzt5QkFDUjt3QkFFcUIscUJBQU0sYUFBYSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxFQUFBOzt3QkFBbEUsYUFBYSxHQUFHLFNBQWtEO3dCQUN4RSxtQkFBbUIsQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7d0JBQzNFLG1CQUFtQixDQUFDLHVDQUF1QyxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQzt3QkFDckYsbUVBQW1FO3dCQUNuRSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7NEJBQ2YsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDO3lCQUNkOzs7OztLQUNGOztnQkFoSEYsU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRTs7OzBCQUVoQyxLQUFLO2lDQUdMLEtBQUs7eUJBR0wsS0FBSzt3QkFHTCxLQUFLO3lCQUdMLEtBQUs7eUJBR0wsS0FBSzttQ0FNTCxNQUFNOzJCQU1OLE1BQU07K0JBTU4sTUFBTTs2QkFNTixNQUFNOytCQU1OLE1BQU07OEJBT04sTUFBTTs0QkFPTixNQUFNOzZCQVFOLE1BQU07K0JBT04sTUFBTTs0QkFPTixNQUFNOzBCQU9OLE1BQU07O0lBdUJULG9CQUFDO0NBQUEsQUFqSEQsSUFpSEM7U0FoSFksYUFBYTs7O0lBQ3hCLGdDQUM0Qzs7SUFFNUMsdUNBQ21EOztJQUVuRCwrQkFDdUQ7O0lBRXZELDhCQUM2Qjs7SUFFN0IsK0JBQzhCOztJQUU5QiwrQkFDc0I7Ozs7O0lBS3RCLHlDQUNxRTs7Ozs7SUFLckUsaUNBQytEOzs7OztJQUsvRCxxQ0FDdUU7Ozs7O0lBS3ZFLG1DQUNtRTs7Ozs7SUFLbkUscUNBQ3VFOzs7Ozs7SUFNdkUsb0NBQ3VEOzs7Ozs7SUFNdkQsa0NBQ3FEOzs7Ozs7O0lBT3JELG1DQUNzRDs7Ozs7O0lBTXRELHFDQUN3RDs7Ozs7O0lBTXhELGtDQUNxRDs7Ozs7O0lBTXJELGdDQUM2RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBOZ1pvbmUsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtU2VydmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgbG9hZEFuaW1hdGlvbiB9IGZyb20gJy4uLy4uL2ludGVybmFscyc7XG5pbXBvcnQgeyBMb3R0aWVFdmVudHNTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbG90dGllLWV2ZW50cy5zZXJ2aWNlJztcbmltcG9ydCB7XG4gIExvdHRpZU9wdGlvbnMsXG4gIExvdHRpZUNTU1N0eWxlRGVjbGFyYXRpb24sXG4gIEFuaW1hdGlvbkl0ZW0sXG4gIEJNQ29tcGxldGVFdmVudCxcbiAgQk1Db21wbGV0ZUxvb3BFdmVudCxcbiAgQk1FbnRlckZyYW1lRXZlbnQsXG4gIEJNU2VnbWVudFN0YXJ0RXZlbnQsXG4gIEJNRGVzdHJveUV2ZW50LFxuICBMb3R0aWVDb250YWluZXJDbGFzc1xufSBmcm9tICcuLi8uLi9zeW1ib2xzJztcblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW2xvdHRpZV0nIH0pXG5leHBvcnQgY2xhc3MgQmFzZURpcmVjdGl2ZSB7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBvcHRpb25zOiBMb3R0aWVPcHRpb25zIHwgbnVsbCA9IG51bGw7XG5cbiAgQElucHV0KClcbiAgcHVibGljIGNvbnRhaW5lckNsYXNzOiBMb3R0aWVDb250YWluZXJDbGFzcyA9IG51bGw7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHN0eWxlczogTG90dGllQ1NTU3R5bGVEZWNsYXJhdGlvbiB8IG51bGwgPSBudWxsO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyB3aWR0aDogc3RyaW5nID0gbnVsbCE7XG5cbiAgQElucHV0KClcbiAgcHVibGljIGhlaWdodDogc3RyaW5nID0gbnVsbCE7XG5cbiAgQElucHV0KClcbiAgcHVibGljIGRldGFjaCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBgYW5pbWF0aW9uQ3JlYXRlZGAgaXMgZGlzcGF0Y2hlZCBhZnRlciBjYWxsaW5nIGBsb2FkQW5pbWF0aW9uYFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyByZWFkb25seSBhbmltYXRpb25DcmVhdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxBbmltYXRpb25JdGVtPigpO1xuXG4gIC8qKlxuICAgKiBgY29tcGxldGVgIGlzIGRpc3BhdGNoZWQgYWZ0ZXIgY29tcGxldGluZyB0aGUgbGFzdCBmcmFtZVxuICAgKi9cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyByZWFkb25seSBjb21wbGV0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8Qk1Db21wbGV0ZUV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBgbG9vcENvbXBsZXRlYCBpcyBkaXNwYXRjaGVkIGFmdGVyIGNvbXBsZXRpbmcgZnJhbWUgbG9vcFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyByZWFkb25seSBsb29wQ29tcGxldGUgPSBuZXcgRXZlbnRFbWl0dGVyPEJNQ29tcGxldGVMb29wRXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIGBlbnRlckZyYW1lYCBpcyBkaXNwYXRjaGVkIGFmdGVyIGVudGVyaW5nIHRoZSBuZXcgZnJhbWVcbiAgICovXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgcmVhZG9ubHkgZW50ZXJGcmFtZSA9IG5ldyBFdmVudEVtaXR0ZXI8Qk1FbnRlckZyYW1lRXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIGBzZWdtZW50U3RhcnRgIGlzIGRpc3BhdGNoZWQgd2hlbiB0aGUgbmV3IHNlZ21lbnQgaXMgYWRqdXN0ZWRcbiAgICovXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgcmVhZG9ubHkgc2VnbWVudFN0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxCTVNlZ21lbnRTdGFydEV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBPcmlnaW5hbCBldmVudCBuYW1lIGlzIGBjb25maWdfcmVhZHlgLiBgY29uZmlnX3JlYWR5YCBpcyBkaXNwYXRjaGVkXG4gICAqIGFmdGVyIHRoZSBuZWVkZWQgcmVuZGVyZXIgaXMgY29uZmlndXJlZFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyByZWFkb25seSBjb25maWdSZWFkeSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAvKipcbiAgICogT3JpZ2luYWwgZXZlbnQgbmFtZSBpcyBgZGF0YV9yZWFkeWAuIGBkYXRhX3JlYWR5YCBpcyBkaXNwYXRjaGVkXG4gICAqIHdoZW4gYWxsIHBhcnRzIG9mIHRoZSBhbmltYXRpb24gaGF2ZSBiZWVuIGxvYWRlZFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyByZWFkb25seSBkYXRhUmVhZHkgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgLyoqXG4gICAqIE9yaWdpbmFsIGV2ZW50IG5hbWUgaXMgYGRhdGFfZmFpbGVkYC4gYGRhdGFfZmFpbGVkYCBjYW4gYmUgZGlzcGF0Y2hlZFxuICAgKiBpZiB0aGUgYFhNTEh0dHBSZXF1ZXN0YCwgdGhhdCB0cmllZCB0byBsb2FkIGFuaW1hdGlvbiBkYXRhIHVzaW5nXG4gICAqIHByb3ZpZGVkIGBwYXRoYCwgaGFzIGVycm9yZWRcbiAgICovXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgcmVhZG9ubHkgZGF0YUZhaWxlZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAvKipcbiAgICogT3JpZ2luYWwgZXZlbnQgbmFtZSBpcyBgbG9hZGVkX2ltYWdlc2AuIGBsb2FkZWRfaW1hZ2VzYCBjYW4gYmVcbiAgICogZGlzcGF0Y2hlZCBhZnRlciBhbGwgYXNzZXRzIGFyZSBwcmVsb2FkZWRcbiAgICovXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgcmVhZG9ubHkgbG9hZGVkSW1hZ2VzID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIC8qKlxuICAgKiBPcmlnaW5hbCBldmVudCBuYW1lIGlzIGBET01Mb2FkZWRgLiBgRE9NTG9hZGVkYCBpcyBkaXNwYXRjaGVkXG4gICAqIHdoZW4gZWxlbWVudHMgaGF2ZSBiZWVuIGFkZGVkIHRvIHRoZSBET01cbiAgICovXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgcmVhZG9ubHkgZG9tTG9hZGVkID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIC8qKlxuICAgKiBgZGVzdHJveWAgd2lsbCBiZSBkaXNwYXRjaGVkIGluIHRoZSBgbmdPbkRlc3Ryb3lgIGhvb2sgb2YgdGhlIHNlcnZpY2UsXG4gICAqIGl0J3MgdXNlZnVsIGZvciByZWxlYXNpbmcgcmVzb3VyY2VzXG4gICAqL1xuICBAT3V0cHV0KClcbiAgcHVibGljIHJlYWRvbmx5IGRlc3Ryb3kgPSBuZXcgRXZlbnRFbWl0dGVyPEJNRGVzdHJveUV2ZW50PigpO1xuXG4gIHByb3RlY3RlZCBhc3luYyBsb2FkQW5pbWF0aW9uKFxuICAgIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgem9uZTogTmdab25lLFxuICAgIHBsYXRmb3JtSWQ6IHN0cmluZyxcbiAgICBsb3R0aWVFdmVudHNTZXJ2aWNlOiBMb3R0aWVFdmVudHNTZXJ2aWNlLFxuICAgIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQgfCBIVE1MQ2FudmFzRWxlbWVudCxcbiAgICBpbnN0YW5jZTogQmFzZURpcmVjdGl2ZVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAoaXNQbGF0Zm9ybVNlcnZlcihwbGF0Zm9ybUlkKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGFuaW1hdGlvbkl0ZW0gPSBhd2FpdCBsb2FkQW5pbWF0aW9uKHpvbmUsIHRoaXMub3B0aW9ucywgY29udGFpbmVyKTtcbiAgICBsb3R0aWVFdmVudHNTZXJ2aWNlLmFuaW1hdGlvbkNyZWF0ZWQoYW5pbWF0aW9uSXRlbSwgdGhpcy5hbmltYXRpb25DcmVhdGVkKTtcbiAgICBsb3R0aWVFdmVudHNTZXJ2aWNlLnNldEFuaW1hdGlvbkl0ZW1BbmRMb3R0aWVFdmVudExpc3RlbmVycyhhbmltYXRpb25JdGVtLCBpbnN0YW5jZSk7XG4gICAgLy8gQmFzaWNhbGx5IG1ha2UgdGhpcyB2aWV3IHN0YXRpYyBhbmQgbmV2ZXIgY2hlY2sgaXQgaW4gdGhlIGZ1dHVyZVxuICAgIGlmICh0aGlzLmRldGFjaCkge1xuICAgICAgcmVmLmRldGFjaCgpO1xuICAgIH1cbiAgfVxufVxuIl19