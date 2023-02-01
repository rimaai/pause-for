/**
 * @param ms The time to wait for in milliseconds.
 * @return A promise that gets resolved after a given ms.
 */
declare function waitFor(ms?: number): Promise<void>;

export = waitFor;
