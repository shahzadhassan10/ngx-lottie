/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { transformAnimationFilenameToKey } from '../../utils';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
export class LottieTransferState {
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
/** @nocollapse */ LottieTransferState.ngInjectableDef = i0.defineInjectable({ factory: function LottieTransferState_Factory() { return new LottieTransferState(i0.inject(i1.TransferState)); }, token: LottieTransferState, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    LottieTransferState.prototype.state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG90dGllLXRyYW5zZmVyLXN0YXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWxvdHRpZS8iLCJzb3VyY2VzIjpbInNyYy9jb3JlL3NlcnZpY2VzL2xvdHRpZS10cmFuc2Zlci1zdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBR3hFLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7O0FBRzlELE1BQU0sT0FBTyxtQkFBbUI7Ozs7SUFDOUIsWUFBb0IsS0FBb0I7UUFBcEIsVUFBSyxHQUFMLEtBQUssQ0FBZTtJQUFHLENBQUM7Ozs7OztJQUVyQyxHQUFHLENBQUksU0FBNEI7UUFDeEMsU0FBUyxHQUFHLCtCQUErQixDQUFDLFNBQVMsQ0FBQyxDQUFDOztjQUNqRCxHQUFHLEdBQUcsWUFBWSxDQUFJLFNBQVMsQ0FBQztRQUN0QyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7WUFSRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O1lBTHpCLGFBQWE7Ozs7Ozs7O0lBT1Isb0NBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJhbnNmZXJTdGF0ZSwgbWFrZVN0YXRlS2V5IH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbmltcG9ydCB7IEFuaW1hdGlvbkZpbGVuYW1lIH0gZnJvbSAnLi4vLi4vc3ltYm9scyc7XG5pbXBvcnQgeyB0cmFuc2Zvcm1BbmltYXRpb25GaWxlbmFtZVRvS2V5IH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIExvdHRpZVRyYW5zZmVyU3RhdGUge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0YXRlOiBUcmFuc2ZlclN0YXRlKSB7fVxuXG4gIHB1YmxpYyBnZXQ8VD4oYW5pbWF0aW9uOiBBbmltYXRpb25GaWxlbmFtZSk6IFQgfCBudWxsIHtcbiAgICBhbmltYXRpb24gPSB0cmFuc2Zvcm1BbmltYXRpb25GaWxlbmFtZVRvS2V5KGFuaW1hdGlvbik7XG4gICAgY29uc3Qga2V5ID0gbWFrZVN0YXRlS2V5PFQ+KGFuaW1hdGlvbik7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuZ2V0KGtleSwgbnVsbCk7XG4gIH1cbn1cbiJdfQ==