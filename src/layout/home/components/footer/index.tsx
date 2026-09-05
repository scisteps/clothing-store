import { Container, Typography } from '@/components'
import * as Styles from './styles'

export function Footer () {
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
          <a
            href="https://web.whatsapp.com/send/?phone=256704453703&text=Hello+Paulyna+Collections&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#f5f5f5', fontWeight: 600, textTransform: 'uppercase' }}
          >
            Chat on WhatsApp
          </a>
        </Styles.Contact>
        <Typography size="xsm">
          © Paulyna Collections {new Date().getFullYear()}.
        </Typography>
      </Container>
    </Styles.Container>
  )
}