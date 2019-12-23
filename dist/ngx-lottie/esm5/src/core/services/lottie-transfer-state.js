/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { transformAnimationFilenameToKey } from '../../utils';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
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
    /** @nocollapse */ LottieTransferState.ngInjectableDef = i0.defineInjectable({ factory: function LottieTransferState_Factory() { return new LottieTransferState(i0.inject(i1.TransferState)); }, token: LottieTransferState, providedIn: "root" });
    return LottieTransferState;
}());
export { LottieTransferState };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LottieTransferState.prototype.state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG90dGllLXRyYW5zZmVyLXN0YXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWxvdHRpZS8iLCJzb3VyY2VzIjpbInNyYy9jb3JlL3NlcnZpY2VzL2xvdHRpZS10cmFuc2Zlci1zdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBR3hFLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7O0FBRTlEO0lBRUUsNkJBQW9CLEtBQW9CO1FBQXBCLFVBQUssR0FBTCxLQUFLLENBQWU7SUFBRyxDQUFDOzs7Ozs7SUFFckMsaUNBQUc7Ozs7O0lBQVYsVUFBYyxTQUE0QjtRQUN4QyxTQUFTLEdBQUcsK0JBQStCLENBQUMsU0FBUyxDQUFDLENBQUM7O1lBQ2pELEdBQUcsR0FBRyxZQUFZLENBQUksU0FBUyxDQUFDO1FBQ3RDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7O2dCQVJGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7Z0JBTHpCLGFBQWE7Ozs4QkFEdEI7Q0FlQyxBQVRELElBU0M7U0FSWSxtQkFBbUI7Ozs7OztJQUNsQixvQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUcmFuc2ZlclN0YXRlLCBtYWtlU3RhdGVLZXkgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuaW1wb3J0IHsgQW5pbWF0aW9uRmlsZW5hbWUgfSBmcm9tICcuLi8uLi9zeW1ib2xzJztcbmltcG9ydCB7IHRyYW5zZm9ybUFuaW1hdGlvbkZpbGVuYW1lVG9LZXkgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgTG90dGllVHJhbnNmZXJTdGF0ZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RhdGU6IFRyYW5zZmVyU3RhdGUpIHt9XG5cbiAgcHVibGljIGdldDxUPihhbmltYXRpb246IEFuaW1hdGlvbkZpbGVuYW1lKTogVCB8IG51bGwge1xuICAgIGFuaW1hdGlvbiA9IHRyYW5zZm9ybUFuaW1hdGlvbkZpbGVuYW1lVG9LZXkoYW5pbWF0aW9uKTtcbiAgICBjb25zdCBrZXkgPSBtYWtlU3RhdGVLZXk8VD4oYW5pbWF0aW9uKTtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5nZXQoa2V5LCBudWxsKTtcbiAgfVxufVxuIl19