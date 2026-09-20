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
  maxWidth: '620px'
})

export const WhatsApp = styled('a', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.6rem',
  width: 'max-content',
  marginTop: '0.5rem',
  padding: '0.8rem 1.4rem',
  borderRadius: '$default',
  background: '#25D366',
  color: '$foreground',
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.05rem',
  transition: 'transform .3s ease, background .3s ease',

  '&:hover, &:focus': {
    background: '#128C7E',
    transform: 'translateY(-3px)'
  }
})
