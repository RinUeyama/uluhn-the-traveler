import BattleActionAttackIcon from 'src/assets/images/battle/action/battle-action-attack.png'
import BattleActionBlockIcon from 'src/assets/images/battle/action/battle-action-block.png'
import BattleActionOtherIcon from 'src/assets/images/battle/action/battle-action-other.png'

export const ACTION_TYPE = {
  ATTACK: {
    id: 'attack',
    name: '攻撃',
    src: BattleActionAttackIcon.src,
  },
  BLOCK: {
    id: 'block',
    name: '防御',
    src: BattleActionBlockIcon.src,
  },
  OTHER: {
    id: 'other',
    name: '特殊',
    src: BattleActionOtherIcon.src
  }
} as const
