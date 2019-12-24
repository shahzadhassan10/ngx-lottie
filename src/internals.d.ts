import { NgZone, EventEmitter } from '@angular/core';
import { LottieOptions, LottieEventName, AnimationItem, LottieEvent } from './symbols';
import { BaseDirective } from './core/directives/base.directive';
export declare function loadAnimation(zone: NgZone, options: LottieOptions | null, container: HTMLElement): Promise<AnimationItem>;
export declare function getEventEmitterFromDirectiveInstance(instance: BaseDirective, name: LottieEventName): EventEmitter<LottieEvent>;
/**
 * Events that can be dispatched by `Animationitem`
 * @see https://github.com/airbnb/lottie-web#events
 */
export declare const lottieEvents: ReadonlyArray<LottieEventName>;
