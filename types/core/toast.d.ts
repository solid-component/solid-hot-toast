import { DefaultToastOptions, Toast } from "./types";
export interface State {
    toasts: Toast[];
    pausedAt: number | undefined;
    toastOptions: DefaultToastOptions;
}
declare const toast: {
    (message: import("./types").Message, opts?: Partial<Pick<Toast, "id" | "icon" | "duration" | "ariaProps" | "className" | "style" | "position" | "iconTheme">> | undefined): string;
    error: (message: import("./types").Message, options?: Partial<Pick<Toast, "id" | "icon" | "duration" | "ariaProps" | "className" | "style" | "position" | "iconTheme">> | undefined) => string;
    success: (message: import("./types").Message, options?: Partial<Pick<Toast, "id" | "icon" | "duration" | "ariaProps" | "className" | "style" | "position" | "iconTheme">> | undefined) => string;
    loading: (message: import("./types").Message, options?: Partial<Pick<Toast, "id" | "icon" | "duration" | "ariaProps" | "className" | "style" | "position" | "iconTheme">> | undefined) => string;
    custom: (message: import("./types").Message, options?: Partial<Pick<Toast, "id" | "icon" | "duration" | "ariaProps" | "className" | "style" | "position" | "iconTheme">> | undefined) => string;
    dismiss(toastId?: string | undefined): void;
    remove(toastId?: string | undefined): void;
    promise<T>(promise: Promise<T>, msgs: {
        loading: import("./types").Renderable;
        success: import("./types").ValueOrFunction<import("./types").Renderable, T>;
        error: import("./types").ValueOrFunction<import("./types").Renderable, any>;
    }, opts?: DefaultToastOptions | undefined): Promise<T>;
}, emit: import("./emit").default, store: [get: State, set: import("solid-js/store").SetStoreFunction<State>];
export { toast, emit, store };
