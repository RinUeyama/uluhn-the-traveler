import style from './BattleActionSignIcon.module.scss'
import { IActionType } from 'src/interfaces/i-battle'

export type IBattleActionSignProps = {
  type: IActionType
  potency?: number | undefined
}

export const BattleActionSign: React.VFC<IBattleActionSignProps> = ({
  type,
  potency,
}) => {
  return (
    <div className={style['battle-action-sign']}>
      <img className={style['icon']} src={type.src} alt={type.name} />
      {potency && <p className={style['potency']} aria-label='効果量'>{potency}</p>}
      {/** TODO: タップしたらモーダルで説明を出す */}
    </div>
  )
}