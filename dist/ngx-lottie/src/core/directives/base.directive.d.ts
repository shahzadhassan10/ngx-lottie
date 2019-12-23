import { EventEmitter, NgZone, ChangeDetectorRef } from '@angular/core';
import { LottieEventsService } from '../services/lottie-events.service';
import {
  LottieOptions,
  LottieCSSStyleDeclaration,
  AnimationItem,
  BMCompleteEvent,
  BMCompleteLoopEvent,
  BMEnterFrameEvent,
  BMSegmentStartEvent,
  BMDestroyEvent,
  LottieContainerClass
} from '../../symbols';
export declare class BaseDirective {
  options: LottieOptions | null;
  containerClass: LottieContainerClass;
  styles: LottieCSSStyleDeclaration | null;
  width: string;
  height: string;
  detach: boolean;
  /**
   * `animationCreated` is dispatched after calling `loadAnimation`
   */
  readonly animationCreated: EventEmitter<AnimationItem>;
  /**
   * `complete` is dispatched after completing the last frame
   */
  readonly complete: EventEmitter<BMCompleteEvent>;
  /**
   * `loopComplete` is dispatched after completing frame loop
   */
  readonly loopComplete: EventEmitter<BMCompleteLoopEvent>;
  /**
   * `enterFrame` is dispatched after entering the new frame
   */
  readonly enterFrame: EventEmitter<BMEnterFrameEvent>;
  /**
   * `segmentStart` is dispatched when the new segment is adjusted
   */
  readonly segmentStart: EventEmitter<BMSegmentStartEvent>;
  /**
   * Original event name is `config_ready`. `config_ready` is dispatched
   * after the needed renderer is configured
   */
  readonly configReady: EventEmitter<void>;
  /**
   * Original event name is `data_ready`. `data_ready` is dispatched
   * when all parts of the animation have been loaded
   */
  readonly dataReady: EventEmitter<void>;
  /**
   * Original event name is `data_failed`. `data_failed` can be dispatched
   * if the `XMLHttpRequest`, that tried to load animation data using
   * provided `path`, has errored
   */
  readonly dataFailed: EventEmitter<void>;
  /**
   * Original event name is `loaded_images`. `loaded_images` can be
   * dispatched after all assets are preloaded
   */
  readonly loadedImages: EventEmitter<void>;
  /**
   * Original event name is `DOMLoaded`. `DOMLoaded` is dispatched
   * when elements have been added to the DOM
   */
  readonly domLoaded: EventEmitter<void>;
  /**
   * `destroy` will be dispatched in the `ngOnDestroy` hook of the service,
   * it's useful for releasing resources
   */
  readonly destroy: EventEmitter<BMDestroyEvent>;
  protected loadAnimation(
    ref: ChangeDetectorRef,
    zone: NgZone,
    platformId: string,
    lottieEventsService: LottieEventsService,
    container: HTMLElement | HTMLCanvasElement,
    instance: BaseDirective
  ): Promise<void>;
}
