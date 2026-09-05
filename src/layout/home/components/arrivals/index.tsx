import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { SectionTitle } from '../section-title'
import * as Styles from './styles'
import { ArrivalsProps } from './types'
import { breakpoints } from '@/constants/theme'
import { ProductItem } from '../product-item'
import { productImages } from '@/constants/images'

export function Arrivals ({ data }: ArrivalsProps) {
  const [sliderRef] = useKeenSlider({
    slides: { spacing: 10, perView: 1.15 },
    breakpoints: {
      [breakpoints['smartphone-min']]: { slides: { spacing: 10, perView: 2.6 } },
      [breakpoints['laptops-min']]: { slides: { spacing: 20, perView: 4.2 } }
    }
  })

  const getImageForProduct = (product: any, index: number) => {
    const name = product.name?.toLowerCase() || ''
    if (name.includes('scrunchie')) return productImages[`scrunchie${(index % 4) + 1}`] || productImages.scrunchie1
    if (name.includes('travel bag') && name.includes('medium')) return productImages.travelBagMedium
    if (name.includes('backpack')) return productImages.backpack
    if (name.includes('toilet')) return productImages.toiletBag
    if (name.includes('travel bag') && name.includes('big')) return productImages.travelBagBig
    if (name.includes('laptop')) return productImages.laptopSleeve
    if (name.includes('sanitary')) return productImages.sanitaryBag
    return productImages.travelBagMedium
  }

  return (
    <Styles.Container id="products">
      <SectionTitle>Featured Products</SectionTitle>
      <Styles.SlideView>
        <div ref={sliderRef} className="keen-slider">
          {data?.map((value, index) => (
            <div className="keen-slider__slide" key={value.id || index}>
              <ProductItem data={{ ...value, images: [getImageForProduct(value, index)] }} />
            </div>
          ))}
        </div>
      </Styles.SlideView>
    </Styles.Container>
  )
}
