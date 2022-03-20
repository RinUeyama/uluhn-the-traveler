import classNames from 'classnames'
import style from './BattleAllyCommand.module.scss'
import { IImage } from 'src/interfaces/common'
import { IBattleActionSignProps } from '../partials/BattleActionSignIcon'
import { MouseEventHandler } from 'react'

export type IBattleCommandProps = {
  icon: IImage;
  name: string;
  actionSign: IBattleActionSignProps
  callback: MouseEventHandler<HTMLButtonElement>;
}

export const BattleCommand: React.VFC<IBattleCommandProps> = ({
  icon,
  name,
  actionSign,
  callback
}) => {

  return (
    <button type="button">
    </button>
  )
}