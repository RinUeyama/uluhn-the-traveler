
import * as PIXI from 'pixi.js'
import { IImage } from 'src/interfaces/common'
import { IPixiSpriteOptions } from 'src/interfaces/pixi'

export type IPixiBackground = {
  image: IImage,
  options?: IPixiSpriteOptions
}

export type ICommonBackgroundContainer = {
  app: PIXI.Application,
  background: IPixiBackground
}

export const createCommonBackgroundContainer = ({ app, background }: ICommonBackgroundContainer) => {
  const container = new PIXI.Container();

  const backgroundSprite = PIXI.Sprite.from(background.image.src);
  backgroundSprite.anchor.set(0.5);
  backgroundSprite.x = app.screen.width / 2;
  backgroundSprite.y = app.screen.height / 2;
  backgroundSprite.width = app.screen.width;
  backgroundSprite.height = app.screen.height;
  app.stage.addChild(backgroundSprite)

  return container
}