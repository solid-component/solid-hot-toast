import { ParentProps } from "solid-js";
import { store, toast, emit } from "./toast";
export type ToastContextValue = {
    store: typeof store;
    toast: typeof toast;
    emit: typeof emit;
};
export declare const ToastContext: import("solid-js").Context<ToastContextValue>;
export declare const useToastContext: () => ToastContextValue;
export declare const ToastProvider: (props: ParentProps<ToastContextValue>) => import("solid-js").JSX.Element;
