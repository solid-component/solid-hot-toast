import { DefaultToastOptions } from "./types";
export declare const useStore: (toastOptions?: () => DefaultToastOptions) => {
    toasts: () => import("./types").Toast[];
    emit: import("./emit").default;
    toast: {
        (message: import("./types").Message, opts?: Partial<Pick<import("./types").Toast, "id" | "icon" | "duration" | "ariaProps" | "className" | "style" | "position" | "iconTheme">> | undefined): string;
        error: (message: import("./types").Message, options?: Partial<Pick<import("./types").Toast, "id" | "icon" | "duration" | "ariaProps" | "className" | "style" | "position" | "iconTheme">> | undefined) => string;
        success: (message: import("./types").Message, options?: Partial<Pick<import("./types").Toast, "id" | "icon" | "duration" | "ariaProps" | "className" | "style" | "position" | "iconTheme">> | undefined) => string;
        loading: (message: import("./types").Message, options?: Partial<Pick<import("./types").Toast, "id" | "icon" | "duration" | "ariaProps" | "className" | "style" | "position" | "iconTheme">> | undefined) => string;
        custom: (message: import("./types").Message, options?: Partial<Pick<import("./types").Toast, "id" | "icon" | "duration" | "ariaProps" | "className" | "style" | "position" | "iconTheme">> | undefined) => string;
        dismiss(toastId?: string | undefined): void;
        remove(toastId?: string | undefined): void;
        promise<T>(promise: Promise<T>, msgs: {
            loading: import("./types").Renderable;
            success: import("./types").ValueOrFunction<import("./types").Renderable, T>;
            error: import("./types").ValueOrFunction<import("./types").Renderable, any>;
        }, opts?: DefaultToastOptions | undefined): Promise<T>;
    };
    pausedAt: () => number | undefined;
};
