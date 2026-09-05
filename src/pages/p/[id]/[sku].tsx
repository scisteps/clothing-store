import { Head } from '@/components'
import { ProductLayout } from '@/layout/product'
import { ProductPageProps } from '@/layout/product/types'
import { productService } from '@/services/produt'
import { homeService } from '@/services/home'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

export const getServerSideProps: GetServerSideProps<ProductPageProps> = async (context) => {
  const { id } = context.query
  const { data } = await productService.findById(Number(id))
  const { data: home } = await homeService.find()

  if (!data) {
    return { notFound: true }
  }

  const relatedProducts = (home.arrivals || [])
    .filter(product => product.id !== data.id)
    .slice(0, 4)

  return {
    props: {
      data,
      relatedProducts
    }
  }
}

export default function ProductPage (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const { data, relatedProducts } = props

  if (!data) return null

  return (
    <>
      <Head
        title={`${data.name} | Paulyna Collections`}
        description={data.description}
      />
      <ProductLayout data={data} relatedProducts={relatedProducts} />
    </>
  )
}
