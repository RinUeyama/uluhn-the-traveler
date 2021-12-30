import { NextPage } from "next";
import dynamic from "next/dynamic";
import SampleBackgroundImage from 'src/assets/images/sample-background.png'
import SampleEnemyImage from 'src/assets/images/sample-enemy.png'

const SAMPLE_PROPS = {
  backgroundImage: {
    //src: 'src/assets/images/background.png',
    src: SampleBackgroundImage.src,
    alt: '',
  },
  enemy: {
    name: '',
    image: {
      src: SampleEnemyImage.src,
      alt: ''
    }
  },
}

const Index: NextPage = () => {
  const Canvas = dynamic(() => import('src/components/Battle/Template/index'), {
    ssr: false
  })

  return (
    <section>
      <Canvas
        containers={{background: { image: SAMPLE_PROPS.backgroundImage }, vfx: '', enemy: SAMPLE_PROPS.enemy }}
        enemyHpBar={{ hp: 80, maxHp: 120, type: 'boss' }}
      />
    </section>
  )
}

export default Index;