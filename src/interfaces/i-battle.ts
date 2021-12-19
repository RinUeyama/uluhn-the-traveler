import { ACTION_TYPE } from "src/constants/BATTLE";

export type IActionType = typeof ACTION_TYPE[keyof typeof ACTION_TYPE]