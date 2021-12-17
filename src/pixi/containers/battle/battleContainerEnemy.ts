import * as PIXI from 'pixi.js'
import { IPixiSpriteOptions } from 'src/interfaces/i-pixi'

// TODO: 汎用化
export type IImage = {
  readonly src: string;
  readonly alt: string;
}

export type IPixiEnemy = {
  image: IImage,
  options?: IPixiSpriteOptions
}

export type IBattleEnemyContainerProps = {
  app: PIXI.Application
  enemy: IPixiEnemy,
}

export const createBattleEnemyContainer = ({app, enemy}: IBattleEnemyContainerProps) => {
  const container = new PIXI.Container();

  const enemySprite = PIXI.Sprite.from(enemy.image.src);
  enemySprite.anchor.set(0.5, -0.5);
  enemySprite.x = app.screen.width / 2;
  enemySprite.y = app.screen.height / 2;
  container.addChild(enemySprite);

  return container
}