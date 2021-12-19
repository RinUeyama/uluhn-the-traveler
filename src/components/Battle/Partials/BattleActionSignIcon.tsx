import { useMemo } from 'react'
import style from './BattleActionSignIcon.module.scss'
import { IActionType } from 'src/interfaces/i-battle'
import { ACTION_TYPE } from 'src/constants/BATTLE'
import BattleActionAttackIcon from 'src/assets/images/battle/action/battle-action-attack.png'
import BattleActionBlockIcon from 'src/assets/images/battle/action/battle-action-block.png'
import BattleActionOtherIcon from 'src/assets/images/battle/action/battle-action-other.png'


export type IBattleActionSignProps = {
  type: IActionType
  potency?: number | undefined
  mp: number
}

export const BattleActionSign: React.VFC<IBattleActionSignProps> = ({
  type,
  potency
}) => {
  const ActionIcon = useMemo(() => {
    switch (type) {
      case ACTION_TYPE.ATTACK:
        return { src: BattleActionAttackIcon.src, alt: '攻撃' }
      case ACTION_TYPE.BLOCK:
        return { src: BattleActionBlockIcon.src, alt: '防御' }
      case ACTION_TYPE.OTHER:
      default:
        return { src: BattleActionOtherIcon.src, alt: '特殊' }
    }
  }, [type])

  return (
    <div className={style['battle-action-sign']}>
      <img className={style['icon']} src={ActionIcon.src} alt={ActionIcon.alt} />
      {potency && <p aria-label='効果量'>{potency}</p>}
    </div>
  )
}