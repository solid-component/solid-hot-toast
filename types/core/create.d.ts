import Emit from "./emit";
import { State } from "./toast";
import { DefaultToastOptions, Message, Renderable, ToastOptions, ValueOrFunction } from "./types";
type ToastHandler = (message: Message, options?: ToastOptions) => string;
export declare const create: (options?: {
    limit: number;
}) => {
    store: [get: State, set: import("solid-js/store").SetStoreFunction<State>];
    toast: {
        (message: Message, opts?: ToastOptions): string;
        error: ToastHandler;
        success: ToastHandler;
        loading: ToastHandler;
        custom: ToastHandler;
        dismiss(toastId?: string): void;
        remove(toastId?: string): void;
        promise<T>(promise: Promise<T>, msgs: {
            loading: Renderable;
            success: ValueOrFunction<Renderable, T>;
            error: ValueOrFunction<Renderable, any>;
        }, opts?: DefaultToastOptions): Promise<T>;
    };
    emit: Emit;
};
export {};
