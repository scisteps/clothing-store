import { useKeenSlider } from 'keen-slider/react'
import "keen-slider/keen-slider.min.css"
import { useState, useMemo } from 'react'
import Image from 'next/image'

import { breakpoints } from '@/constants/theme'
import { collectionImages } from '@/constants/images'

import { SectionTitle } from '../section-title'
import * as Styles from './styles'
import { CollectionsProps } from './types'

import { Button, Container, Typography } from '@/components'

export function Collections (props: CollectionsProps) {
  const { 
    data
  } = props

  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  const [sliderRef, instanceRef] = useKeenSlider({
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created () {
      setIsLoading(true)
    },
    slides: {
      spacing: 10,
      perView: 1.15
    },
    breakpoints: {
      [breakpoints["smartphone-min"]]: {
        slides: {
          spacing: 30,
          perView: 2,
        },
      },
    }
  })

  const renderSlides = useMemo(() => data?.map((value, index) => {
    // Determine which image set to use based on the collection title
    let imageSrc;
    if (value.title?.toLowerCase().includes('duffel')) {
      imageSrc = collectionImages.duffel[index % collectionImages.duffel.length];
    } else if (value.title?.toLowerCase().includes('scrunch')) {
      imageSrc = collectionImages.scrunchies[index % collectionImages.scrunchies.length];
    } else if (value.title?.toLowerCase().includes('accessor')) {
      imageSrc = collectionImages.accessories[index % collectionImages.accessories.length];
    } else {
      // Default to duffel images
      imageSrc = collectionImages.duffel[index % collectionImages.duffel.length];
    }

    return (
      <div key={index} className="keen-slider__slide number-slide1">
        <Styles.Content>
          <Typography 
            as="h3" 
            fontWeight="500" 
            size="lg" 
            color="heading"
          >{value.title}</Typography>
          <Button as="a" href={value.action.path}>{value.action.label}</Button>
        </Styles.Content>
        <Styles.Figure>
          <Image src={imageSrc} alt={value.title} fill/>
        </Styles.Figure>
      </div>
    )
  }), [data])
  
  const renderDots = useMemo(() => isLoading &&
    [...Array(((instanceRef?.current?.track.details.slides.length || 2) - 1 ) || 0)
      .fill(2)]
      .map((_, index) => (
        <Styles.Dot 
          key={index} 
          active={index === currentSlide} 
          onClick={() => instanceRef.current?.moveToIdx(index)}
        />
      ))
  , [currentSlide, instanceRef, isLoading])
  
  return (
    <Container size="lg">
      <Styles.Container>
        <SectionTitle>Our Collections</SectionTitle>
        <div ref={sliderRef} className="keen-slider">
          {renderSlides}
        </div>
        <Styles.DotContainer>
          {renderDots}
        </Styles.DotContainer>
      </Styles.Container>
    </Container>
  )
}