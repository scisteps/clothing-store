import { PropsWithChildren } from 'react'

import * as Styles from './styles'
import { TagProps } from './types'

export function Tag (props: PropsWithChildren<TagProps>) {
  const {
    variant,
    children
  } = props

  return (
    <Styles.Container
      new={variant === 'new'}
      soldOut={variant === 'soldOut'}
      discount={variant === 'discount'}
    >
      {children}
    </Styles.Container>
  )
}