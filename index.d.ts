/**
 * @param ms The time to wait for in milliseconds.
 * @return A promise that gets resolved after a given ms.
 */
declare function pauseFor(ms?: number): Promise<void>;

export = pauseFor;
