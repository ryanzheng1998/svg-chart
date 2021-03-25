import { Vector } from "./interfaces/basic";

export const vectorScale = (a: number) => (v: Vector) => ({
    x: a * v.x,
    y: a * v.y,
})