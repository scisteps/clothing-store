import { Box, Button, Container, Typography } from '@/components'
import Image from 'next/image'
import { useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import * as Styles from './styles'
import { ProductItem } from '@/layout/home/components/product-item'
import { ProductLayoutProps } from './types'
import { toLocaleString } from '@/utils/helpers'

const WHATSAPP_NUMBER = +256704453703 || ''

export function ProductLayout({ data, relatedProducts = [] }: ProductLayoutProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState(data?.sizes?.[0])
  const contentRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (!contentRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(contentRef.current?.children || [],
        { autoAlpha: 0, y: 22 },
        { autoAlpha: 1, y: 0, duration: 0.75, stagger: 0.08, ease: 'power3.out' }
      )
    }, contentRef)

    return () => ctx.revert()
  }, [])

  useLayoutEffect(() => {
    if (!imageRef.current) return
    gsap.fromTo(imageRef.current,
      { autoAlpha: 0, scale: 0.985 },
      { autoAlpha: 1, scale: 1, duration: 0.8, ease: 'power3.out' }
    )
  }, [selectedImage])

  if (!data) return <div>Product not found</div>

  const image = data.images?.[selectedImage] || data.images?.[0]
  const message = encodeURIComponent(
    `Hello Paulyna Collections, I am interested in "${data.name}"${selectedSize ? `, size ${selectedSize.label}` : ''}.`
  )
  const whatsappUrl = WHATSAPP_NUMBER
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`
    : `https://wa.me/?text=${message}`

  return (
    <Styles.Container>
      <Container size="lg">
        <Box
          flexDirection={{ '@initial': 'column', '@tablet-min': 'row' }}
          gap={2}
          marginTop={2}
          alignItems="flex-start"
        >
          <Box flexDirection="column" gap={1} flex={1}>
            <Styles.Figure ref={imageRef}>
              {image && (
                <Image
                  src={image}
                  alt={data.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  style={{ objectFit: 'cover' }}
                />
              )}
            </Styles.Figure>

            {data.images && data.images.length > 1 && (
              <Box gap={1} flexWrap="wrap">
                {data.images.map((img, index) => (
                  <Styles.Thumbnail
                    key={index}
                    active={selectedImage === index}
                    onClick={() => setSelectedImage(index)}
                  >
                    <Image src={img} alt={`${data.name} ${index + 1}`} fill sizes="80px" />
                  </Styles.Thumbnail>
                ))}
              </Box>
            )}
          </Box>

          <Styles.Info ref={contentRef}>
            <Typography as="h1" size="xl" fontWeight="600" color="heading">{data.name}</Typography>

            {data.brand && (
              <Typography size="sm" color="text">Brand: {data.brand}</Typography>
            )}

            <Typography size="md" color="text">{data.description}</Typography>

            <Typography size="lg" fontWeight="600" color="heading">
              {toLocaleString(data.price)}
            </Typography>

            {data.sizes?.length > 0 && (
              <Box flexDirection="column" gap={0.5}>
                <Typography as="h3" size="md" fontWeight="500" color="heading">Sizes</Typography>
                <Box gap={0.75} flexWrap="wrap">
                  {data.sizes.map((size, index) => (
                    <Button
                      key={index}
                      variant={selectedSize?.label === size.label ? 'primary' : 'secondary'}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size.label}
                    </Button>
                  ))}
                </Box>
              </Box>
            )}

            {data.colors?.length > 0 && (
              <Box flexDirection="column" gap={0.5}>
                <Typography as="h3" size="md" fontWeight="500" color="heading">Colors</Typography>
                <Box gap={0.5}>
                  {data.colors.map((color, index) => (
                    <Box key={index} css={{
                      width: '30px',
                      height: '30px',
                      borderRadius: '50%',
                      backgroundColor: color.color,
                      cursor: 'pointer',
                      border: '2px solid #000'
                    }} />
                  ))}
                </Box>
              </Box>
            )}

            <Button
              as="a"
              href={whatsappUrl}
              target="_blank"
              variant="primary"
              disabled={data.is_sold_out}
              css={{ marginTop: '1rem' }}
            >
              {data.is_sold_out ? 'Sold Out' : 'Ask on WhatsApp'}
            </Button>
          </Styles.Info>
        </Box>
        {relatedProducts.length > 0 && (
          <Styles.Related>
            <Styles.RelatedTitle>More from Paulyna</Styles.RelatedTitle>
            <Styles.RelatedGrid>
              {relatedProducts.map((product) => (
                <ProductItem
                  key={product.id}
                  data={{
                    ...product,
                    images: product.images?.length ? [product.images[0]] : []
                  }}
                />
              ))}
            </Styles.RelatedGrid>
          </Styles.Related>
        )}
      </Container>
    </Styles.Container>
  )
}
