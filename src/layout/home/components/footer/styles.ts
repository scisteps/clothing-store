import { styled } from 'stitches.config'

export const Container = styled('footer', {
  borderTop: '1px solid $border',
  marginTop: '5rem',
  padding: '4rem 0 2rem'
})

export const Contact = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  padding: '2rem 0 4rem',
  maxWidth: '620px',
  a: {
    width: 'max-content',
    padding: '0.8rem 1.2rem',
    background: '$primary',
    color: '$foreground',
    transition: 'transform .3s ease',
    '&:hover': { transform: 'translateY(-3px)' }
  }
})
