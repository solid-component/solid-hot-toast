import { Renderable, Toast, ToastPosition } from "../core/types";
import { JSX } from "solid-js";
interface ToastBarProps {
    toast: Toast;
    position: () => ToastPosition | undefined;
    style?: JSX.CSSProperties;
    children?: (components: {
        icon: Renderable;
        message: Renderable;
    }) => Renderable;
}
export declare const ToastBar: (props: ToastBarProps) => JSX.Element;
export {};
