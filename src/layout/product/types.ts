import { Product } from '@/services/types'

export interface ProductPageProps {
  data: Product
  relatedProducts: Product[]
}

export interface ProductLayoutProps {
  data: Product
  relatedProducts?: Product[]
}
