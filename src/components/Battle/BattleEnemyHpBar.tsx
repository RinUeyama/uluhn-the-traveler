import style from './BattleEnemyHpBar.module.scss'

export type IBattleEnemyHpBarProps = {
  hp: number,
  maxHp: number,
  name?: string,
  long?: boolean,
}

export const BattleEnemyHpBar: React.VFC<IBattleEnemyHpBarProps> = ({
  hp,
  maxHp,
  name,
  long = false
}) => {
  const leftHpBarRate = 100 * hp / maxHp
  const leftHpBarWidthStyle = { width: `${leftHpBarRate}%` }

  return (
    <div className={style['enemy-hp-bar']}>
      <div className={style['hp']} style={leftHpBarWidthStyle} aria-label={`残り体力${leftHpBarRate}%`} />
      {name && <p className={style['name']}>{name}</p>}
    </div>
  )
}