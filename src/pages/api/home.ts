import { NextApiRequest, NextApiResponse } from 'next'

import db from 'public/database.json'

export default function handler (
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(404).send('Not found')
  }

  try {
    const arrivals = db.home.arrivals
      .map(id => db.products.find(product => product.id === id))
      .filter(Boolean)

    const trandings = db.home.trandings.map(tranding => {
      const products = db.products.filter(product =>
        tranding.productIds.includes(product.id)
      )

      return {
        ...tranding,
        productIds: undefined,
        products
      }
    })

    // Use the product's category instead of its display name.
    // This means renaming a product to "Crop Top" will not make it disappear.
    const tshirts = db.products.filter(product =>
      product.brand?.toLowerCase() === 'tshirts'
    )

    return res.status(200).json({
      ...db.home,
      trandings,
      arrivals,
      tshirts
    })
  } catch (error) {
    console.error('HOME API ERROR:', error)

    return res.status(500).json({
      error: 'Failed to load homepage data'
    })
  }
}