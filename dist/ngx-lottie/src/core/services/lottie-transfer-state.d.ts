import { TransferState } from '@angular/platform-browser';
import { AnimationFilename } from '../../symbols';
export declare class LottieTransferState {
  private state;
  constructor(state: TransferState);
  get<T>(animation: AnimationFilename): T | null;
}
