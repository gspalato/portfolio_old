export type Has<P extends string, T> = {
    [Property in P]: T;
}