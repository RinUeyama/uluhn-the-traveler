import { NextPage } from "next";
import dynamic from "next/dynamic";

const SAMPLE_PROPS = {
  backgroundImage: {
    //src: 'src/assets/images/background.png',
    src: 'https://picsum.photos/id/537/800/800',
    alt: '',
  },
  enemy: {
    name: '',
    image: {
      // src: '../../assets/images/enemy.jpg',
      src: 'https://picsum.photos/id/807/200/300',
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
      <Canvas {...{ background: { image: SAMPLE_PROPS.backgroundImage }, vfx: '', enemy: SAMPLE_PROPS.enemy }} />
    </section>
  )
}

export default Index;