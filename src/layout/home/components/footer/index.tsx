import { Container, Typography } from '@/components'
import * as Styles from './styles'

export function Footer () {
  const phoneNumber = '+256 704 453 703'
  
  const copyPhoneNumber = () => {
    navigator.clipboard.writeText('+256704453703')
    alert('Phone number copied!')
  }

  return (
    <Styles.Container id="contact">
      <Container size="lg">
        <Styles.Contact>
          <Typography as="h2" size="lg" fontWeight="600" color="heading">
            Find something you love?
          </Typography>
          <Typography size="md" color="text">
            Contact Paulyna Collections on WhatsApp for orders.
          </Typography>
          <button
            onClick={copyPhoneNumber}
            style={{ 
              color: '#f5f5f5', 
              fontWeight: 600, 
              textTransform: 'uppercase',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: 'inherit'
            }}
          >
            {phoneNumber} (Click to copy)
          </button>
        </Styles.Contact>
        <Typography size="xsm">
          © Paulyna Collections {new Date().getFullYear()}.
        </Typography>
      </Container>
    </Styles.Container>
  )
}