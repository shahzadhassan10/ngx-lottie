export interface LottieOptions {
  animationData?: any;
  container?: HTMLElement;
  renderer?: 'svg' | 'canvas' | 'html';
  autoloadSegments?: boolean;
  loop?: boolean | number;
  autoplay?: boolean;
  name?: string;
  path?: string;
  rendererSettings?: {
    context?: CanvasRenderingContext2D;
    scaleMode?: string;
    viewBoxOnly?: boolean;
    viewBoxSize?: boolean;
    clearCanvas?: boolean;
    progressiveLoad?: boolean;
    hideOnTransparent?: boolean;
    preserveAspectRatio?: string;
    imagePreserveAspectRatio?: string;
    className?: string;
  };
}
export interface Lottie {
  play(name?: string): void;
  stop(name?: string): void;
  setSpeed(speed: number, name?: string): void;
  setDirection(direction: number, name?: string): void;
  setQuality(quality: 'high' | 'medium' | 'low' | number): void;
  loadAnimation(params: LottieOptions): AnimationItem;
  registerAnimation(element: any, animationData?: any): AnimationItem;
  searchAnimations(animationData?: any, standalone?: boolean, renderer?: string): void;
  destroy(name?: string): void;
}
export interface AnimationItem {
  animType: string;
  animationData: any;
  animationID: string;
  assets: any[];
  assetsPath: string | undefined;
  autoloadSegments: boolean;
  autoplay: boolean;
  currentFrame: number;
  currentRawFrame: number;
  fileName: string | undefined;
  firstFrame: number;
  frameModifier: number;
  frameMult: number;
  frameRate: number;
  isLoaded: boolean;
  isPaused: boolean;
  loop: boolean;
  name: string;
  path: string;
  playCount: number;
  playDirection: number;
  playSpeed: number;
  renderer: any | null;
  segmentPos: number;
  segments: any[];
  subframeEnabled: boolean;
  timeCompleted: number;
  totalFrames: number;
  wrapper: HTMLElement | HTMLCanvasElement;
  _cbs: ((event?: LottieEvent) => void)[];
  _completedLoop: boolean;
  _idle: boolean;
  play(): void;
  stop(): void;
  pause(): void;
  setSpeed(speed: number): void;
  setSubframe(flag: boolean): void;
  goToAndPlay(value: number, isFrame: boolean): void;
  goToAndStop(value: number, isFrame: boolean): void;
  playSegments(segments: number[] | number[][], forceFlag: boolean): void;
  destroy(): void;
  getDuration(inFrames: boolean): number;
  addEventListener(name: LottieEventName, callback: (event: LottieEvent) => void): void;
  removeEventListener(name: LottieEventName, callback: (event: LottieEvent) => void): void;
  hide(): void;
  resize(): void;
  show(): void;
  setDirection(direction: Direction): void;
  configAnimation(animationData: any): void;
  getAssetsPath(assetData: any): string;
  getAssetData(id: number): any | undefined;
  loadSegments(): void;
  loadNextSegment(): void;
  preloadImages(): void;
  togglePause(): void;
  renderFrame(): void;
  setCurrentRawFrameValue(value: number): void;
}
export declare type Direction = 1 | -1;
export interface BMEnterFrameEvent {
  currentTime: number;
  duration: number;
  totalTime: number;
  type: 'enterFrame';
}
export interface BMCompleteLoopEvent {
  type: 'loopComplete';
  loop: number;
  playCount: number;
  frameMult: number;
}
export interface BMCompleteEvent {
  type: 'complete';
  duration: number;
}
export interface BMSegmentStartEvent {
  type: 'segmentStart';
  firstFrame: number;
  totalFrames: number;
}
export interface BMDestroyEvent {
  target: AnimationItem;
  type: 'destroy';
}
export declare type LottieEvent =
  | BMEnterFrameEvent
  | BMCompleteLoopEvent
  | BMCompleteEvent
  | BMSegmentStartEvent
  | BMDestroyEvent
  | void;
export declare type LottieEventName =
  | 'complete'
  | 'loopComplete'
  | 'enterFrame'
  | 'segmentStart'
  | 'config_ready'
  | 'data_ready'
  | 'data_failed'
  | 'loaded_images'
  | 'DOMLoaded'
  | 'destroy';
export declare type MappedLottieEventName =
  | 'complete'
  | 'loopComplete'
  | 'enterFrame'
  | 'segmentStart'
  | 'configReady'
  | 'dataReady'
  | 'dataFailed'
  | 'loadedImages'
  | 'domLoaded'
  | 'destroy';
export declare type LottieCSSStyleDeclaration = Partial<CSSStyleDeclaration>;
export declare type LottieContainerClass =
  | string
  | string[]
  | Set<string>
  | {
      [klass: string]: any;
    }
  | null;
export declare type AnimationFilename = string;
