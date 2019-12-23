/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, NgZone, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { lottieEvents, getEventEmitterFromDirectiveInstance } from '../../internals';
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
            for (var _b = tslib_1.__values(this.listeners.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = tslib_1.__read(_c.value, 2), name_1 = _d[0], callback = _d[1];
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
export { LottieEventsService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG90dGllLWV2ZW50cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWxvdHRpZS8iLCJzb3VyY2VzIjpbInNyYy9jb3JlL3NlcnZpY2VzL2xvdHRpZS1ldmVudHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxFQUFnQixNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBR25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsb0NBQW9DLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUdyRjtJQVVFLDZCQUNtQixJQUFZLEVBQ1MsVUFBa0I7UUFEdkMsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNTLGVBQVUsR0FBVixVQUFVLENBQVE7UUFWbEQsa0JBQWEsR0FBeUIsSUFBSSxDQUFDOzs7OztRQU1sQyxjQUFTLEdBQUcsSUFBSSxHQUFHLEVBQWlELENBQUM7SUFLbkYsQ0FBQzs7OztJQUVHLHlDQUFXOzs7SUFBbEI7UUFDRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7Ozs7SUFDSSw4Q0FBZ0I7Ozs7Ozs7SUFBdkIsVUFDRSxhQUE0QixFQUM1QixnQkFBNkM7UUFFN0MsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Ozs7OztJQUVNLHFFQUF1Qzs7Ozs7SUFBOUMsVUFDRSxhQUE0QixFQUM1QixRQUF1QjtRQUZ6QixpQkFRQztRQUpDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLHdFQUF3RTtRQUN4RSxtRUFBbUU7UUFDbkUsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLHlCQUF5QixDQUFDLFFBQVEsQ0FBQyxFQUF4QyxDQUF3QyxDQUFDLENBQUM7SUFDOUUsQ0FBQzs7Ozs7O0lBRU8sdURBQXlCOzs7OztJQUFqQyxVQUFrQyxRQUF1QjtRQUF6RCxpQkFJQztRQUhDLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJO1lBQ3hCLEtBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDaEQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7O0lBRU8sc0RBQXdCOzs7Ozs7SUFBaEMsVUFBaUMsSUFBcUIsRUFBRSxRQUF1Qjs7WUFDdkUsT0FBTyxHQUE4QixvQ0FBb0MsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDOztZQUN6RixRQUFRLEdBQUcsVUFBQyxLQUFrQixJQUFXLE9BQUEsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBbkIsQ0FBbUI7UUFFbEUsbUJBQUEsSUFBSSxDQUFDLGFBQWEsRUFBQyxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztRQUVyRCxvRUFBb0U7UUFDcEUsb0RBQW9EO1FBQ3BELElBQUksSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUN0QixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDcEM7SUFDSCxDQUFDOzs7OztJQUVPLHFDQUFPOzs7O0lBQWY7O1FBQ0UsSUFBSSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxDQUFDLGFBQWEsS0FBSyxJQUFJLEVBQUU7WUFDcEUsT0FBTztTQUNSOztZQUVELEtBQStCLElBQUEsS0FBQSxpQkFBQSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFBLGdCQUFBLDRCQUFFO2dCQUE5QyxJQUFBLGdDQUFnQixFQUFmLGNBQUksRUFBRSxnQkFBUTtnQkFDeEIsbUJBQUEsSUFBSSxDQUFDLGFBQWEsRUFBQyxDQUFDLG1CQUFtQixDQUFDLE1BQUksRUFBRSxRQUFRLENBQUMsQ0FBQzthQUN6RDs7Ozs7Ozs7O1FBRUQsMENBQTBDO1FBQzFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFdkIsMkRBQTJEO1FBQzNELHlFQUF5RTtRQUN6RSxtQkFBQSxJQUFJLENBQUMsYUFBYSxFQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7SUFDNUIsQ0FBQzs7Z0JBM0VGLFVBQVU7Ozs7Z0JBUHFCLE1BQU07NkNBbUJqQyxNQUFNLFNBQUMsV0FBVzs7SUFnRXZCLDBCQUFDO0NBQUEsQUE1RUQsSUE0RUM7U0EzRVksbUJBQW1COzs7Ozs7SUFDOUIsNENBQW1EOzs7Ozs7O0lBTW5ELHdDQUFzRjs7Ozs7SUFHcEYsbUNBQTZCOzs7OztJQUM3Qix5Q0FBd0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3ksIE5nWm9uZSwgRXZlbnRFbWl0dGVyLCBJbmplY3QsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtU2VydmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgQW5pbWF0aW9uSXRlbSwgTG90dGllRXZlbnQsIExvdHRpZUV2ZW50TmFtZSB9IGZyb20gJy4uLy4uL3N5bWJvbHMnO1xuaW1wb3J0IHsgbG90dGllRXZlbnRzLCBnZXRFdmVudEVtaXR0ZXJGcm9tRGlyZWN0aXZlSW5zdGFuY2UgfSBmcm9tICcuLi8uLi9pbnRlcm5hbHMnO1xuaW1wb3J0IHsgQmFzZURpcmVjdGl2ZSB9IGZyb20gJy4uL2RpcmVjdGl2ZXMvYmFzZS5kaXJlY3RpdmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG90dGllRXZlbnRzU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgYW5pbWF0aW9uSXRlbTogQW5pbWF0aW9uSXRlbSB8IG51bGwgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBTYXZlIGxpc3RlbmVycyBzbyB3ZSdyZSBhYmxlIHRvIHJlbW92ZSB0aGVtIGZyb20gYEFuaW1hdGlvbkl0ZW1gXG4gICAqIGJ5IHJlZmVyZW5jZXMgaW4gdGhlIGZ1dHVyZSB3aGVuIHRoaXMgc2VydmljZSBpcyBkZXN0cm95ZWRcbiAgICovXG4gIHByaXZhdGUgcmVhZG9ubHkgbGlzdGVuZXJzID0gbmV3IE1hcDxMb3R0aWVFdmVudE5hbWUsIChldmVudDogTG90dGllRXZlbnQpID0+IHZvaWQ+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSB6b25lOiBOZ1pvbmUsXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSByZWFkb25seSBwbGF0Zm9ybUlkOiBzdHJpbmdcbiAgKSB7fVxuXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRpc3Bvc2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIGFmdGVyIGNhbGxpbmcgYGxvYWRBbmltYXRpb25gIGFuZCBkaXNwYXRjaGVzIHRoZSBuZXcgb25lXG4gICAqIGNyZWF0ZWQgYEFuaW1hdGlvbkl0ZW1gIGluc3RhbmNlXG4gICAqL1xuICBwdWJsaWMgYW5pbWF0aW9uQ3JlYXRlZChcbiAgICBhbmltYXRpb25JdGVtOiBBbmltYXRpb25JdGVtLFxuICAgIGFuaW1hdGlvbkNyZWF0ZWQ6IEV2ZW50RW1pdHRlcjxBbmltYXRpb25JdGVtPlxuICApOiB2b2lkIHtcbiAgICBhbmltYXRpb25DcmVhdGVkLmVtaXQoYW5pbWF0aW9uSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgc2V0QW5pbWF0aW9uSXRlbUFuZExvdHRpZUV2ZW50TGlzdGVuZXJzKFxuICAgIGFuaW1hdGlvbkl0ZW06IEFuaW1hdGlvbkl0ZW0sXG4gICAgaW5zdGFuY2U6IEJhc2VEaXJlY3RpdmVcbiAgKTogdm9pZCB7XG4gICAgdGhpcy5hbmltYXRpb25JdGVtID0gYW5pbWF0aW9uSXRlbTtcbiAgICAvLyBgQW5pbWF0aW9uSXRlbWAgdHJpZ2dlcnMgZGlmZmVyZW50IGV2ZW50cyBldmVyeSBtcywgd2UgaGF2ZSB0byBsaXN0ZW5cbiAgICAvLyB0aGVtIG91dHNpZGUgQW5ndWxhcidzIGNvbnRleHQsIHRodXMgaXQgd29uJ3QgYWZmZWN0IHBlcmZvcm1hbmNlXG4gICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuc2V0dXBMb3R0aWVFdmVudExpc3RlbmVycyhpbnN0YW5jZSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXR1cExvdHRpZUV2ZW50TGlzdGVuZXJzKGluc3RhbmNlOiBCYXNlRGlyZWN0aXZlKTogdm9pZCB7XG4gICAgbG90dGllRXZlbnRzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgIHRoaXMuc2V0dXBMb3R0aWVFdmVudExpc3RlbmVyKG5hbWUsIGluc3RhbmNlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0dXBMb3R0aWVFdmVudExpc3RlbmVyKG5hbWU6IExvdHRpZUV2ZW50TmFtZSwgaW5zdGFuY2U6IEJhc2VEaXJlY3RpdmUpOiB2b2lkIHtcbiAgICBjb25zdCBlbWl0dGVyOiBFdmVudEVtaXR0ZXI8TG90dGllRXZlbnQ+ID0gZ2V0RXZlbnRFbWl0dGVyRnJvbURpcmVjdGl2ZUluc3RhbmNlKGluc3RhbmNlLCBuYW1lKTtcbiAgICBjb25zdCBsaXN0ZW5lciA9IChldmVudDogTG90dGllRXZlbnQpOiB2b2lkID0+IGVtaXR0ZXIuZW1pdChldmVudCk7XG5cbiAgICB0aGlzLmFuaW1hdGlvbkl0ZW0hLmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgbGlzdGVuZXIpO1xuXG4gICAgLy8gV2UgZG9uJ3QgaGF2ZSB0byBzYXZlIGBkZXN0cm95YCBsaXN0ZW5lciwgYmVjYXVzZSBgQW5pbWF0aW9uSXRlbWBcbiAgICAvLyBpcyBhYmxlIHRvIHJlbW92ZSBgZGVzdHJveWAgZXZlbnQgbGlzdGVuZXIgaXRzZWxmXG4gICAgaWYgKG5hbWUgIT09ICdkZXN0cm95Jykge1xuICAgICAgdGhpcy5saXN0ZW5lcnMuc2V0KG5hbWUsIGxpc3RlbmVyKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGRpc3Bvc2UoKTogdm9pZCB7XG4gICAgaWYgKGlzUGxhdGZvcm1TZXJ2ZXIodGhpcy5wbGF0Zm9ybUlkKSB8fCB0aGlzLmFuaW1hdGlvbkl0ZW0gPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IFtuYW1lLCBjYWxsYmFja10gb2YgdGhpcy5saXN0ZW5lcnMuZW50cmllcygpKSB7XG4gICAgICB0aGlzLmFuaW1hdGlvbkl0ZW0hLnJlbW92ZUV2ZW50TGlzdGVuZXIobmFtZSwgY2FsbGJhY2spO1xuICAgIH1cblxuICAgIC8vIFJlbGVhc2UgbGlzdGVuZXJzIGFzIHdlIGRvbid0IG5lZWQgdGhlbVxuICAgIHRoaXMubGlzdGVuZXJzLmNsZWFyKCk7XG5cbiAgICAvLyBXZSBjYW5ub3QgY2FsbCBgZGVzdHJveWAgYmVmb3JlIHJlbW92aW5nIGV2ZW50IGxpc3RlbmVyc1xuICAgIC8vIGFzIGFmdGVyIGNhbGxpbmcgYGRlc3Ryb3lgIC0gYHJlbW92ZUV2ZW50TGlzdGVuZXJgIGJlY29tZXMgdW5hdmFpbGFibGVcbiAgICB0aGlzLmFuaW1hdGlvbkl0ZW0hLmRlc3Ryb3koKTtcbiAgICB0aGlzLmFuaW1hdGlvbkl0ZW0gPSBudWxsO1xuICB9XG59XG4iXX0=