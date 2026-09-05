import { Box } from '@/components'
import { ButtonIcon } from '@/components/common/button-icon'
import { paths } from '@/constants/routes'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import * as Styles from './styles'
import logo from '../../../../images/paulyna logo.png'

export function Header () {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Styles.Container>
      <ButtonIcon
        label="menu toggle"
        icon={{ name: 'menuLeft' }}
        onClick={() => setIsOpen(true)}
      />

      <Link href="/">
        <Image src={logo} alt="Paulyna Collections" width={120} height={70} style={{ objectFit: 'contain' }} />
      </Link>

      <a
        href="https://wa.me/?text=Hello%20Paulyna%20Collections"
        target="_blank"
        rel="noreferrer"
        aria-label="Contact Paulyna on WhatsApp"
        style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase' }}
      >
        WhatsApp
      </a>

      <Styles.Navigation active={isOpen}>
        <Styles.NavHeader>
          <Box flex={1} justifyContent="center" alignItems="center">
            <Image src={logo} alt="Paulyna Collections" width={90} height={60} style={{ objectFit: 'contain' }} />
          </Box>
          <ButtonIcon onClick={() => setIsOpen(false)} label="close" icon={{ name: 'close' }} />
        </Styles.NavHeader>

        <Styles.List onClick={() => setIsOpen(false)}>
          <li><Link href={paths.home}>Home</Link></li>
          <li><a href="#products">Featured Products</a></li>
          <li><a href="#tshirts">T-Shirts</a></li>
          <li><a href="#contact">Contact</a></li>
        </Styles.List>
      </Styles.Navigation>
    </Styles.Container>
  )
}
