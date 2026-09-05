import { styled } from 'stitches.config'

export const Container = styled('main', {
  width: '100%',
  minHeight: 'calc(100vh - 72px)',
  padding: '1rem 0 4rem',
  '@laptops-min': {
    padding: '2rem 0 5rem'
  }
})

export const Figure = styled('figure', {
  position: 'relative',
  width: '100%',
  height: 'min(68vh, 680px)',
  overflow: 'hidden',
  background: '$foreground'
})

export const Thumbnail = styled('button', {
  position: 'relative',
  width: '80px',
  height: '80px',
  padding: 0,
  overflow: 'hidden',
  background: '$foreground',
  border: '2px solid transparent',
  variants: {
    active: {
      true: { borderColor: '$primary' }
    }
  },
  img: { objectFit: 'cover' }
})

export const Info = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  '@tablet-min': {
    maxWidth: '520px',
    paddingTop: '1rem'
  }
})

export const Related = styled('section', {
  marginTop: '6rem',
  borderTop: '1px solid $border',
  paddingTop: '3rem'
})

export const RelatedTitle = styled('h2', {
  fontSize: '$xlg',
  fontWeight: 400,
  textTransform: 'uppercase',
  marginBottom: '2rem'
})

export const RelatedGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
  gap: '1.5rem',
  '@smartphone-min': {
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'
  },
  '@laptops-min': {
    gridTemplateColumns: 'repeat(4, minmax(0, 1fr))'
  }
})
