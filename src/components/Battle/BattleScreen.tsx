import * as PIXI from 'pixi.js'

// 敵は1体だけ（シナリオ上複数いる場合は見た目だけ集団っぽくする）

// TODO: 汎用化
export type IImage = {
  readonly src: string;
  readonly alt: string;
}

export type IEnemy = {
  name: string,
  image: IImage,
  option?: {
    position?: {
      x?: number,
      y?: number,
    },
    anchor?: [x?: number | undefined, y?: number | undefined]
    animationSpeed?: number
  }
}

export type IBattleScreen = {
  backgroundImage: IImage,
  enemy: IEnemy,
}
 
const BattleScreen: React.VFC<IBattleScreen> = ({ backgroundImage, enemy }) => {
  const onElementLoaded = (element: HTMLDivElement) => {
    if (!element) {
      return
    }

    const app = new PIXI.Application({
      width: window.innerWidth / window.devicePixelRatio,
      height: window.innerHeight / window.devicePixelRatio, // TODO: 下側を固定値差し引く
      backgroundColor: 0x1099bb,
      resolution: window.devicePixelRatio || 1,
      antialias: true,
      transparent: true,
      // resizeTo: window TODO: Retina だと動かない、CSSでサイズ指定したDOMのほうがいいかも
    });
    element.appendChild(app.view);
  
    const container = new PIXI.Container();
    app.stage.addChild(container);

    const backgroundSprite = PIXI.Sprite.from(backgroundImage.src);
    backgroundSprite.anchor.set(0.5);
    backgroundSprite.x = app.screen.width / 2;
    backgroundSprite.y = app.screen.height / 2;
    backgroundSprite.width = app.screen.width;
    backgroundSprite.height = app.screen.height;
    app.stage.addChild(backgroundSprite)

    const enemySprite = PIXI.Sprite.from(enemy.image.src);
    enemySprite.anchor.set(0.5, -0.5);
    enemySprite.x = app.screen.width / 2;
    enemySprite.y = app.screen.height / 2;
    app.stage.addChild(enemySprite);

    // TODO: React-Spring の文字列で指定可能にする
    let t = 0;
    app.ticker.add((delta) => {
      t += delta;
      enemySprite.y = app.screen.height * Math.sin(0.04 * t) / 32;
    })
  }

  return <div ref={onElementLoaded} />
}
 
 export default BattleScreen