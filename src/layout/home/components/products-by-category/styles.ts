import { styled } from 'stitches.config'

export const Container = styled('section', {
  margin: '4rem 0'
})

export const Group = styled('div', {
  margin: '2rem 0 4rem'
})

export const Grid = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1.5rem',
  justifyContent: 'center',
  padding: '0 1rem',

  img: {
    objectPosition: 'center',
    objectFit: 'cover'
  }
})