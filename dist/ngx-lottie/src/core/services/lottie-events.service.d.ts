import { OnDestroy, NgZone, EventEmitter } from '@angular/core';
import { AnimationItem } from '../../symbols';
import { BaseDirective } from '../directives/base.directive';
export declare class LottieEventsService implements OnDestroy {
  private readonly zone;
  private readonly platformId;
  private animationItem;
  /**
   * Save listeners so we're able to remove them from `AnimationItem`
   * by references in the future when this service is destroyed
   */
  private readonly listeners;
  constructor(zone: NgZone, platformId: string);
  ngOnDestroy(): void;
  /**
   * This method is invoked after calling `loadAnimation` and dispatches the new one
   * created `AnimationItem` instance
   */
  animationCreated(
    animationItem: AnimationItem,
    animationCreated: EventEmitter<AnimationItem>
  ): void;
  setAnimationItemAndLottieEventListeners(
    animationItem: AnimationItem,
    instance: BaseDirective
  ): void;
  private setupLottieEventListeners;
  private setupLottieEventListener;
  private dispose;
}
