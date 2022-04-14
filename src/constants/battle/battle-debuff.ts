import DUMMY from 'src/assets/images/battle/action/battle-debuff-sample.png'

// 4~8種類くらいにしたい
export const DEBUFF = {
  /**
   * 基本デバフ
   */
  ATTACK_DOWN: {
    id: 'attack-down',
    name: '攻撃力低下',
    src: DUMMY.src,
    description: '攻撃力が30％低下する（切り上げ）'
  }
  /**
   * 特殊デバフ TODO: 許容すべき？排除すべき？
   */
} as const