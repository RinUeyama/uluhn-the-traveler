import { IDebuff } from "src/interfaces/i-battle"
import style from './BattleBuffIcon.module.scss'

export type IBattleDebuffIconProps = {
  debuff: IDebuff
}

export const BattleDebuffIcon: React.VFC<IBattleDebuffIconProps> = ({ debuff }) => {
  return (
    <div className={style['battle-action-sign']}>
      <img className={style['icon']} src={debuff.src} alt={debuff.name} />
      {/** TODO: タップしたらモーダルで説明を出す */}
    </div>
  )
}