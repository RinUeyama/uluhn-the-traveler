import classNames from 'classnames'
import style from './BattleCommand.module.scss'
import enemyHpIcon from 'src/assets/images/enemy-hp-icon.png'
import { IImage } from 'src/interfaces/i-common'
import { IBattleActionSignProps } from './Partials/BattleActionSignIcon'

export type IBattleCommandProps = {
  icon: IImage;
  name: string;
  actionSign: IBattleActionSignProps
  callback: () => {};
}

export const BattleCommand: React.VFC<IBattleCommandProps> = ({
  icon,
  name,
  actionSign,
  callback
}) => {

  return (
    <button>
    </button>
  )
}