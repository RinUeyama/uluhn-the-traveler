/**
 * 複数のスプライトシートを用いたかったが
 * そもそもスプライトシートの用意が困難なので断念
 */


import * as PIXI from 'pixi.js'

export type CanvasEnemy = {
  name?: string,
  spriteSheet: string,
  option?: {
    position?: {
      x?: number,
      y?: number,
    },
    anchor?: [x?: number | undefined, y?: number | undefined]
    animationSpeed?: number
  }
}

export type CanvasBattleProps = {
  enemies: Array<CanvasEnemy>
}

const useSampleBattleCanvas: React.VFC<CanvasBattleProps> = ({ enemies }) => {
  const onElementLoaded = (element: HTMLDivElement) => {
    if (!element) {
      return
    }

    const app = new PIXI.Application({
      width: 320, height: 600, backgroundColor: 0x1099bb, resolution: window.devicePixelRatio || 1,
    });

    element.appendChild(app.view);
  
    const container = new PIXI.Container();
  
    app.stage.addChild(container);

    enemies.map((enemy) => {
      const loader = new PIXI.Loader();
      loader.reset();
      
      return loader.add(enemy.spriteSheet).load((_, resource) => {
        const frames = Object
          .keys(resource[enemy.spriteSheet].data.frames)
          .map(frame => PIXI.Texture.from(frame))
  
        console.log('frames', frames)
  
        const animation = new PIXI.AnimatedSprite(frames);
        animation.x = enemy.option?.position?.x || app.screen.width / 2;
        animation.y = enemy.option?.position?.y || app.screen.height / 2;
        animation.anchor.set(0.5);
        animation.animationSpeed = 0.5;
        animation.play();
  
        app.stage.addChild(animation);
  
        app.ticker.add(() => {
          animation.rotation += 0.01;
        });
      })
    })
  }

  return <div ref={onElementLoaded} />
}

export default useSampleBattleCanvas