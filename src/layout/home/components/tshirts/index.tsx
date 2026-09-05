import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { breakpoints } from '@/constants/theme'
import { SectionTitle } from '../section-title'
import { ProductItem } from '../product-item'
import { collectionImages } from '@/constants/images'
import * as Styles from './styles'
import { Product } from '@/services/types'

interface TShirtsProps {
  data?: Product[]
}

export function TShirts({ data = [] }: TShirtsProps) {
  const [sliderRef] = useKeenSlider({
    slides: { spacing: 12, perView: 1.15 },
    breakpoints: {
      [breakpoints['smartphone-min']]: { slides: { spacing: 12, perView: 2.3 } },
      [breakpoints['laptops-min']]: { slides: { spacing: 20, perView: 4.1 } }
    }
  })

  if (!data?.length) return null

  return (
    <Styles.Container id="tshirts">
      <SectionTitle>T-Shirts</SectionTitle>
      <Styles.SlideView>
        <div ref={sliderRef} className="keen-slider">
          {data.map((product, index) => (
            <div className="keen-slider__slide" key={product.id}>
              <ProductItem
                data={{
                  ...product,
images: [
  product.images?.[0] ||
  collectionImages.tshirts[index % collectionImages.tshirts.length].src
]                }}
              />
            </div>
          ))}
        </div>
      </Styles.SlideView>
    </Styles.Container>
  )
}
