import { styled } from 'stitches.config'

export const Container = styled('div', {
  position: 'relative',
  transition: 'transform .35s ease',
  '&:hover': {
    transform: 'translateY(-6px)'
  }
})

export const Figure = styled('figure', {
  width: '300px',
  height: '300px',
  position: 'relative',
  overflow: 'hidden',
  background: '$foreground',
  '@table-min': {
    width: '400px',
    height: '400px',
  },
  img: {
    objectFit: 'cover',
    transition: 'transform .6s ease'
  },
  '&:hover img': {
    transform: 'scale(1.025)'
  }
})

export const Info = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  padding: '1.5rem 0 2rem'
})

export const TagView = styled('div', {
  position: 'absolute',
  top: '10px',
  left: '10px',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  zIndex: 3,
})

export const PriceWithDiscount = styled('span', {
  textDecoration: 'line-through',
  color: '$text'
})

export const Tag = styled('div', {
  padding: '5px 9px',
  color: '$foreground',
  background: '$primary',
  textTransform: 'uppercase',
  fontSize: '0.72rem',
  width: 'max-content'
})
