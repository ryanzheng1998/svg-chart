import { Vector } from "./interfaces/basic";

export const vectorSub = (a: Vector) => (b: Vector): Vector => ({
    x: a.x - b.x,
    y: a.y - b.y,
})