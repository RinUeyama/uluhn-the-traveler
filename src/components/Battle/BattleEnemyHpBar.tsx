import classNames from 'classnames'
import style from './BattleEnemyHpBar.module.scss'
import enemyHpIcon from 'src/assets/images/enemy-hp-icon.png'

export type IBattleEnemyHpBarProps = {
  hp: number,
  maxHp: number,
  type?: 'normal' | 'boss';
}

export const BattleEnemyHpBar: React.VFC<IBattleEnemyHpBarProps> = ({
  hp,
  maxHp,
  type = 'normal'
}) => {
  const leftHpBarRate = 100 * hp / maxHp
  const leftHpBarWidthStyle = { width: `${leftHpBarRate}%` }

  const enemyHpBarClass = classNames(style['enemy-hp-bar'], {
    [style['-boss']]: type === 'boss'
  })

  return (
    <div className={enemyHpBarClass}>
      <div className={style['hp']} style={leftHpBarWidthStyle} aria-label={`残り体力${Math.ceil(leftHpBarRate)}%`} />
      {type === 'boss' && <img className={style['icon']} src={enemyHpIcon.src} alt='' />}
    </div>
  )
}