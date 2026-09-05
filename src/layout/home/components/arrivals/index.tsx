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

const getImageForProduct = (product: any, index: number): string => {
  const name = product.name?.toLowerCase() || ''

  if (name.includes('scrunchie')) {
    const scrunchieImages = [
      productImages.scrunchie1,
      productImages.scrunchie2,
      productImages.scrunchie3,
      productImages.scrunchie4
    ]

    return scrunchieImages[index % scrunchieImages.length].src
  }

  if (name.includes('travel bag') && name.includes('medium')) {
    return productImages.travelBagMedium.src
  }

  if (name.includes('backpack')) {
    return productImages.backpack.src
  }

  if (name.includes('toilet')) {
    return productImages.toiletBag.src
  }

  if (name.includes('travel bag') && name.includes('big')) {
    return productImages.travelBagBig.src
  }

  if (name.includes('laptop')) {
    return productImages.laptopSleeve.src
  }

  if (name.includes('sanitary')) {
    return productImages.sanitaryBag.src
  }

  return productImages.travelBagMedium.src
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
