import { Accessor } from "solid-js";
import { DefaultToastOptions, Toast, ToastPosition, ToastType } from "./types";
export declare const defaultTimeouts: {
    [key in ToastType]: number;
};
export declare const useToaster: (toastOptions?: () => DefaultToastOptions) => {
    toasts: () => Toast[];
    handlers: {
        calculateOffset: (toast: Toast, opts?: {
            reverseOrder?: Accessor<boolean>;
            gutter?: Accessor<number>;
            defaultPosition?: ToastPosition;
        }) => number;
        updateHeight: (toastId: string, height: number) => void;
        startPause: () => void;
        endPause: () => void;
    };
};
