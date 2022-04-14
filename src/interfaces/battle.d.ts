import { ACTION_TYPE } from "src/constants/battle/battle-action"
import { BUFF } from "src/constants/battle/battle-buff"
import { DEBUFF } from "src/constants/battle/battle-debuff"
import { MANA_COLOR } from "src/constants/battle/battle-mana-color"

/**
 * 主人公ステータス
 */
export type IAllyHp = {
  current: number,
  max: number,
  // 補正？
}
export type IMana = {
  color: typeof MANA_COLOR[keyof typeof MANA_COLOR]
  amount: 0 | 1 | 2 | 3
}
export type IAllyMana = {
  primary: {
    current: IMana,
    max: IMana,
  },
  secondary: {
    current: IMana,
    max: IMana
  }
}

/**
 * 種別
 */
export type IActionType = typeof ACTION_TYPE[keyof typeof ACTION_TYPE]
export type IBuff = typeof BUFF[keyof typeof BUFF]
export type IDebuff = typeof DEBUFF[keyof typeof DEBUFF]
