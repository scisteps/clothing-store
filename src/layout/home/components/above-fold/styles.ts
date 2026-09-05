import { styled } from 'stitches.config'

export const Container = styled('div', {
  width: '100%',
  height: 'calc(100vh - 72px)',
  minHeight: '560px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  overflow: 'hidden',
  background: '$background',

  '.keen-slider': {
    width: '100%',
    height: '100%',
  },

  '.keen-slider__slide': {
    position: 'relative',
    overflow: 'hidden',
  }
})

export const Slide = styled('div', {
  position: 'relative',
})

export const Figure = styled('figure', {
  position: 'absolute',
  inset: 0,
  zIndex: 0,
  width: '100%',
  height: '100%',
  margin: 0,
  overflow: 'hidden',
  background: '$primary',

  '&::after': {
    content: '',
    position: 'absolute',
    inset: 0,
    background: 'rgba(0, 0, 0, 0.42)',
    zIndex: 1,
  },

  img: {
    objectFit: 'cover',
    transform: 'scale(1.02)',
    animation: 'paulynaHeroScale 12s ease-out forwards',
  },

  '@keyframes paulynaHeroScale': {
    '0%': {
      transform: 'scale(1.02)',
    },
    '100%': {
      transform: 'scale(1.12)',
    },
  }
})

export const Content = styled('div', {
  position: 'relative',
  zIndex: 2,
  height: '100%',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  padding: '1rem',

  '& > div': {
    maxWidth: '720px',
  }
})

export const DotContainer = styled('div', {
  position: 'absolute',
  zIndex: 4,
  bottom: '2rem',
  display: 'flex',
  gap: '0.75rem',
})

export const Dot = styled('button', {
  height: '5px',
  width: '30px',
  border: '1px solid $foreground',
  background: 'transparent',
  cursor: 'pointer',
  transition: 'all .35s ease',

  variants: {
    active: {
      true: {
        width: '45px',
        background: '$foreground'
      }
    }
  }
})

export const Title = styled('h2', {
  margin: 0,
  fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
  lineHeight: 1,
  fontWeight: 600,
  color: '$foreground',
  textShadow: '0 2px 16px rgba(0, 0, 0, 0.45)',
})

export const SubTitle = styled('h2', {
  margin: 0,
  fontSize: 'clamp(1.75rem, 4vw, 3rem)',
  lineHeight: 1.1,
  fontWeight: 400,
  color: '$foreground',
  textShadow: '0 2px 16px rgba(0, 0, 0, 0.45)',
})
