import { styled } from 'stitches.config'

export const Container = styled('header', {
  height: '72px',
  width: '100%',
  background: '$foreground',
  borderBottom: '1px solid $border',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 1rem',
  position: 'sticky',
  top: 0,
  zIndex: 10
})

export const NavHeader = styled('div', {
  width: '100%',
  height: '72px',
  borderBottom: '1px solid $border',
  padding: '1rem',
  display: 'flex',
  alignItems: 'center'
})

export const Navigation = styled('nav', {
  width: '100%',
  height: '100vh',
  background: '$foreground',
  transition: 'transform .5s cubic-bezier(.22,1,.36,1)',
  transform: 'translateX(-100%)',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 20,
  variants: {
    active: { true: { transform: 'translateX(0)' } }
  }
})

export const List = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.25rem',
  padding: '2rem 1.5rem',
  listStyle: 'none',
  a: {
    fontSize: '$md',
    textTransform: 'uppercase',
    fontWeight: 500,
    color: '$heading'
  }
})
