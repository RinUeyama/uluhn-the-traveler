import { GetStaticProps } from "next";
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
      // src: 'src/assets/images/enemy.jpg',
      src: 'https://picsum.photos/id/817/200/300',
      alt: ''
    }
  },
}

const Index: GetStaticProps = () => {
  const Canvas = dynamic(() => import('src/components/Battle/BattleScreen'), {
    ssr: false
  })

  return (
    <section>
      <Canvas {...SAMPLE_PROPS} />
    </section>
  )
}

export default Index;