import { createCommonBackgroundContainer, IPixiBackground } from 'src/pixi/containers/common/commonBackgroundContainer';
import { createBattleEnemyContainer, IPixiEnemy } from 'src/pixi/containers/battle/battleContainerEnemy';
import { createPixiApp } from 'src/utils/pixiUtil'
import { BattleEnemyHpBar, IBattleEnemyHpBarProps } from '../BattleEnemyHpBar';
import style from './index.module.scss'

export type ITemplateBattleProps = {
  containers: {
    background: IPixiBackground,
    enemy: IPixiEnemy,
    vfx: any
  }
  enemyHpBar: IBattleEnemyHpBarProps
}

const TemplateBattle: React.VFC<ITemplateBattleProps> = ({ containers, enemyHpBar }) => {
  const onElementLoaded = (element: HTMLDivElement) => {
    if (!element) return

    const app = createPixiApp(element);

    const backgroundContainer = createCommonBackgroundContainer({ app, background: containers.background });
    app.stage.addChild(backgroundContainer);

    const enemyContainer = createBattleEnemyContainer({ app, enemy: containers.enemy })
    app.stage.addChild(enemyContainer);

    console.log('VFXはまだ実装しなくてもいいかな', containers.vfx)
  }

  return (
    <div className={style['template-battle']} ref={onElementLoaded}>
      <div className={style['enemy-hp-bar']}>
        <BattleEnemyHpBar {...enemyHpBar} type='boss' />
      </div>
    </div>
  )
}
 
 export default TemplateBattle