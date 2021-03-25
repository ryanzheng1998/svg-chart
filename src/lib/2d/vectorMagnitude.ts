import { Vector } from "./interfaces/basic";

export const vectorMagnitude = (a: Vector): number => Math.sqrt(a.x * a.x + a.y * a.y)