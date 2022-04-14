import { IBuff } from "src/interfaces/battle"
import style from './BattleBuffIcon.module.scss'

export type IBattleBuffIconProps = {
  buff: IBuff
}

export const BattleBuffIcon: React.VFC<IBattleBuffIconProps> = ({ buff }) => {
  return (
    <div className={style['battle-buff-icon']}>
      <img className={style['icon']} src={buff.src} alt={buff.name} />
      {/** TODO: タップしたらモーダルで説明を出す */}
    </div>
  )
}