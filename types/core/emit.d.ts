import { SetStoreFunction } from "solid-js/store";
import { State } from "./toast";
import { Toast } from "./types";
declare class Emit {
    store: [State, SetStoreFunction<State>];
    toastTimeouts: Map<string, number>;
    TOAST_EXPIRE_DISMISS_DELAY: number;
    limit: number;
    constructor(store: [State, SetStoreFunction<State>], limit?: number);
    addToRemoveQueue(toastId: string): void;
    addToast(toast: Toast): void;
    updateToast(toast: Partial<Toast>): void;
    dismissToast(toastId?: string): void;
    upsertToast(toast: Toast): void;
    startPause(time: number): void;
    endPause(time: number): void;
    removeToast(toastId?: string): void;
}
export default Emit;
