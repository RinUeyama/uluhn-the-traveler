import classNames from 'classnames'
import style from './BattleAllyCommand.module.scss'
import { IImage } from 'src/interfaces/common'
import { IBattleActionSignProps } from '../partials/BattleActionSignIcon'
import { MouseEventHandler } from 'react'

export type IBattleCommandProps = {
  icon: IImage;
  name: string;
  actionSign: IBattleActionSignProps
  callback?: MouseEventHandler<HTMLButtonElement> | undefined;
}

export const BattleCommand: React.VFC<IBattleCommandProps> = ({
  icon,
  name,
  actionSign,
  callback
}) => {
  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    callback && callback(e);
  }

  return (
    <button type="button" className={style['battle-ally-command']} onClick={handleClick}>
      <img className={style['icon']} {...icon} />
    </button>
  )
}