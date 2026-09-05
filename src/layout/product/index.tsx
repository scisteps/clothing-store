import { Box, Button, Container, Typography } from '@/components'
import Image from 'next/image'
import { useState } from 'react'
import * as Styles from './styles'
import { ProductLayoutProps } from './types'

export function ProductLayout({ data }: ProductLayoutProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState(data?.sizes?.[0])
  const [quantity, setQuantity] = useState(1)

  if (!data) {
    return <div>Product not found</div>
  }

  const image = data.images?.[selectedImage] || data.images?.[0]

  return (
    <Container size="lg">
      <Box 
        flexDirection={{ '@initial': 'column', '@tablet-min': 'row' }}
        gap={2}
        marginTop={2}
      >
        {/* Image Gallery */}
        <Box flexDirection="column" gap={1} flex={1}>
          <Box 
            css={{ 
              position: 'relative', 
              width: '100%', 
              height: '400px',
              backgroundColor: '#f5f5f5'
            }}
          >
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
          </Box>
          
          {/* Thumbnails */}
          {data.images && data.images.length > 1 && (
            <Box gap={1} flexWrap="wrap">
              {data.images.map((img, index) => (
                <Box
                  key={index}
                  css={{
                    position: 'relative',
                    width: '80px',
                    height: '80px',
                    cursor: 'pointer',
                    border: selectedImage === index ? '2px solid #005B96' : 'none'
                  }}
                  onClick={() => setSelectedImage(index)}
                >
                  <Image 
                    src={img} 
                    alt={`${data.name} ${index + 1}`} 
                    fill
                    sizes="80px"
                    style={{ objectFit: 'cover' }}
                  />
                </Box>
              ))}
            </Box>
          )}
        </Box>

        {/* Product Info */}
        <Box flexDirection="column" gap={1} flex={1}>
          <Typography as="h1" size="xl" fontWeight="600" color="heading">
            {data.name}
          </Typography>
          
          {data.brand && (
            <Typography size="sm" color="text">
              Brand: {data.brand}
            </Typography>
          )}

          <Typography size="md" color="text">
            {data.description}
          </Typography>

          <Typography size="lg" fontWeight="600" color="heading">
            KSh {data.price?.toLocaleString()}
          </Typography>

          {/* Sizes */}
          {data.sizes && data.sizes.length > 0 && (
            <Box flexDirection="column" gap={0.5}>
              <Typography as="h3" size="md" fontWeight="500" color="heading">
                Sizes
              </Typography>
              <Box gap={1}>
                {data.sizes.map((size, index) => (
                  <Button
                    key={index}
                    variant={selectedSize?.label === size.label ? 'primary' : 'outline'}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size.label}
                  </Button>
                ))}
              </Box>
            </Box>
          )}

          {/* Colors */}
          {data.colors && data.colors.length > 0 && (
            <Box flexDirection="column" gap={0.5}>
              <Typography as="h3" size="md" fontWeight="500" color="heading">
                Colors
              </Typography>
              <Box gap={0.5}>
                {data.colors.map((color, index) => (
                  <Box
                    key={index}
                    css={{
                      width: '30px',
                      height: '30px',
                      borderRadius: '50%',
                      backgroundColor: color.value,
                      cursor: 'pointer',
                      border: '2px solid #ccc'
                    }}
                  />
                ))}
              </Box>
            </Box>
          )}

          {/* Quantity */}
          <Box flexDirection="column" gap={0.5}>
            <Typography as="h3" size="md" fontWeight="500" color="heading">
              Quantity
            </Typography>
            <Box gap={1} alignItems="center">
              <Button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</Button>
              <Typography size="md">{quantity}</Typography>
              <Button onClick={() => setQuantity(quantity + 1)}>+</Button>
            </Box>
          </Box>

          {/* Add to Cart */}
          <Button 
            variant="primary" 
            size="lg"
            disabled={data.is_sold_out}
            css={{ marginTop: '1rem' }}
          >
            {data.is_sold_out ? 'Sold Out' : 'Add to Cart'}
          </Button>
        </Box>
      </Box>
    </Container>
  )
}