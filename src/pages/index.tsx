import { Head } from "@/components"
import { HomeLayout } from "@/layout/home"
import { HomePageProps } from "@/layout/home/types"
import { GetServerSideProps, InferGetServerSidePropsType } from "next"

import db from "public/database.json"

const products = db.products.map(product => ({
  ...product,
  colors: (product.colors || []).map(color => ({
    color: color.value
  }))
}))

export const getServerSideProps: GetServerSideProps<HomePageProps> = async () => {
  const arrivals = db.home.arrivals
    .map(id => products.find(product => product.id === id))
    .filter(
      (product): product is typeof products[number] =>
        product !== undefined
    )

  const tranding = db.home.trandings.map(tranding => ({
    id: tranding.id,
    title: tranding.title,
    products: products.filter(product =>
      tranding.productIds.includes(product.id)
    )
  }))

  const tshirts = products.filter(
    product => product.brand?.toLowerCase() === "tshirts"
  )

  return {
    props: {
      data: {
        above_fold: db.home.above_fold,
        tranding,
        collection_banner: db.home.collection_banner,
        arrivals,
        season_sale: db.home.season_sale,
        collections: db.home.collections,
        tshirts
      }
    }
  }
}

export default function HomePage (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return (
    <>
      <Head
        title="Paulyna | Home"
        description="Home page"
      />

      <HomeLayout {...props} />
    </>
  )
}