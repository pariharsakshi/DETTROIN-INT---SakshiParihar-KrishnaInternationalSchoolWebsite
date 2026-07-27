import { Phone } from 'lucide-react';
import { WhatsAppIcon } from './SocialIcons';

export default function FloatingButtons() {
  return (
    <>
      {/* Call Button — bottom left */}
      <a
        href="tel:+919800000000"
        className="fixed bottom-6 left-6 z-40 w-14 h-14 bg-teal hover:bg-teal-dark text-white rounded-full flex items-center justify-center shadow-lg shadow-teal/30 transition-all hover:scale-110 group"
        aria-label="Call us"
      >
        <Phone size={22} />
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-teal/40 animate-ping opacity-30 group-hover:opacity-0" />
      </a>

      {/* WhatsApp Button — bottom right */}
      <a
        href="https://wa.me/919800000000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 transition-all hover:scale-110 group"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon size={24} />
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-green-500/40 animate-ping opacity-30 group-hover:opacity-0" />
      </a>
    </>
  );
}
