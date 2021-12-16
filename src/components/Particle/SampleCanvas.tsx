import * as PIXI from 'pixi.js'

const SampleParticles: React.VFC = () => {
  const onElementLoaded = (element: HTMLDivElement) => {
    if (!element) {
      return
    }

    const app = new PIXI.Application({
      width: window.innerWidth / window.devicePixelRatio,
      height: window.innerHeight / window.devicePixelRatio, // TODO: 下側を固定値差し引く
      backgroundColor: 0x020202,
      resolution: window.devicePixelRatio || 1,
      antialias: true,
      backgroundAlpha: 0,
      // resizeTo: window TODO: Retina だと動かない、CSSでサイズ指定したDOMのほうがいいかも
    });
    element.appendChild(app.view);
  
    const container = new PIXI.Container();
    app.stage.addChild(container);

    const particleGraphic = (type: any) => {
      // パーティクル描画
      const graphic = new PIXI.Graphics();
      graphic.lineStyle(20, type, 10);
      graphic.beginFill(0x111111, 0.7);
      graphic.drawCircle(0, 0, 50);
      graphic.endFill();
      return graphic;
    }
    const randomIntFromInterval = (min: number, max: number) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    
    const particles: PIXI.Sprite[] = [];
    const colors = ["0xE5493F","0x55C1FF","0x26B9A0", "0x5A52FF"]
    const drawParticle = (options: { width: number, height: number, totalParticle: number }) => {
      // 引数で色情報をランダムで渡し、別々の色情報を持ったパーティクルを貰います。
      const graphic = particleGraphic(colors[randomIntFromInterval(0, colors.length - 1)]);
      // 以下2行はSpriteに変換する処理
      const texture = app.renderer.generateTexture(graphic);
      const spriteParticle = new PIXI.Sprite(texture);
      // 以下オプション
      spriteParticle.anchor.set(0.5);
      const size = 0.05 + Math.random() * 0.1;
      spriteParticle.alpha = Math.random();
      spriteParticle.scale.x = size;
      spriteParticle.scale.y = size;
      // パーティクル出現位置を画面中央付近に
      spriteParticle.x = (options.width / 2) - ((Math.random() * 200) -  (Math.random() * 200));
      spriteParticle.y = (options.height / 2) - ((Math.random() * 200) -  (Math.random() * 200));
      spriteParticle.alpha = 0;
      spriteParticle.scale = new PIXI.ObservablePoint(() => {}, null, ((1 + (8 * Math.random())) + (Math.random() * 1)) / 10)
      // サイズが小さいパーティクルのスピードを速く、大きいパーティクルのスピードを遅く
      // spriteParticle.speed = (Math.floor( Math.random() * 4 ) + 3) / Math.floor((size * 100));
      particles.push(spriteParticle);
    
      // パーティクルコンテナの追加
      const particleContainer = new PIXI.ParticleContainer(
        options.totalParticle,
        {
          scale: true,
          position: true,
        }
      );
      particleContainer.addChild(spriteParticle);
      container.addChild(particleContainer);
    }

    /*
    const move = () => {
      for(let i = 0; i < particles.length; i++) {
        const particle = particles[i];
        // 三角関数を使ってランダムな動きをさせる
        particle.x += Math.cos(particle.alpha) * particle.scale * particle.speed;
        particle.y += Math.sin(particle.alpha) * particle.s * particle.speed;
        particle.a += Math.random() * 0.4 - 0.2;
        // 画面外に出た時の処理
        if(particle.x > options.width + 10) {
          particle.x = -5;
        } else if(particle.x < 0 - 10) {
          particle.x = options.width + 5;
        } else if(particle.y > options.height + 10) {
          particle.y = -5;
        } else if(particle.y < 0 - 10) {
          particle.y = options.height + 5;
        }
        // マウスの近くにあるパーティクルはマウスに近寄ってくる
        if (mouse.x - particle.x < 80 && mouse.x - particle.x > -80
        && mouse.y - particle.y < 80 && mouse.y - particle.y > -80) {
          particle.x += (mouse.x - particle.x) * particle.speed * 0.02;
          particle.y += (mouse.y - particle.y) * particle.speed * 0.02;
        }
      }
    }
    const update = () => {
      move();
      if (timeToRecreate) {
        if (particles.length < options.totalParticles) {
          // パーティクルが全て生成し終わったら、一定時間ごとにまた生成する
          generate(1);
        }
      }
      requestAnimationFrame(update.bind(this));
    }
    const mouseAction = (e: any) => {
      // マウスの位置を取得
      mouse.x = e.data.global.x;
      mouse.y = e.data.global.y;
    },
    */
  }

return <div ref={onElementLoaded} />
}
 
 export default SampleParticles