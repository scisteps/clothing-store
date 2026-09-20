import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { SectionTitle } from '../section-title'
import * as Styles from './styles'
import { ArrivalsProps } from './types'
import { breakpoints } from '@/constants/theme'
import { ProductItem } from '../product-item'

export function Arrivals ({ data }: ArrivalsProps) {
  const [sliderRef] = useKeenSlider({
    slides: { spacing: 10, perView: 1.15 },
    breakpoints: {
      [breakpoints['smartphone-min']]: { slides: { spacing: 10, perView: 2.6 } },
      [breakpoints['laptops-min']]: { slides: { spacing: 20, perView: 4.2 } }
    }
  })

  return (
    <Styles.Container id="products">
      <SectionTitle>Featured Products</SectionTitle>
      <Styles.SlideView>
        <div ref={sliderRef} className="keen-slider">
          {data?.map((value) => (
            <div className="keen-slider__slide" key={value.id}>
              <ProductItem
                data={{
                  ...value,
                  images: value.images?.length ? [value.images[0]] : []
                }}
              />
            </div>
          ))}
        </div>
      </Styles.SlideView>
    </Styles.Container>
  )
}
