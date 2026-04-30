// Universal WhatsApp link — works on all devices and all WhatsApp versions
// Tries wa.me first (standard), falls back to api.whatsapp.com (WhatsApp Business API)
export function whatsappLink(phone, message = '') {
  const encoded = message ? `?text=${encodeURIComponent(message)}` : '';
  // wa.me works on: iPhone WhatsApp, Android WhatsApp, WhatsApp Business, WhatsApp Web
  // api.whatsapp.com is the fallback for older devices / WhatsApp Business API
  return `https://wa.me/${phone}${encoded}`;
}

// Opens WhatsApp with a fallback to api.whatsapp.com if wa.me fails
export function openWhatsApp(phone, message = '') {
  const encoded = message ? `?text=${encodeURIComponent(message)}` : '';
  const primary = `https://wa.me/${phone}${encoded}`;
  const fallback = `https://api.whatsapp.com/send?phone=${phone}${message ? `&text=${encodeURIComponent(message)}` : ''}`;

  const win = window.open(primary, '_blank');
  // If the window didn't open or was blocked, try the fallback
  if (!win || win.closed || typeof win.closed === 'undefined') {
    window.open(fallback, '_blank');
  }
}
