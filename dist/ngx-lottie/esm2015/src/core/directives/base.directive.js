/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, Input, Output, EventEmitter } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { loadAnimation } from '../../internals';
export class BaseDirective {
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
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbG90dGllLyIsInNvdXJjZXMiOlsic3JjL2NvcmUvZGlyZWN0aXZlcy9iYXNlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQTZCLE1BQU0sZUFBZSxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQWVoRCxNQUFNLE9BQU8sYUFBYTtJQUQxQjtRQUdTLFlBQU8sR0FBeUIsSUFBSSxDQUFDO1FBR3JDLG1CQUFjLEdBQXlCLElBQUksQ0FBQztRQUc1QyxXQUFNLEdBQXFDLElBQUksQ0FBQztRQUdoRCxVQUFLLEdBQVcsbUJBQUEsSUFBSSxFQUFDLENBQUM7UUFHdEIsV0FBTSxHQUFXLG1CQUFBLElBQUksRUFBQyxDQUFDO1FBR3ZCLFdBQU0sR0FBRyxLQUFLLENBQUM7Ozs7UUFNTixxQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBaUIsQ0FBQzs7OztRQU1yRCxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQW1CLENBQUM7Ozs7UUFNL0MsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBdUIsQ0FBQzs7OztRQU12RCxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQXFCLENBQUM7Ozs7UUFNbkQsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBdUIsQ0FBQzs7Ozs7UUFPdkQsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDOzs7OztRQU92QyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQzs7Ozs7O1FBUXJDLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDOzs7OztRQU90QyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7Ozs7O1FBT3hDLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDOzs7OztRQU9yQyxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQWtCLENBQUM7SUFzQi9ELENBQUM7Ozs7Ozs7Ozs7O0lBcEJpQixhQUFhLENBQzNCLEdBQXNCLEVBQ3RCLElBQVksRUFDWixVQUFrQixFQUNsQixtQkFBd0MsRUFDeEMsU0FBMEMsRUFDMUMsUUFBdUI7O1lBRXZCLElBQUksZ0JBQWdCLENBQUMsVUFBVSxDQUFDLEVBQUU7Z0JBQ2hDLE9BQU87YUFDUjs7a0JBRUssYUFBYSxHQUFHLE1BQU0sYUFBYSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQztZQUN4RSxtQkFBbUIsQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDM0UsbUJBQW1CLENBQUMsdUNBQXVDLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ3JGLG1FQUFtRTtZQUNuRSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ2YsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ2Q7UUFDSCxDQUFDO0tBQUE7OztZQWhIRixTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFOzs7c0JBRWhDLEtBQUs7NkJBR0wsS0FBSztxQkFHTCxLQUFLO29CQUdMLEtBQUs7cUJBR0wsS0FBSztxQkFHTCxLQUFLOytCQU1MLE1BQU07dUJBTU4sTUFBTTsyQkFNTixNQUFNO3lCQU1OLE1BQU07MkJBTU4sTUFBTTswQkFPTixNQUFNO3dCQU9OLE1BQU07eUJBUU4sTUFBTTsyQkFPTixNQUFNO3dCQU9OLE1BQU07c0JBT04sTUFBTTs7OztJQXhGUCxnQ0FDNEM7O0lBRTVDLHVDQUNtRDs7SUFFbkQsK0JBQ3VEOztJQUV2RCw4QkFDNkI7O0lBRTdCLCtCQUM4Qjs7SUFFOUIsK0JBQ3NCOzs7OztJQUt0Qix5Q0FDcUU7Ozs7O0lBS3JFLGlDQUMrRDs7Ozs7SUFLL0QscUNBQ3VFOzs7OztJQUt2RSxtQ0FDbUU7Ozs7O0lBS25FLHFDQUN1RTs7Ozs7O0lBTXZFLG9DQUN1RDs7Ozs7O0lBTXZELGtDQUNxRDs7Ozs7OztJQU9yRCxtQ0FDc0Q7Ozs7OztJQU10RCxxQ0FDd0Q7Ozs7OztJQU14RCxrQ0FDcUQ7Ozs7OztJQU1yRCxnQ0FDNkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgTmdab25lLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybVNlcnZlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IGxvYWRBbmltYXRpb24gfSBmcm9tICcuLi8uLi9pbnRlcm5hbHMnO1xuaW1wb3J0IHsgTG90dGllRXZlbnRzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2xvdHRpZS1ldmVudHMuc2VydmljZSc7XG5pbXBvcnQge1xuICBMb3R0aWVPcHRpb25zLFxuICBMb3R0aWVDU1NTdHlsZURlY2xhcmF0aW9uLFxuICBBbmltYXRpb25JdGVtLFxuICBCTUNvbXBsZXRlRXZlbnQsXG4gIEJNQ29tcGxldGVMb29wRXZlbnQsXG4gIEJNRW50ZXJGcmFtZUV2ZW50LFxuICBCTVNlZ21lbnRTdGFydEV2ZW50LFxuICBCTURlc3Ryb3lFdmVudCxcbiAgTG90dGllQ29udGFpbmVyQ2xhc3Ncbn0gZnJvbSAnLi4vLi4vc3ltYm9scyc7XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tsb3R0aWVdJyB9KVxuZXhwb3J0IGNsYXNzIEJhc2VEaXJlY3RpdmUge1xuICBASW5wdXQoKVxuICBwdWJsaWMgb3B0aW9uczogTG90dGllT3B0aW9ucyB8IG51bGwgPSBudWxsO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBjb250YWluZXJDbGFzczogTG90dGllQ29udGFpbmVyQ2xhc3MgPSBudWxsO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzdHlsZXM6IExvdHRpZUNTU1N0eWxlRGVjbGFyYXRpb24gfCBudWxsID0gbnVsbDtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgd2lkdGg6IHN0cmluZyA9IG51bGwhO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBoZWlnaHQ6IHN0cmluZyA9IG51bGwhO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBkZXRhY2ggPSBmYWxzZTtcblxuICAvKipcbiAgICogYGFuaW1hdGlvbkNyZWF0ZWRgIGlzIGRpc3BhdGNoZWQgYWZ0ZXIgY2FsbGluZyBgbG9hZEFuaW1hdGlvbmBcbiAgICovXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgcmVhZG9ubHkgYW5pbWF0aW9uQ3JlYXRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8QW5pbWF0aW9uSXRlbT4oKTtcblxuICAvKipcbiAgICogYGNvbXBsZXRlYCBpcyBkaXNwYXRjaGVkIGFmdGVyIGNvbXBsZXRpbmcgdGhlIGxhc3QgZnJhbWVcbiAgICovXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgcmVhZG9ubHkgY29tcGxldGUgPSBuZXcgRXZlbnRFbWl0dGVyPEJNQ29tcGxldGVFdmVudD4oKTtcblxuICAvKipcbiAgICogYGxvb3BDb21wbGV0ZWAgaXMgZGlzcGF0Y2hlZCBhZnRlciBjb21wbGV0aW5nIGZyYW1lIGxvb3BcbiAgICovXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgcmVhZG9ubHkgbG9vcENvbXBsZXRlID0gbmV3IEV2ZW50RW1pdHRlcjxCTUNvbXBsZXRlTG9vcEV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBgZW50ZXJGcmFtZWAgaXMgZGlzcGF0Y2hlZCBhZnRlciBlbnRlcmluZyB0aGUgbmV3IGZyYW1lXG4gICAqL1xuICBAT3V0cHV0KClcbiAgcHVibGljIHJlYWRvbmx5IGVudGVyRnJhbWUgPSBuZXcgRXZlbnRFbWl0dGVyPEJNRW50ZXJGcmFtZUV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBgc2VnbWVudFN0YXJ0YCBpcyBkaXNwYXRjaGVkIHdoZW4gdGhlIG5ldyBzZWdtZW50IGlzIGFkanVzdGVkXG4gICAqL1xuICBAT3V0cHV0KClcbiAgcHVibGljIHJlYWRvbmx5IHNlZ21lbnRTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8Qk1TZWdtZW50U3RhcnRFdmVudD4oKTtcblxuICAvKipcbiAgICogT3JpZ2luYWwgZXZlbnQgbmFtZSBpcyBgY29uZmlnX3JlYWR5YC4gYGNvbmZpZ19yZWFkeWAgaXMgZGlzcGF0Y2hlZFxuICAgKiBhZnRlciB0aGUgbmVlZGVkIHJlbmRlcmVyIGlzIGNvbmZpZ3VyZWRcbiAgICovXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgcmVhZG9ubHkgY29uZmlnUmVhZHkgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgLyoqXG4gICAqIE9yaWdpbmFsIGV2ZW50IG5hbWUgaXMgYGRhdGFfcmVhZHlgLiBgZGF0YV9yZWFkeWAgaXMgZGlzcGF0Y2hlZFxuICAgKiB3aGVuIGFsbCBwYXJ0cyBvZiB0aGUgYW5pbWF0aW9uIGhhdmUgYmVlbiBsb2FkZWRcbiAgICovXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgcmVhZG9ubHkgZGF0YVJlYWR5ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIC8qKlxuICAgKiBPcmlnaW5hbCBldmVudCBuYW1lIGlzIGBkYXRhX2ZhaWxlZGAuIGBkYXRhX2ZhaWxlZGAgY2FuIGJlIGRpc3BhdGNoZWRcbiAgICogaWYgdGhlIGBYTUxIdHRwUmVxdWVzdGAsIHRoYXQgdHJpZWQgdG8gbG9hZCBhbmltYXRpb24gZGF0YSB1c2luZ1xuICAgKiBwcm92aWRlZCBgcGF0aGAsIGhhcyBlcnJvcmVkXG4gICAqL1xuICBAT3V0cHV0KClcbiAgcHVibGljIHJlYWRvbmx5IGRhdGFGYWlsZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgLyoqXG4gICAqIE9yaWdpbmFsIGV2ZW50IG5hbWUgaXMgYGxvYWRlZF9pbWFnZXNgLiBgbG9hZGVkX2ltYWdlc2AgY2FuIGJlXG4gICAqIGRpc3BhdGNoZWQgYWZ0ZXIgYWxsIGFzc2V0cyBhcmUgcHJlbG9hZGVkXG4gICAqL1xuICBAT3V0cHV0KClcbiAgcHVibGljIHJlYWRvbmx5IGxvYWRlZEltYWdlcyA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAvKipcbiAgICogT3JpZ2luYWwgZXZlbnQgbmFtZSBpcyBgRE9NTG9hZGVkYC4gYERPTUxvYWRlZGAgaXMgZGlzcGF0Y2hlZFxuICAgKiB3aGVuIGVsZW1lbnRzIGhhdmUgYmVlbiBhZGRlZCB0byB0aGUgRE9NXG4gICAqL1xuICBAT3V0cHV0KClcbiAgcHVibGljIHJlYWRvbmx5IGRvbUxvYWRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAvKipcbiAgICogYGRlc3Ryb3lgIHdpbGwgYmUgZGlzcGF0Y2hlZCBpbiB0aGUgYG5nT25EZXN0cm95YCBob29rIG9mIHRoZSBzZXJ2aWNlLFxuICAgKiBpdCdzIHVzZWZ1bCBmb3IgcmVsZWFzaW5nIHJlc291cmNlc1xuICAgKi9cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyByZWFkb25seSBkZXN0cm95ID0gbmV3IEV2ZW50RW1pdHRlcjxCTURlc3Ryb3lFdmVudD4oKTtcblxuICBwcm90ZWN0ZWQgYXN5bmMgbG9hZEFuaW1hdGlvbihcbiAgICByZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHpvbmU6IE5nWm9uZSxcbiAgICBwbGF0Zm9ybUlkOiBzdHJpbmcsXG4gICAgbG90dGllRXZlbnRzU2VydmljZTogTG90dGllRXZlbnRzU2VydmljZSxcbiAgICBjb250YWluZXI6IEhUTUxFbGVtZW50IHwgSFRNTENhbnZhc0VsZW1lbnQsXG4gICAgaW5zdGFuY2U6IEJhc2VEaXJlY3RpdmVcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKGlzUGxhdGZvcm1TZXJ2ZXIocGxhdGZvcm1JZCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBhbmltYXRpb25JdGVtID0gYXdhaXQgbG9hZEFuaW1hdGlvbih6b25lLCB0aGlzLm9wdGlvbnMsIGNvbnRhaW5lcik7XG4gICAgbG90dGllRXZlbnRzU2VydmljZS5hbmltYXRpb25DcmVhdGVkKGFuaW1hdGlvbkl0ZW0sIHRoaXMuYW5pbWF0aW9uQ3JlYXRlZCk7XG4gICAgbG90dGllRXZlbnRzU2VydmljZS5zZXRBbmltYXRpb25JdGVtQW5kTG90dGllRXZlbnRMaXN0ZW5lcnMoYW5pbWF0aW9uSXRlbSwgaW5zdGFuY2UpO1xuICAgIC8vIEJhc2ljYWxseSBtYWtlIHRoaXMgdmlldyBzdGF0aWMgYW5kIG5ldmVyIGNoZWNrIGl0IGluIHRoZSBmdXR1cmVcbiAgICBpZiAodGhpcy5kZXRhY2gpIHtcbiAgICAgIHJlZi5kZXRhY2goKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==