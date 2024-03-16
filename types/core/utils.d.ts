import { ValueFunction, ValueOrFunction } from "./types";
export declare const genId: () => string;
export declare const prefersReducedMotion: () => boolean | undefined;
export declare const isFunction: <TValue, TArg>(valOrFunction: ValueOrFunction<TValue, TArg>) => valOrFunction is ValueFunction<TValue, TArg>;
export declare const resolveValue: <TValue, TArg>(valOrFunction: ValueOrFunction<TValue, TArg>, arg: TArg) => TValue;
