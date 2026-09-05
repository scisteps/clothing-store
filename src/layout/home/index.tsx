import dynamic from 'next/dynamic'
import { ButtonScrollTop, FadeIn } from '@/components'
import { AboveFold, Category, Header, Arrivals, TShirts } from './components'
import * as Styles from './styles'
import { HomePageProps } from './types'

const Footer = dynamic(() => import('./components').then(t => t.Footer), { ssr: false })

export function HomeLayout ({ data }: HomePageProps) {
  const tshirtProducts = data.tshirts?.length
    ? data.tshirts
    : data.arrivals?.filter((product) => /t-?shirts?|tee|tshirt/i.test(product.name || ''))

  return (
    <>
      <Header />
      <Styles.Container>
        <FadeIn duration={1}>
          <AboveFold data={data.above_fold} />
        </FadeIn>

        <main>
     

          <FadeIn delay={0.18}>
            <Arrivals data={data.arrivals} />
          </FadeIn>

          <FadeIn delay={0.24}>
<TShirts data={tshirtProducts} />       </FadeIn>
        </main>

        <FadeIn delay={0.3}>
          <Footer />
        </FadeIn>

        <ButtonScrollTop />
      </Styles.Container>
    </>
  )
}
