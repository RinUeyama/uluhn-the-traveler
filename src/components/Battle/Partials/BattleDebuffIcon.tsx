import { IDebuff } from "src/interfaces/battle"
import style from './BattleDebuffIcon.module.scss'

export type IBattleDebuffIconProps = {
  debuff: IDebuff
}

export const BattleDebuffIcon: React.VFC<IBattleDebuffIconProps> = ({ debuff }) => {
  return (
    <div className={style['battle-debuff-icon']}>
      <img className={style['icon']} src={debuff.src} alt={debuff.name} />
      {/** TODO: タップしたらモーダルで説明を出す */}
    </div>
  )
}