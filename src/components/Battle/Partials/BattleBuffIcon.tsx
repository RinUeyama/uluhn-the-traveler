import { IBuff } from "src/interfaces/i-battle"
import style from './BattleBuffIcon.module.scss'

export type IBattleBuffIconProps = {
  buff: IBuff
}

export const BattleBuffIcon: React.VFC<IBattleBuffIconProps> = ({ buff }) => {
  return (
    <div className={style['battle-action-sign']}>
      <img className={style['icon']} src={buff.src} alt={buff.name} />
      {/** TODO: タップしたらモーダルで説明を出す */}
    </div>
  )
}