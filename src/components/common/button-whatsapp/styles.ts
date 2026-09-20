import { styled } from 'stitches.config'

export const Link = styled('a', {
  position: 'fixed',
  bottom: '20px',
  left: '20px',
  zIndex: 5,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',
  height: '45px',
  padding: '0 0.75rem',
  borderRadius: '999px',
  background: '#25D366',
  color: '$foreground',
  boxShadow: '0 4px 12px rgba(0, 0, 0, .25)',
  transition: 'transform .2s ease, background .2s ease',

  '&:hover, &:focus': {
    background: '#128C7E',
    transform: 'translateY(-3px)'
  },

  '@smartphone-min': {
    padding: '0 1.1rem'
  },

  variants: {
    offsetTop: {
      true: {
        bottom: '78px'
      }
    }
  }
})

export const Label = styled('span', {
  display: 'none',
  fontWeight: 600,
  letterSpacing: '0.03rem',
  whiteSpace: 'nowrap',
  color: '$foreground',

  '@smartphone-min': {
    display: 'block'
  }
})