import { Tag, Typography } from '@/components'
import { paths } from '@/constants/routes'
import { resolvePath, toLocaleString } from '@/utils/helpers'
import Image from 'next/image'
import Link from 'next/link'
import * as Styles from './styles'
import { ProductItemProps } from './types'

export function ProductItem (props: ProductItemProps) {
  const {
    data: {
      images: [image],
      sizes = [],
      name,
      price,
      promotion,
      is_new,
      id,
      sku,
      is_sold_out
    }
  } = props

  const discountedPrice = promotion?.value ? price * promotion.value : price

  return (
    <Link href={resolvePath(paths.product.show, { sku, id })}>
      <Styles.Container>
        <Styles.TagView>
          {promotion?.value && <Tag variant="discount">{`sale ${promotion.value * 100}%`}</Tag>}
          {is_new && <Styles.Tag>new</Styles.Tag>}
          {is_sold_out && <Styles.Tag>sold out</Styles.Tag>}
        </Styles.TagView>

        <Styles.Figure>
          {image && <Image src={image} alt={name} fill sizes="(max-width: 768px) 85vw, 30vw" />}
        </Styles.Figure>

        <Styles.Info>
          <Typography size="xsm" color="text">{`${sizes.length} package`}</Typography>
          <Typography as="strong" fontWeight="400" color="heading" size="md">{name}</Typography>
          {promotion?.value ? (
            <>
              <Styles.PriceWithDiscount>{toLocaleString(price)}</Styles.PriceWithDiscount>
              <Typography size="md" fontWeight="500" color="heading">{toLocaleString(discountedPrice)}</Typography>
            </>
          ) : (
            <Typography size="md" fontWeight="500" color="heading">{toLocaleString(price)}</Typography>
          )}
        </Styles.Info>
      </Styles.Container>
    </Link>
  )
}
