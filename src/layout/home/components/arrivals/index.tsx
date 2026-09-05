import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

import { SectionTitle } from '../section-title'
import * as Styles from './styles'
import { ArrivalsProps } from './types'
import Image from "next/image"

import { breakpoints } from "@/constants/theme"
import { Typography } from "@/components"
import { toLocaleString } from "@/utils/helpers"
import { ProductItem } from "../product-item"
import { productImages } from '@/constants/images'

export function Arrivals (props: ArrivalsProps) {
  const {
    data
  } = props

  const [sliderRef] = useKeenSlider({
    slides: {
      spacing: 10,
      perView: 1.15
    },
    breakpoints: {
      [breakpoints["smartphone-min"]]: {
        slides: {
          spacing: 10,
          perView: 2.6
        }
      },
      [breakpoints["laptops-min"]]: {
        slides: {
          spacing: 20,
          perView: 4.2
        }
      }
    }
  })

  const getImageForProduct = (product: any, index: number) => {
    // Map product names to images
    if (product.name?.toLowerCase().includes('scrunchie')) {
      return productImages[`scrunchie${(index % 4) + 1}`] || productImages.scrunchie1;
    }
    if (product.name?.toLowerCase().includes('travel bag') && product.name?.toLowerCase().includes('medium')) {
      return productImages.travelBagMedium;
    }
    if (product.name?.toLowerCase().includes('backpack')) {
      return productImages.backpack;
    }
    if (product.name?.toLowerCase().includes('toilet')) {
      return productImages.toiletBag;
    }
    if (product.name?.toLowerCase().includes('travel bag') && product.name?.toLowerCase().includes('big')) {
      return productImages.travelBagBig;
    }
    if (product.name?.toLowerCase().includes('laptop')) {
      return productImages.laptopSleeve;
    }
    if (product.name?.toLowerCase().includes('sanitary')) {
      return productImages.sanitaryBag;
    }
    // Default
    return productImages.travelBagMedium;
  }

  const renderSlides = data.map((value, index) => {
    const imageSrc = getImageForProduct(value, index);
    
    return (
      <div className="keen-slider__slide" key={index}>
        <ProductItem 
          data={{
            ...value,
            images: [imageSrc, imageSrc, imageSrc] // ProductItem expects an array
          }}
        />
      </div>
    )
  })

  return (
    <Styles.Container>
      <SectionTitle>Scrunchies</SectionTitle>
      <Styles.SlideView>
        <div ref={sliderRef} className="keen-slider">
          {renderSlides}
        </div>
      </Styles.SlideView>
    </Styles.Container>
  )
}