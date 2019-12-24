/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, NgZone, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { lottieEvents, getEventEmitterFromDirectiveInstance } from '../../internals';
export class LottieEventsService {
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    LottieEventsService.prototype.animationItem;
    /**
     * Save listeners so we're able to remove them from `AnimationItem`
     * by references in the future when this service is destroyed
     * @type {?}
     * @private
     */
    LottieEventsService.prototype.listeners;
    /**
     * @type {?}
     * @private
     */
    LottieEventsService.prototype.zone;
    /**
     * @type {?}
     * @private
     */
    LottieEventsService.prototype.platformId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG90dGllLWV2ZW50cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWxvdHRpZS8iLCJzb3VyY2VzIjpbInNyYy9jb3JlL3NlcnZpY2VzL2xvdHRpZS1ldmVudHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLEVBQWdCLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxvQ0FBb0MsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBSXJGLE1BQU0sT0FBTyxtQkFBbUI7Ozs7O0lBUzlCLFlBQ21CLElBQVksRUFDUyxVQUFrQjtRQUR2QyxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1MsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQVZsRCxrQkFBYSxHQUF5QixJQUFJLENBQUM7Ozs7O1FBTWxDLGNBQVMsR0FBRyxJQUFJLEdBQUcsRUFBaUQsQ0FBQztJQUtuRixDQUFDOzs7O0lBRUcsV0FBVztRQUNoQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQzs7Ozs7Ozs7SUFNTSxnQkFBZ0IsQ0FDckIsYUFBNEIsRUFDNUIsZ0JBQTZDO1FBRTdDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7Ozs7SUFFTSx1Q0FBdUMsQ0FDNUMsYUFBNEIsRUFDNUIsUUFBdUI7UUFFdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsd0VBQXdFO1FBQ3hFLG1FQUFtRTtRQUNuRSxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQzlFLENBQUM7Ozs7OztJQUVPLHlCQUF5QixDQUFDLFFBQXVCO1FBQ3ZELFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUM1QixJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ2hELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7OztJQUVPLHdCQUF3QixDQUFDLElBQXFCLEVBQUUsUUFBdUI7O2NBQ3ZFLE9BQU8sR0FBOEIsb0NBQW9DLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQzs7Y0FDekYsUUFBUSxHQUFHLENBQUMsS0FBa0IsRUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFFbEUsbUJBQUEsSUFBSSxDQUFDLGFBQWEsRUFBQyxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztRQUVyRCxvRUFBb0U7UUFDcEUsb0RBQW9EO1FBQ3BELElBQUksSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUN0QixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDcEM7SUFDSCxDQUFDOzs7OztJQUVPLE9BQU87UUFDYixJQUFJLGdCQUFnQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsYUFBYSxLQUFLLElBQUksRUFBRTtZQUNwRSxPQUFPO1NBQ1I7UUFFRCxLQUFLLE1BQU0sQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUN2RCxtQkFBQSxJQUFJLENBQUMsYUFBYSxFQUFDLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQ3pEO1FBRUQsMENBQTBDO1FBQzFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFdkIsMkRBQTJEO1FBQzNELHlFQUF5RTtRQUN6RSxtQkFBQSxJQUFJLENBQUMsYUFBYSxFQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7SUFDNUIsQ0FBQzs7O1lBM0VGLFVBQVU7Ozs7WUFQcUIsTUFBTTt5Q0FtQmpDLE1BQU0sU0FBQyxXQUFXOzs7Ozs7O0lBVnJCLDRDQUFtRDs7Ozs7OztJQU1uRCx3Q0FBc0Y7Ozs7O0lBR3BGLG1DQUE2Qjs7Ozs7SUFDN0IseUNBQXdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25EZXN0cm95LCBOZ1pvbmUsIEV2ZW50RW1pdHRlciwgSW5qZWN0LCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybVNlcnZlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEFuaW1hdGlvbkl0ZW0sIExvdHRpZUV2ZW50LCBMb3R0aWVFdmVudE5hbWUgfSBmcm9tICcuLi8uLi9zeW1ib2xzJztcbmltcG9ydCB7IGxvdHRpZUV2ZW50cywgZ2V0RXZlbnRFbWl0dGVyRnJvbURpcmVjdGl2ZUluc3RhbmNlIH0gZnJvbSAnLi4vLi4vaW50ZXJuYWxzJztcbmltcG9ydCB7IEJhc2VEaXJlY3RpdmUgfSBmcm9tICcuLi9kaXJlY3RpdmVzL2Jhc2UuZGlyZWN0aXZlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvdHRpZUV2ZW50c1NlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGFuaW1hdGlvbkl0ZW06IEFuaW1hdGlvbkl0ZW0gfCBudWxsID0gbnVsbDtcblxuICAvKipcbiAgICogU2F2ZSBsaXN0ZW5lcnMgc28gd2UncmUgYWJsZSB0byByZW1vdmUgdGhlbSBmcm9tIGBBbmltYXRpb25JdGVtYFxuICAgKiBieSByZWZlcmVuY2VzIGluIHRoZSBmdXR1cmUgd2hlbiB0aGlzIHNlcnZpY2UgaXMgZGVzdHJveWVkXG4gICAqL1xuICBwcml2YXRlIHJlYWRvbmx5IGxpc3RlbmVycyA9IG5ldyBNYXA8TG90dGllRXZlbnROYW1lLCAoZXZlbnQ6IExvdHRpZUV2ZW50KSA9PiB2b2lkPigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgem9uZTogTmdab25lLFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcmVhZG9ubHkgcGxhdGZvcm1JZDogc3RyaW5nXG4gICkge31cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kaXNwb3NlKCk7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgaXMgaW52b2tlZCBhZnRlciBjYWxsaW5nIGBsb2FkQW5pbWF0aW9uYCBhbmQgZGlzcGF0Y2hlcyB0aGUgbmV3IG9uZVxuICAgKiBjcmVhdGVkIGBBbmltYXRpb25JdGVtYCBpbnN0YW5jZVxuICAgKi9cbiAgcHVibGljIGFuaW1hdGlvbkNyZWF0ZWQoXG4gICAgYW5pbWF0aW9uSXRlbTogQW5pbWF0aW9uSXRlbSxcbiAgICBhbmltYXRpb25DcmVhdGVkOiBFdmVudEVtaXR0ZXI8QW5pbWF0aW9uSXRlbT5cbiAgKTogdm9pZCB7XG4gICAgYW5pbWF0aW9uQ3JlYXRlZC5lbWl0KGFuaW1hdGlvbkl0ZW0pO1xuICB9XG5cbiAgcHVibGljIHNldEFuaW1hdGlvbkl0ZW1BbmRMb3R0aWVFdmVudExpc3RlbmVycyhcbiAgICBhbmltYXRpb25JdGVtOiBBbmltYXRpb25JdGVtLFxuICAgIGluc3RhbmNlOiBCYXNlRGlyZWN0aXZlXG4gICk6IHZvaWQge1xuICAgIHRoaXMuYW5pbWF0aW9uSXRlbSA9IGFuaW1hdGlvbkl0ZW07XG4gICAgLy8gYEFuaW1hdGlvbkl0ZW1gIHRyaWdnZXJzIGRpZmZlcmVudCBldmVudHMgZXZlcnkgbXMsIHdlIGhhdmUgdG8gbGlzdGVuXG4gICAgLy8gdGhlbSBvdXRzaWRlIEFuZ3VsYXIncyBjb250ZXh0LCB0aHVzIGl0IHdvbid0IGFmZmVjdCBwZXJmb3JtYW5jZVxuICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLnNldHVwTG90dGllRXZlbnRMaXN0ZW5lcnMoaW5zdGFuY2UpKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0dXBMb3R0aWVFdmVudExpc3RlbmVycyhpbnN0YW5jZTogQmFzZURpcmVjdGl2ZSk6IHZvaWQge1xuICAgIGxvdHRpZUV2ZW50cy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICB0aGlzLnNldHVwTG90dGllRXZlbnRMaXN0ZW5lcihuYW1lLCBpbnN0YW5jZSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHNldHVwTG90dGllRXZlbnRMaXN0ZW5lcihuYW1lOiBMb3R0aWVFdmVudE5hbWUsIGluc3RhbmNlOiBCYXNlRGlyZWN0aXZlKTogdm9pZCB7XG4gICAgY29uc3QgZW1pdHRlcjogRXZlbnRFbWl0dGVyPExvdHRpZUV2ZW50PiA9IGdldEV2ZW50RW1pdHRlckZyb21EaXJlY3RpdmVJbnN0YW5jZShpbnN0YW5jZSwgbmFtZSk7XG4gICAgY29uc3QgbGlzdGVuZXIgPSAoZXZlbnQ6IExvdHRpZUV2ZW50KTogdm9pZCA9PiBlbWl0dGVyLmVtaXQoZXZlbnQpO1xuXG4gICAgdGhpcy5hbmltYXRpb25JdGVtIS5hZGRFdmVudExpc3RlbmVyKG5hbWUsIGxpc3RlbmVyKTtcblxuICAgIC8vIFdlIGRvbid0IGhhdmUgdG8gc2F2ZSBgZGVzdHJveWAgbGlzdGVuZXIsIGJlY2F1c2UgYEFuaW1hdGlvbkl0ZW1gXG4gICAgLy8gaXMgYWJsZSB0byByZW1vdmUgYGRlc3Ryb3lgIGV2ZW50IGxpc3RlbmVyIGl0c2VsZlxuICAgIGlmIChuYW1lICE9PSAnZGVzdHJveScpIHtcbiAgICAgIHRoaXMubGlzdGVuZXJzLnNldChuYW1lLCBsaXN0ZW5lcik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBkaXNwb3NlKCk6IHZvaWQge1xuICAgIGlmIChpc1BsYXRmb3JtU2VydmVyKHRoaXMucGxhdGZvcm1JZCkgfHwgdGhpcy5hbmltYXRpb25JdGVtID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBbbmFtZSwgY2FsbGJhY2tdIG9mIHRoaXMubGlzdGVuZXJzLmVudHJpZXMoKSkge1xuICAgICAgdGhpcy5hbmltYXRpb25JdGVtIS5yZW1vdmVFdmVudExpc3RlbmVyKG5hbWUsIGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICAvLyBSZWxlYXNlIGxpc3RlbmVycyBhcyB3ZSBkb24ndCBuZWVkIHRoZW1cbiAgICB0aGlzLmxpc3RlbmVycy5jbGVhcigpO1xuXG4gICAgLy8gV2UgY2Fubm90IGNhbGwgYGRlc3Ryb3lgIGJlZm9yZSByZW1vdmluZyBldmVudCBsaXN0ZW5lcnNcbiAgICAvLyBhcyBhZnRlciBjYWxsaW5nIGBkZXN0cm95YCAtIGByZW1vdmVFdmVudExpc3RlbmVyYCBiZWNvbWVzIHVuYXZhaWxhYmxlXG4gICAgdGhpcy5hbmltYXRpb25JdGVtIS5kZXN0cm95KCk7XG4gICAgdGhpcy5hbmltYXRpb25JdGVtID0gbnVsbDtcbiAgfVxufVxuIl19