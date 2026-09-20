import { Container } from '@/components'

import { SectionTitle } from '../section-title'
import { ProductItem } from '../product-item'

import * as Styles from './styles'
import { ProductsByCategoryProps } from './types'

const categories = [
  { brand: 'Scrunchies', title: 'Scrunchies' },
  { brand: 'Hair Accessories', title: 'Hair Accessories' },
  { brand: 'Table Mats', title: 'Table Mats' },
  { brand: 'Accessories', title: 'Accessories' },
  { brand: 'Bags', title: 'Bags' },
  { brand: 'T-Shirts', title: 'T-Shirts' }
]

export function ProductsByCategory ({ data = [] }: ProductsByCategoryProps) {
  const groups = categories
    .map(category => ({
      ...category,
      products: data.filter(
        product => product.brand?.toLowerCase() === category.brand.toLowerCase()
      )
    }))
    .filter(group => group.products.length > 0)

  if (!groups.length) return null

  return (
    <Styles.Container id="shop-by-category">
      {groups.map(group => (
        <Styles.Group key={group.brand}>
          <SectionTitle>{group.title}</SectionTitle>

          <Container size="lg">
            <Styles.Grid>
              {group.products.map(product => (
                <ProductItem
                  key={product.id}
                  data={{
                    ...product,
                    images: product.images?.length ? [product.images[0]] : []
                  }}
                />
              ))}
            </Styles.Grid>
          </Container>
        </Styles.Group>
      ))}
    </Styles.Container>
  )
}