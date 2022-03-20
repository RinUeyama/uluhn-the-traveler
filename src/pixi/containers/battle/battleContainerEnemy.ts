import * as PIXI from 'pixi.js'
import { IPixiSpriteOptions } from 'src/interfaces/i-pixi'

// TODO: 汎用化
export type IImage = {
  readonly src: string;
  readonly alt: string;
}

export type IPixiEnemy = {
  image: IImage
  size?: 'x-small' | 'small' | 'middle' | 'large' | 'x-large'
  options?: IPixiSpriteOptions
}

export type IBattleEnemyContainerProps = {
  app: PIXI.Application
  enemy: IPixiEnemy,
}

export const createBattleEnemyContainer = ({app, enemy}: IBattleEnemyContainerProps) => {
  /**
   * エネミー画像のサイズ（画面横幅あたりの分母）
   */
  const getEnemySize = () => {
    switch (enemy.size) {
      case 'x-small':
        return app.screen.width / 3;
      case 'small':
        return app.screen.width / 2;
      case 'middle':
        return app.screen.width / 1.6;
      case 'large':
        return app.screen.width / 1.3;
      case 'x-large':
        return app.screen.width / 1;
      default:
        return app.screen.width / 1.6;
    }
  }
  const size = getEnemySize();
  const container = new PIXI.Container();

  const enemySprite = PIXI.Sprite.from(enemy.image.src);
  enemySprite.anchor.set(0.5, 0.5);
  enemySprite.x = enemy.options?.position?.x || app.screen.width / 2;
  enemySprite.y = enemy.options?.position?.y || app.screen.height / 1.5;
  enemySprite.width = size;
  enemySprite.height = size;
  container.addChild(enemySprite);

  let t = 0;
  app.ticker.add(() => {
    t++;
    enemySprite.width = size * (Math.cos(t / 30) * 0.008 + 0.996)
    enemySprite.height = size * (Math.cos(t / 30) * 0.012 + 0.994)
  })

  return container
}