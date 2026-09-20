export const whatsapp = {
  /** international format, digits only, as expected by wa.me */
  number: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '256704453703',
  display: '+256 704 453 703'
}

export const defaultWhatsAppMessage =
  'Hello Paulyna Collections, I would like to know more about your products.'

export function getWhatsAppUrl (message = defaultWhatsAppMessage) {
  const url = `https://wa.me/${whatsapp.number}`

  return message ? `${url}?text=${encodeURIComponent(message)}` : url
}