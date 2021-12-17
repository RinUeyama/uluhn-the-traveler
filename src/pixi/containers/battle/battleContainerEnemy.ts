import * as PIXI from 'pixi.js'
import { IPixiSpriteOptions } from 'src/interfaces/i-pixi'

// TODO: 汎用化
export type IImage = {
  readonly src: string;
  readonly alt: string;
}

export type IPixiEnemy = {
  image: IImage,
  size?: {
    width?: number
    height?: number
  }
  options?: IPixiSpriteOptions
}

export type IBattleEnemyContainerProps = {
  app: PIXI.Application
  enemy: IPixiEnemy,
}

export const createBattleEnemyContainer = ({app, enemy}: IBattleEnemyContainerProps) => {
  const container = new PIXI.Container();

  const enemySprite = PIXI.Sprite.from(enemy.image.src);
  enemySprite.anchor.set(0.5, 0.5);
  enemySprite.x = enemy.options?.position?.x || app.screen.width / 2;
  enemySprite.y = enemy.options?.position?.y || app.screen.height / 2.8;
  enemySprite.width = enemy.size?.width || app.screen.width / 1.2;
  enemySprite.height = enemy.size?.height || app.screen.width / 1.2;
  container.addChild(enemySprite);　

  let t = 0;
  app.ticker.add(() => {
    t++;
    enemySprite.width = (enemy.options?.position?.x || app.screen.width / 2) * (Math.sin(t / 100) * 0.024 + 0.986)
    enemySprite.height = (enemy.size?.height || app.screen.width / 1.2) * (Math.cos(t / 60) * 0.024 + 0.986)
  })

  return container
}