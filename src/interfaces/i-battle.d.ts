import { ACTION_TYPE } from "src/constants/battle/battle-action"
import { BUFF } from "src/constants/battle/battle-buff"
import { DEBUFF } from "src/constants/battle/battle-debuff"

export type IActionType = typeof ACTION_TYPE[keyof typeof ACTION_TYPE]
export type IBuff = typeof BUFF[keyof typeof BUFF]
export type IDebuff = typeof DEBUFF[keyof typeof DEBUFF]
