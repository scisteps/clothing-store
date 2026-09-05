import { styled } from 'stitches.config'

export const Container = styled('div', {
  padding: '4px 8px 2px 8px',
  color: '$foreground',
  background: '$primary',
  textTransform: 'uppercase',
  fontSize: '0.78rem',
  width: 'max-content',

  variants: {
    variant: {
      new: {
        background: '$secondary'
      },

      soldOut: {
        background: '$primary'
      },

      discount: {
        background: '$secondary'
      }
    }
  }
})