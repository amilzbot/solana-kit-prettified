/**
 * Flattens intersections and mapped types into a single object shape for readable IDE tooltips.
 * Preserves branded type properties and primitive bases (string, number, bigint, etc.).
 *
 * For branded primitives (e.g. `Brand<bigint, 'Lamports'>` = `{ __brand:... } & bigint`),
 * a naive mapped type loses the primitive. We detect this and preserve the original type.
 */
export type Prettify<T> =
  // If T extends a primitive, it's a branded primitive intersection — don't map it.
  // The branded properties are kept via the intersection; mapping would strip the primitive.
  T extends string | number | bigint | boolean | symbol
    ? T
    : T extends (...args: any[]) => any
      ? T
      : { [K in keyof T]: T[K] } & {};

/**
 * Recursively flattens nested object types. Handles functions and primitives gracefully.
 * Use for deeply nested intersection types.
 */
export type PrettifyDeep<T> =
  T extends string | number | bigint | boolean | symbol
    ? T
    : T extends (...args: infer A) => infer R
      ? (...args: PrettifyDeep<A>) => PrettifyDeep<R>
      : T extends object
        ? { [K in keyof T]: PrettifyDeep<T[K]> } & {}
        : T;
