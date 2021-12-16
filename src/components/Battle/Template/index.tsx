import { createCommonBackgroundContainer, IPixiBackground } from 'src/pixi/containers/common/commonBackgroundContainer';
import { createBattleEnemyContainer, IPixiEnemy } from 'src/pixi/containers/battle/battleContainerEnemy';
import { createPixiApp } from 'src/utils/pixiUtil'

export type ITemplateBattleProps = {
  background: IPixiBackground,
  enemy: IPixiEnemy,
  vfx: any
}

const TemplateBattle: React.VFC<ITemplateBattleProps> = ({ background, enemy, vfx }) => {
  const onElementLoaded = (element: HTMLDivElement) => {
    if (!element) return

    const app = createPixiApp(element);

    const backgroundContainer = createCommonBackgroundContainer({ app, background })
    app.stage.addChild(backgroundContainer);

    const enemyContaier = createBattleEnemyContainer({ app, enemy })
    app.stage.addChild(enemyContaier);

    console.log('VFXはまだ実装しなくてもいいかな', vfx)
  }

  return <div ref={onElementLoaded} />
}
 
 export default TemplateBattle