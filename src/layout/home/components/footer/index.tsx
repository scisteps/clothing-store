import { Container, Icon, Typography } from '@/components'
import { getWhatsAppUrl, whatsapp } from '@/constants/contact'
import * as Styles from './styles'

export function Footer () {
  const message = 'Hello Paulyna Collections, I am interested in your products.'

  return (
    <Styles.Container id="contact">
      <Container size="lg">
        <Styles.Contact>
          <Typography as="h2" size="lg" fontWeight="600" color="heading">
            Find something you love?
          </Typography>
          <Typography size="md" color="text">
            Contact Paulyna Collections directly on WhatsApp for availability, sizing and orders.
          </Typography>

          <Styles.WhatsApp
            href={getWhatsAppUrl(message)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Chat with Paulyna Collections on WhatsApp at ${whatsapp.display}`}
          >
            <Icon name="whatsapp" color="foreground" size={22} />
            {whatsapp.display}
          </Styles.WhatsApp>

          <Typography size="xsm" color="text">
            Tap the number to start a WhatsApp chat with us.
          </Typography>
        </Styles.Contact>
        <Typography size="xsm">
          © Paulyna Collections {new Date().getFullYear()}.
        </Typography>
      </Container>
    </Styles.Container>
  )
}

