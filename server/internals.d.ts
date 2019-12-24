import { TransferState } from '@angular/platform-browser';
import { LottieServerOptions, PathToAnimation } from './symbols';
export declare function appInitializerFactory(options: LottieServerOptions, state: TransferState): () => Promise<string[]>;
export declare function resolveLottiePaths({ preloadAnimations }: LottieServerOptions): PathToAnimation[];
