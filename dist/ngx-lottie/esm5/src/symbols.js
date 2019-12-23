/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function LottieOptions() { }
if (false) {
    /** @type {?|undefined} */
    LottieOptions.prototype.animationData;
    /** @type {?|undefined} */
    LottieOptions.prototype.container;
    /** @type {?|undefined} */
    LottieOptions.prototype.renderer;
    /** @type {?|undefined} */
    LottieOptions.prototype.autoloadSegments;
    /** @type {?|undefined} */
    LottieOptions.prototype.loop;
    /** @type {?|undefined} */
    LottieOptions.prototype.autoplay;
    /** @type {?|undefined} */
    LottieOptions.prototype.name;
    /** @type {?|undefined} */
    LottieOptions.prototype.path;
    /** @type {?|undefined} */
    LottieOptions.prototype.rendererSettings;
}
/**
 * @record
 */
export function Lottie() { }
if (false) {
    /**
     * @param {?=} name
     * @return {?}
     */
    Lottie.prototype.play = function (name) { };
    /**
     * @param {?=} name
     * @return {?}
     */
    Lottie.prototype.stop = function (name) { };
    /**
     * @param {?} speed
     * @param {?=} name
     * @return {?}
     */
    Lottie.prototype.setSpeed = function (speed, name) { };
    /**
     * @param {?} direction
     * @param {?=} name
     * @return {?}
     */
    Lottie.prototype.setDirection = function (direction, name) { };
    /**
     * @param {?} quality
     * @return {?}
     */
    Lottie.prototype.setQuality = function (quality) { };
    /**
     * @param {?} params
     * @return {?}
     */
    Lottie.prototype.loadAnimation = function (params) { };
    /**
     * @param {?} element
     * @param {?=} animationData
     * @return {?}
     */
    Lottie.prototype.registerAnimation = function (element, animationData) { };
    /**
     * @param {?=} animationData
     * @param {?=} standalone
     * @param {?=} renderer
     * @return {?}
     */
    Lottie.prototype.searchAnimations = function (animationData, standalone, renderer) { };
    /**
     * @param {?=} name
     * @return {?}
     */
    Lottie.prototype.destroy = function (name) { };
}
/**
 * @record
 */
export function AnimationItem() { }
if (false) {
    /** @type {?} */
    AnimationItem.prototype.animType;
    /** @type {?} */
    AnimationItem.prototype.animationData;
    /** @type {?} */
    AnimationItem.prototype.animationID;
    /** @type {?} */
    AnimationItem.prototype.assets;
    /** @type {?} */
    AnimationItem.prototype.assetsPath;
    /** @type {?} */
    AnimationItem.prototype.autoloadSegments;
    /** @type {?} */
    AnimationItem.prototype.autoplay;
    /** @type {?} */
    AnimationItem.prototype.currentFrame;
    /** @type {?} */
    AnimationItem.prototype.currentRawFrame;
    /** @type {?} */
    AnimationItem.prototype.fileName;
    /** @type {?} */
    AnimationItem.prototype.firstFrame;
    /** @type {?} */
    AnimationItem.prototype.frameModifier;
    /** @type {?} */
    AnimationItem.prototype.frameMult;
    /** @type {?} */
    AnimationItem.prototype.frameRate;
    /** @type {?} */
    AnimationItem.prototype.isLoaded;
    /** @type {?} */
    AnimationItem.prototype.isPaused;
    /** @type {?} */
    AnimationItem.prototype.loop;
    /** @type {?} */
    AnimationItem.prototype.name;
    /** @type {?} */
    AnimationItem.prototype.path;
    /** @type {?} */
    AnimationItem.prototype.playCount;
    /** @type {?} */
    AnimationItem.prototype.playDirection;
    /** @type {?} */
    AnimationItem.prototype.playSpeed;
    /** @type {?} */
    AnimationItem.prototype.renderer;
    /** @type {?} */
    AnimationItem.prototype.segmentPos;
    /** @type {?} */
    AnimationItem.prototype.segments;
    /** @type {?} */
    AnimationItem.prototype.subframeEnabled;
    /** @type {?} */
    AnimationItem.prototype.timeCompleted;
    /** @type {?} */
    AnimationItem.prototype.totalFrames;
    /** @type {?} */
    AnimationItem.prototype.wrapper;
    /** @type {?} */
    AnimationItem.prototype._cbs;
    /** @type {?} */
    AnimationItem.prototype._completedLoop;
    /** @type {?} */
    AnimationItem.prototype._idle;
    /**
     * @return {?}
     */
    AnimationItem.prototype.play = function () { };
    /**
     * @return {?}
     */
    AnimationItem.prototype.stop = function () { };
    /**
     * @return {?}
     */
    AnimationItem.prototype.pause = function () { };
    /**
     * @param {?} speed
     * @return {?}
     */
    AnimationItem.prototype.setSpeed = function (speed) { };
    /**
     * @param {?} flag
     * @return {?}
     */
    AnimationItem.prototype.setSubframe = function (flag) { };
    /**
     * @param {?} value
     * @param {?} isFrame
     * @return {?}
     */
    AnimationItem.prototype.goToAndPlay = function (value, isFrame) { };
    /**
     * @param {?} value
     * @param {?} isFrame
     * @return {?}
     */
    AnimationItem.prototype.goToAndStop = function (value, isFrame) { };
    /**
     * @param {?} segments
     * @param {?} forceFlag
     * @return {?}
     */
    AnimationItem.prototype.playSegments = function (segments, forceFlag) { };
    /**
     * @return {?}
     */
    AnimationItem.prototype.destroy = function () { };
    /**
     * @param {?} inFrames
     * @return {?}
     */
    AnimationItem.prototype.getDuration = function (inFrames) { };
    /**
     * @param {?} name
     * @param {?} callback
     * @return {?}
     */
    AnimationItem.prototype.addEventListener = function (name, callback) { };
    /**
     * @param {?} name
     * @param {?} callback
     * @return {?}
     */
    AnimationItem.prototype.removeEventListener = function (name, callback) { };
    /**
     * @return {?}
     */
    AnimationItem.prototype.hide = function () { };
    /**
     * @return {?}
     */
    AnimationItem.prototype.resize = function () { };
    /**
     * @return {?}
     */
    AnimationItem.prototype.show = function () { };
    /**
     * @param {?} direction
     * @return {?}
     */
    AnimationItem.prototype.setDirection = function (direction) { };
    /**
     * @param {?} animationData
     * @return {?}
     */
    AnimationItem.prototype.configAnimation = function (animationData) { };
    /**
     * @param {?} assetData
     * @return {?}
     */
    AnimationItem.prototype.getAssetsPath = function (assetData) { };
    /**
     * @param {?} id
     * @return {?}
     */
    AnimationItem.prototype.getAssetData = function (id) { };
    /**
     * @return {?}
     */
    AnimationItem.prototype.loadSegments = function () { };
    /**
     * @return {?}
     */
    AnimationItem.prototype.loadNextSegment = function () { };
    /**
     * @return {?}
     */
    AnimationItem.prototype.preloadImages = function () { };
    /**
     * @return {?}
     */
    AnimationItem.prototype.togglePause = function () { };
    /**
     * @return {?}
     */
    AnimationItem.prototype.renderFrame = function () { };
    /**
     * @param {?} value
     * @return {?}
     */
    AnimationItem.prototype.setCurrentRawFrameValue = function (value) { };
}
/**
 * @record
 */
export function BMEnterFrameEvent() { }
if (false) {
    /** @type {?} */
    BMEnterFrameEvent.prototype.currentTime;
    /** @type {?} */
    BMEnterFrameEvent.prototype.duration;
    /** @type {?} */
    BMEnterFrameEvent.prototype.totalTime;
    /** @type {?} */
    BMEnterFrameEvent.prototype.type;
}
/**
 * @record
 */
export function BMCompleteLoopEvent() { }
if (false) {
    /** @type {?} */
    BMCompleteLoopEvent.prototype.type;
    /** @type {?} */
    BMCompleteLoopEvent.prototype.loop;
    /** @type {?} */
    BMCompleteLoopEvent.prototype.playCount;
    /** @type {?} */
    BMCompleteLoopEvent.prototype.frameMult;
}
/**
 * @record
 */
export function BMCompleteEvent() { }
if (false) {
    /** @type {?} */
    BMCompleteEvent.prototype.type;
    /** @type {?} */
    BMCompleteEvent.prototype.duration;
}
/**
 * @record
 */
export function BMSegmentStartEvent() { }
if (false) {
    /** @type {?} */
    BMSegmentStartEvent.prototype.type;
    /** @type {?} */
    BMSegmentStartEvent.prototype.firstFrame;
    /** @type {?} */
    BMSegmentStartEvent.prototype.totalFrames;
}
/**
 * @record
 */
export function BMDestroyEvent() { }
if (false) {
    /** @type {?} */
    BMDestroyEvent.prototype.target;
    /** @type {?} */
    BMDestroyEvent.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ltYm9scy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1sb3R0aWUvIiwic291cmNlcyI6WyJzcmMvc3ltYm9scy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsbUNBcUJDOzs7SUFwQkMsc0NBQW9COztJQUNwQixrQ0FBd0I7O0lBQ3hCLGlDQUFxQzs7SUFDckMseUNBQTJCOztJQUMzQiw2QkFBd0I7O0lBQ3hCLGlDQUFtQjs7SUFDbkIsNkJBQWM7O0lBQ2QsNkJBQWM7O0lBQ2QseUNBV0U7Ozs7O0FBR0osNEJBdUJDOzs7Ozs7SUFyQkMsNENBQTBCOzs7OztJQUUxQiw0Q0FBMEI7Ozs7OztJQUcxQix1REFBNkM7Ozs7OztJQUc3QywrREFBcUQ7Ozs7O0lBR3JELHFEQUE4RDs7Ozs7SUFFOUQsdURBQW9EOzs7Ozs7SUFHcEQsMkVBQW9FOzs7Ozs7O0lBRXBFLHVGQUFxRjs7Ozs7SUFFckYsK0NBQTZCOzs7OztBQUcvQixtQ0E0RUM7OztJQTNFQyxpQ0FBaUI7O0lBQ2pCLHNDQUFtQjs7SUFDbkIsb0NBQW9COztJQUNwQiwrQkFBYzs7SUFDZCxtQ0FBK0I7O0lBQy9CLHlDQUEwQjs7SUFDMUIsaUNBQWtCOztJQUNsQixxQ0FBcUI7O0lBQ3JCLHdDQUF3Qjs7SUFDeEIsaUNBQTZCOztJQUM3QixtQ0FBbUI7O0lBQ25CLHNDQUFzQjs7SUFDdEIsa0NBQWtCOztJQUNsQixrQ0FBa0I7O0lBQ2xCLGlDQUFrQjs7SUFDbEIsaUNBQWtCOztJQUNsQiw2QkFBYzs7SUFDZCw2QkFBYTs7SUFDYiw2QkFBYTs7SUFDYixrQ0FBa0I7O0lBQ2xCLHNDQUFzQjs7SUFDdEIsa0NBQWtCOztJQUNsQixpQ0FBcUI7O0lBQ3JCLG1DQUFtQjs7SUFDbkIsaUNBQWdCOztJQUNoQix3Q0FBeUI7O0lBQ3pCLHNDQUFzQjs7SUFDdEIsb0NBQW9COztJQUNwQixnQ0FBeUM7O0lBQ3pDLDZCQUF3Qzs7SUFDeEMsdUNBQXdCOztJQUN4Qiw4QkFBZTs7OztJQUNmLCtDQUFhOzs7O0lBQ2IsK0NBQWE7Ozs7SUFDYixnREFBYzs7Ozs7SUFFZCx3REFBOEI7Ozs7O0lBRzlCLDBEQUFpQzs7Ozs7O0lBR2pDLG9FQUFtRDs7Ozs7O0lBR25ELG9FQUFtRDs7Ozs7O0lBR25ELDBFQUF3RTs7OztJQUV4RSxrREFBZ0I7Ozs7O0lBRWhCLDhEQUF1Qzs7Ozs7O0lBRXZDLHlFQUFzRjs7Ozs7O0lBRXRGLDRFQUF5Rjs7OztJQUV6RiwrQ0FBYTs7OztJQUViLGlEQUFlOzs7O0lBRWYsK0NBQWE7Ozs7O0lBRWIsZ0VBQXlDOzs7OztJQUV6Qyx1RUFBMEM7Ozs7O0lBQzFDLGlFQUFzQzs7Ozs7SUFDdEMseURBQTBDOzs7O0lBQzFDLHVEQUFxQjs7OztJQUNyQiwwREFBd0I7Ozs7SUFDeEIsd0RBQXNCOzs7O0lBQ3RCLHNEQUFvQjs7OztJQUNwQixzREFBb0I7Ozs7O0lBQ3BCLHVFQUE2Qzs7Ozs7QUFLL0MsdUNBS0M7OztJQUpDLHdDQUFvQjs7SUFDcEIscUNBQWlCOztJQUNqQixzQ0FBa0I7O0lBQ2xCLGlDQUFtQjs7Ozs7QUFHckIseUNBS0M7OztJQUpDLG1DQUFxQjs7SUFDckIsbUNBQWE7O0lBQ2Isd0NBQWtCOztJQUNsQix3Q0FBa0I7Ozs7O0FBR3BCLHFDQUdDOzs7SUFGQywrQkFBaUI7O0lBQ2pCLG1DQUFpQjs7Ozs7QUFHbkIseUNBSUM7OztJQUhDLG1DQUFxQjs7SUFDckIseUNBQW1COztJQUNuQiwwQ0FBb0I7Ozs7O0FBR3RCLG9DQUdDOzs7SUFGQyxnQ0FBc0I7O0lBQ3RCLDhCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgTG90dGllT3B0aW9ucyB7XG4gIGFuaW1hdGlvbkRhdGE/OiBhbnk7XG4gIGNvbnRhaW5lcj86IEhUTUxFbGVtZW50O1xuICByZW5kZXJlcj86ICdzdmcnIHwgJ2NhbnZhcycgfCAnaHRtbCc7XG4gIGF1dG9sb2FkU2VnbWVudHM/OiBib29sZWFuO1xuICBsb29wPzogYm9vbGVhbiB8IG51bWJlcjtcbiAgYXV0b3BsYXk/OiBib29sZWFuO1xuICBuYW1lPzogc3RyaW5nO1xuICBwYXRoPzogc3RyaW5nO1xuICByZW5kZXJlclNldHRpbmdzPzoge1xuICAgIGNvbnRleHQ/OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gICAgc2NhbGVNb2RlPzogc3RyaW5nO1xuICAgIHZpZXdCb3hPbmx5PzogYm9vbGVhbjtcbiAgICB2aWV3Qm94U2l6ZT86IGJvb2xlYW47XG4gICAgY2xlYXJDYW52YXM/OiBib29sZWFuO1xuICAgIHByb2dyZXNzaXZlTG9hZD86IGJvb2xlYW47XG4gICAgaGlkZU9uVHJhbnNwYXJlbnQ/OiBib29sZWFuO1xuICAgIHByZXNlcnZlQXNwZWN0UmF0aW8/OiBzdHJpbmc7XG4gICAgaW1hZ2VQcmVzZXJ2ZUFzcGVjdFJhdGlvPzogc3RyaW5nO1xuICAgIGNsYXNzTmFtZT86IHN0cmluZztcbiAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb3R0aWUge1xuICAvLyB3aXRoIDEgb3B0aW9uYWwgcGFyYW1ldGVyIG5hbWUgdG8gdGFyZ2V0IGEgc3BlY2lmaWMgYW5pbWF0aW9uXG4gIHBsYXkobmFtZT86IHN0cmluZyk6IHZvaWQ7XG4gIC8vIHdpdGggMSBvcHRpb25hbCBwYXJhbWV0ZXIgbmFtZSB0byB0YXJnZXQgYSBzcGVjaWZpYyBhbmltYXRpb25cbiAgc3RvcChuYW1lPzogc3RyaW5nKTogdm9pZDtcbiAgLy8gZmlyc3QgYXJndW1lbnQgc3BlZWQgKDEgaXMgbm9ybWFsIHNwZWVkKSAtIHdpdGggMSBvcHRpb25hbCBwYXJhbWV0ZXIgbmFtZVxuICAvLyB0byB0YXJnZXQgYSBzcGVjaWZpYyBhbmltYXRpb25cbiAgc2V0U3BlZWQoc3BlZWQ6IG51bWJlciwgbmFtZT86IHN0cmluZyk6IHZvaWQ7XG4gIC8vIGZpcnN0IGFyZ3VtZW50IGRpcmVjdGlvbiAoMSBpcyBub3JtYWwgZGlyZWN0aW9uLikgLSB3aXRoIDEgb3B0aW9uYWwgcGFyYW1ldGVyIG5hbWVcbiAgLy8gdG8gdGFyZ2V0IGEgc3BlY2lmaWMgYW5pbWF0aW9uXG4gIHNldERpcmVjdGlvbihkaXJlY3Rpb246IG51bWJlciwgbmFtZT86IHN0cmluZyk6IHZvaWQ7XG4gIC8vIGRlZmF1bHQgJ2hpZ2gnLCBzZXQgJ2hpZ2gnLCdtZWRpdW0nLCdsb3cnLCBvciBhIG51bWJlciA+IDEgdG8gaW1wcm92ZSBwbGF5ZXIgcGVyZm9ybWFuY2UuXG4gIC8vIEluIHNvbWUgYW5pbWF0aW9ucyBhcyBsb3cgYXMgMiB3b24ndCBzaG93IGFueSBkaWZmZXJlbmNlXG4gIHNldFF1YWxpdHkocXVhbGl0eTogJ2hpZ2gnIHwgJ21lZGl1bScgfCAnbG93JyB8IG51bWJlcik6IHZvaWQ7XG4gIC8vIHJldHVybnMgYW4gYW5pbWF0aW9uIGluc3RhbmNlIHRvIGNvbnRyb2wgaW5kaXZpZHVhbGx5XG4gIGxvYWRBbmltYXRpb24ocGFyYW1zOiBMb3R0aWVPcHRpb25zKTogQW5pbWF0aW9uSXRlbTtcbiAgLy8geW91IGNhbiByZWdpc3RlciBhbiBlbGVtZW50IGRpcmVjdGx5IHdpdGggcmVnaXN0ZXJBbmltYXRpb24uXG4gIC8vIEl0IG11c3QgaGF2ZSB0aGUgXCJkYXRhLWFuaW1hdGlvbi1wYXRoXCIgYXR0cmlidXRlIHBvaW50aW5nIGF0IHRoZSBkYXRhLmpzb24gdXJsXG4gIHJlZ2lzdGVyQW5pbWF0aW9uKGVsZW1lbnQ6IGFueSwgYW5pbWF0aW9uRGF0YT86IGFueSk6IEFuaW1hdGlvbkl0ZW07XG4gIC8vIGxvb2tzIGZvciBlbGVtZW50cyB3aXRoIGNsYXNzIFwibG90dGllXCIgb3IgXCJib2R5bW92aW5cIlxuICBzZWFyY2hBbmltYXRpb25zKGFuaW1hdGlvbkRhdGE/OiBhbnksIHN0YW5kYWxvbmU/OiBib29sZWFuLCByZW5kZXJlcj86IHN0cmluZyk6IHZvaWQ7XG4gIC8vIHRvIGRlc3Ryb3kgYW5kIHJlbGVhc2UgcmVzb3VyY2VzLiBUaGUgRE9NIGVsZW1lbnQgd2lsbCBiZSBlbXB0aWVkXG4gIGRlc3Ryb3kobmFtZT86IHN0cmluZyk6IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQW5pbWF0aW9uSXRlbSB7XG4gIGFuaW1UeXBlOiBzdHJpbmc7XG4gIGFuaW1hdGlvbkRhdGE6IGFueTtcbiAgYW5pbWF0aW9uSUQ6IHN0cmluZztcbiAgYXNzZXRzOiBhbnlbXTtcbiAgYXNzZXRzUGF0aDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBhdXRvbG9hZFNlZ21lbnRzOiBib29sZWFuO1xuICBhdXRvcGxheTogYm9vbGVhbjtcbiAgY3VycmVudEZyYW1lOiBudW1iZXI7XG4gIGN1cnJlbnRSYXdGcmFtZTogbnVtYmVyO1xuICBmaWxlTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBmaXJzdEZyYW1lOiBudW1iZXI7XG4gIGZyYW1lTW9kaWZpZXI6IG51bWJlcjtcbiAgZnJhbWVNdWx0OiBudW1iZXI7XG4gIGZyYW1lUmF0ZTogbnVtYmVyO1xuICBpc0xvYWRlZDogYm9vbGVhbjtcbiAgaXNQYXVzZWQ6IGJvb2xlYW47XG4gIGxvb3A6IGJvb2xlYW47XG4gIG5hbWU6IHN0cmluZztcbiAgcGF0aDogc3RyaW5nO1xuICBwbGF5Q291bnQ6IG51bWJlcjtcbiAgcGxheURpcmVjdGlvbjogbnVtYmVyO1xuICBwbGF5U3BlZWQ6IG51bWJlcjtcbiAgcmVuZGVyZXI6IGFueSB8IG51bGw7XG4gIHNlZ21lbnRQb3M6IG51bWJlcjtcbiAgc2VnbWVudHM6IGFueVtdO1xuICBzdWJmcmFtZUVuYWJsZWQ6IGJvb2xlYW47XG4gIHRpbWVDb21wbGV0ZWQ6IG51bWJlcjtcbiAgdG90YWxGcmFtZXM6IG51bWJlcjtcbiAgd3JhcHBlcjogSFRNTEVsZW1lbnQgfCBIVE1MQ2FudmFzRWxlbWVudDtcbiAgX2NiczogKChldmVudD86IExvdHRpZUV2ZW50KSA9PiB2b2lkKVtdO1xuICBfY29tcGxldGVkTG9vcDogYm9vbGVhbjtcbiAgX2lkbGU6IGJvb2xlYW47XG4gIHBsYXkoKTogdm9pZDtcbiAgc3RvcCgpOiB2b2lkO1xuICBwYXVzZSgpOiB2b2lkO1xuICAvLyBvbmUgcGFyYW0gc3BlZWQgKDEgaXMgbm9ybWFsIHNwZWVkKVxuICBzZXRTcGVlZChzcGVlZDogbnVtYmVyKTogdm9pZDtcbiAgLy8gaWYgZmFsc2UsIGl0IHdpbGwgcmVzcGVjdCB0aGUgb3JpZ2luYWwgQUUgZnBzLiBJZiB0cnVlLCBpdCB3aWxsIHVwZGF0ZSBhcyBtdWNoIGFzIHBvc3NpYmxlXG4gIC8vICh0cnVlIGJ5IGRlZmF1bHQpXG4gIHNldFN1YmZyYW1lKGZsYWc6IGJvb2xlYW4pOiB2b2lkO1xuICAvLyBmaXJzdCBwYXJhbSBpcyBhIG51bWVyaWMgdmFsdWUuIHNlY29uZCBwYXJhbSBpcyBhIGJvb2xlYW5cbiAgLy8gdGhhdCBkZWZpbmVzIHRpbWUgb3IgZnJhbWVzIGZvciBmaXJzdCBwYXJhbVxuICBnb1RvQW5kUGxheSh2YWx1ZTogbnVtYmVyLCBpc0ZyYW1lOiBib29sZWFuKTogdm9pZDtcbiAgLy8gZmlyc3QgcGFyYW0gaXMgYSBudW1lcmljIHZhbHVlLiBzZWNvbmQgcGFyYW0gaXMgYSBib29sZWFuXG4gIC8vIHRoYXQgZGVmaW5lcyB0aW1lIG9yIGZyYW1lcyBmb3IgZmlyc3QgcGFyYW1cbiAgZ29Ub0FuZFN0b3AodmFsdWU6IG51bWJlciwgaXNGcmFtZTogYm9vbGVhbik6IHZvaWQ7XG4gIC8vIGZpcnN0IHBhcmFtIGlzIGEgc2luZ2xlIGFycmF5IG9yIG11bHRpcGxlIGFycmF5cyBvZiB0d28gdmFsdWVzIGVhY2goZnJvbUZyYW1lLHRvRnJhbWUpXG4gIC8vIHNlY29uZCBwYXJhbSBpcyBhIGJvb2xlYW4gZm9yIGZvcmNpbmcgdGhlIG5ldyBzZWdtZW50IHJpZ2h0IGF3YXlcbiAgcGxheVNlZ21lbnRzKHNlZ21lbnRzOiBudW1iZXJbXSB8IG51bWJlcltdW10sIGZvcmNlRmxhZzogYm9vbGVhbik6IHZvaWQ7XG4gIC8vIHRvIGRlc3Ryb3kgYW5kIHJlbGVhc2UgcmVzb3VyY2VzXG4gIGRlc3Ryb3koKTogdm9pZDtcbiAgLy8gcmV0dXJucyBkdXJhdGlvbiBpbiBzZWNvbmRzIG9yIGluIGZyYW1lc1xuICBnZXREdXJhdGlvbihpbkZyYW1lczogYm9vbGVhbik6IG51bWJlcjtcbiAgLy8gbGlzdGVuIHRvIHRoZSBzcGVjaWZpYyBldmVudCBkaXNwYXRjaGVkIGJ5IGBBbmltYXRpb25JdGVtYFxuICBhZGRFdmVudExpc3RlbmVyKG5hbWU6IExvdHRpZUV2ZW50TmFtZSwgY2FsbGJhY2s6IChldmVudDogTG90dGllRXZlbnQpID0+IHZvaWQpOiB2b2lkO1xuICAvLyByZW1vdmUgc3BlY2lmaWMgZXZlbnQgbGlzdGVuZXJcbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcihuYW1lOiBMb3R0aWVFdmVudE5hbWUsIGNhbGxiYWNrOiAoZXZlbnQ6IExvdHRpZUV2ZW50KSA9PiB2b2lkKTogdm9pZDtcbiAgLy8gc2V0cyBgZGlzcGxheSA9IG5vbmVgIG9uIHRoZSByZW5kZXJlZCBlbGVtZW50XG4gIGhpZGUoKTogdm9pZDtcbiAgLy8gY2FuIGJlIHVzZWQgaWYgdGhlIGFuaW1hdGlvbiBpcyByZW5kZXJlZCBvbiB0aGUgY2FudmFzIGVsZW1lbnRcbiAgcmVzaXplKCk6IHZvaWQ7XG4gIC8vIHNldHMgYGRpc3BsYXkgPSBibG9ja2Agb24gdGhlIHJlbmRlcmVkIGVsZW1lbnRcbiAgc2hvdygpOiB2b2lkO1xuICAvLyBvbmUgcGFyYW0gZGlyZWN0aW9uICgxIGlzIG5vcm1hbCBkaXJlY3Rpb24pXG4gIHNldERpcmVjdGlvbihkaXJlY3Rpb246IERpcmVjdGlvbik6IHZvaWQ7XG4gIC8vIGNvbmZpZ3VyZXMgYW5pbWF0aW9uIHVzaW5nIHByb3ZpZGVkIG9wdGlvbnNcbiAgY29uZmlnQW5pbWF0aW9uKGFuaW1hdGlvbkRhdGE6IGFueSk6IHZvaWQ7XG4gIGdldEFzc2V0c1BhdGgoYXNzZXREYXRhOiBhbnkpOiBzdHJpbmc7XG4gIGdldEFzc2V0RGF0YShpZDogbnVtYmVyKTogYW55IHwgdW5kZWZpbmVkO1xuICBsb2FkU2VnbWVudHMoKTogdm9pZDtcbiAgbG9hZE5leHRTZWdtZW50KCk6IHZvaWQ7XG4gIHByZWxvYWRJbWFnZXMoKTogdm9pZDtcbiAgdG9nZ2xlUGF1c2UoKTogdm9pZDtcbiAgcmVuZGVyRnJhbWUoKTogdm9pZDtcbiAgc2V0Q3VycmVudFJhd0ZyYW1lVmFsdWUodmFsdWU6IG51bWJlcik6IHZvaWQ7XG59XG5cbmV4cG9ydCB0eXBlIERpcmVjdGlvbiA9IDEgfCAtMTtcblxuZXhwb3J0IGludGVyZmFjZSBCTUVudGVyRnJhbWVFdmVudCB7XG4gIGN1cnJlbnRUaW1lOiBudW1iZXI7XG4gIGR1cmF0aW9uOiBudW1iZXI7XG4gIHRvdGFsVGltZTogbnVtYmVyO1xuICB0eXBlOiAnZW50ZXJGcmFtZSc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQk1Db21wbGV0ZUxvb3BFdmVudCB7XG4gIHR5cGU6ICdsb29wQ29tcGxldGUnO1xuICBsb29wOiBudW1iZXI7XG4gIHBsYXlDb3VudDogbnVtYmVyO1xuICBmcmFtZU11bHQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCTUNvbXBsZXRlRXZlbnQge1xuICB0eXBlOiAnY29tcGxldGUnO1xuICBkdXJhdGlvbjogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJNU2VnbWVudFN0YXJ0RXZlbnQge1xuICB0eXBlOiAnc2VnbWVudFN0YXJ0JztcbiAgZmlyc3RGcmFtZTogbnVtYmVyO1xuICB0b3RhbEZyYW1lczogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJNRGVzdHJveUV2ZW50IHtcbiAgdGFyZ2V0OiBBbmltYXRpb25JdGVtO1xuICB0eXBlOiAnZGVzdHJveSc7XG59XG5cbmV4cG9ydCB0eXBlIExvdHRpZUV2ZW50ID1cbiAgfCBCTUVudGVyRnJhbWVFdmVudFxuICB8IEJNQ29tcGxldGVMb29wRXZlbnRcbiAgfCBCTUNvbXBsZXRlRXZlbnRcbiAgfCBCTVNlZ21lbnRTdGFydEV2ZW50XG4gIHwgQk1EZXN0cm95RXZlbnRcbiAgfCB2b2lkO1xuXG5leHBvcnQgdHlwZSBMb3R0aWVFdmVudE5hbWUgPVxuICB8ICdjb21wbGV0ZSdcbiAgfCAnbG9vcENvbXBsZXRlJ1xuICB8ICdlbnRlckZyYW1lJ1xuICB8ICdzZWdtZW50U3RhcnQnXG4gIHwgJ2NvbmZpZ19yZWFkeSdcbiAgfCAnZGF0YV9yZWFkeSdcbiAgfCAnZGF0YV9mYWlsZWQnXG4gIHwgJ2xvYWRlZF9pbWFnZXMnXG4gIHwgJ0RPTUxvYWRlZCdcbiAgfCAnZGVzdHJveSc7XG5cbmV4cG9ydCB0eXBlIE1hcHBlZExvdHRpZUV2ZW50TmFtZSA9XG4gIHwgJ2NvbXBsZXRlJ1xuICB8ICdsb29wQ29tcGxldGUnXG4gIHwgJ2VudGVyRnJhbWUnXG4gIHwgJ3NlZ21lbnRTdGFydCdcbiAgfCAnY29uZmlnUmVhZHknXG4gIHwgJ2RhdGFSZWFkeSdcbiAgfCAnZGF0YUZhaWxlZCdcbiAgfCAnbG9hZGVkSW1hZ2VzJ1xuICB8ICdkb21Mb2FkZWQnXG4gIHwgJ2Rlc3Ryb3knO1xuXG5leHBvcnQgdHlwZSBMb3R0aWVDU1NTdHlsZURlY2xhcmF0aW9uID0gUGFydGlhbDxDU1NTdHlsZURlY2xhcmF0aW9uPjtcblxuZXhwb3J0IHR5cGUgTG90dGllQ29udGFpbmVyQ2xhc3MgPVxuICB8IHN0cmluZ1xuICB8IHN0cmluZ1tdXG4gIHwgU2V0PHN0cmluZz5cbiAgfCB7IFtrbGFzczogc3RyaW5nXTogYW55IH1cbiAgfCBudWxsO1xuXG5leHBvcnQgdHlwZSBBbmltYXRpb25GaWxlbmFtZSA9IHN0cmluZztcbiJdfQ==