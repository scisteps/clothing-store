import { Icon } from '@/components/common'
import { getWhatsAppUrl, whatsapp } from '@/constants/contact'

import * as Styles from './styles'
import { ButtonWhatsAppProps } from './types'

export function ButtonWhatsApp ({ message, offsetTop }: ButtonWhatsAppProps) {
  return (
    <Styles.Link
      href={getWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      offsetTop={offsetTop}
      aria-label={`Chat with Paulyna Collections on WhatsApp at ${whatsapp.display}`}
      title={`Chat on WhatsApp - ${whatsapp.display}`}
    >
      <Icon name="whatsapp" color="foreground" size={24} />
      <Styles.Label>{whatsapp.display}</Styles.Label>
    </Styles.Link>
  )
}