import { Vector } from "./interfaces/basic";
import { vectorMagnitude } from "./vectorMagnitude";

export const vectorNormalize = (a: Vector) => ({
    x: vectorMagnitude(a) === 0 ? 0 : a.x / vectorMagnitude(a),
    y: vectorMagnitude(a) === 0 ? 0 : a.y / vectorMagnitude(a),
})