import { Container } from "pixi.js";

export interface ITemplate {
   readonly containers: Container[]
}

export type IPixiSpriteOptions = {
  position?: {
    x?: number,
    y?: number,
  },
  anchor?: [x?: number | undefined, y?: number | undefined]
  animationSpeed?: number
}