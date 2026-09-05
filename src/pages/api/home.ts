import { NextApiRequest, NextApiResponse } from 'next'

import db from 'public/database.json'

export default function handler (
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(404).json({
      error: 'Not found'
    })
  }

  try {
    console.log('HOME API START')

    console.log('Database loaded:', !!db)
    console.log('Products:', db?.products?.length)
    console.log('Home:', !!db?.home)

    const arrivals = (db.home?.arrivals || [])
      .map(id =>
        db.products.find(product => product.id === id)
      )
      .filter(Boolean)

    const trandings = (db.home?.trandings || []).map(tranding => {
      const products = db.products.filter(product =>
        tranding.productIds.includes(product.id)
      )

      return {
        ...tranding,
        productIds: undefined,
        products
      }
    })

    const tshirts = db.products.filter(product =>
      product.brand?.toLowerCase() === 'tshirts'
    )

    console.log('Arrivals:', arrivals.length)
    console.log('Trending:', trandings.length)
    console.log('T-Shirts:', tshirts.length)

    return res.status(200).json({
      ...db.home,
      trandings,
      arrivals,
      tshirts
    })
  } catch (error) {
    console.error('========== HOME API ERROR ==========')
    console.error(error)
    console.error('====================================')

    return res.status(500).json({
      error: 'Failed to load homepage data',
      message: error instanceof Error
        ? error.message
        : String(error)
    })
  }
}