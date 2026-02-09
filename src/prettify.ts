/**
 * Flattens intersections and mapped types into a single object shape for readable IDE tooltips.
 * Preserves branded type properties.
 */
export type Prettify<T> = { [K in keyof T]: T[K] } & {};

/**
 * Recursively flattens nested object types. Handles functions and primitives gracefully.
 * Use for deeply nested intersection types.
 */
export type PrettifyDeep<T> = T extends (...args: infer A) => infer R
  ? (...args: PrettifyDeep<A>) => PrettifyDeep<R>
  : T extends object
    ? { [K in keyof T]: PrettifyDeep<T[K]> } & {}
    : T;
