// 3~5種類くらいにしたい
export const BUFF = {
  ATTACK_UP: {
    id: 'attack-up',
    name: '攻撃力上昇',
    src: '',
    description: '攻撃力が30％上昇する（切り捨て）'
  },
  ARMOR: {
    id: 'armor',
    name: '',
    src: '',
    description: 'ターン開始時にブロックを3生成する。 TODO: 固定値でいい？名前はどうする？'
  },
  CONCENTRATION: {
    id: 'concentration', 
    name: '集中',
    src: '',
    description: '攻撃に「貫通」を付与する'
  },
  REGENERATION: {
    id: 'regeneration',
    name: '再生',
    src: '',
    description: 'ターン開始時にHPを10%（切り捨て）回復する。'
  }
  /**
   * 特殊バフ TODO: 許容すべき？排除すべき？
   */
} as const