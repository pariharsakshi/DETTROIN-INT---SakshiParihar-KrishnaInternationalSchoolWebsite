import { Phone, Mail } from 'lucide-react';
import { FacebookIcon, InstagramIcon, YoutubeIcon } from './SocialIcons';
import { contactInfo, socialLinks } from '../../data/navigation';

export default function TopBar() {
  return (
    <div className="bg-navy text-white text-sm hidden md:block">
      <div className="section-container flex items-center justify-between py-2">
        {/* Contact Info */}
        <div className="flex items-center gap-6">
          <a
            href={`tel:${contactInfo.phone}`}
            className="flex items-center gap-1.5 hover:text-gold transition-colors"
            aria-label={`Call us at ${contactInfo.phone}`}
          >
            <Phone size={14} />
            <span>{contactInfo.phone}</span>
          </a>
          <a
            href={`mailto:${contactInfo.email1}`}
            className="flex items-center gap-1.5 hover:text-gold transition-colors"
            aria-label={`Email us at ${contactInfo.email1}`}
          >
            <Mail size={14} />
            <span>{contactInfo.email1}</span>
          </a>
          <a
            href={`mailto:${contactInfo.email2}`}
            className="flex items-center gap-1.5 hover:text-gold transition-colors hidden lg:flex"
            aria-label={`Email admissions at ${contactInfo.email2}`}
          >
            <Mail size={14} />
            <span>{contactInfo.email2}</span>
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-3">
          <a
            href={socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold transition-colors"
            aria-label="Visit our Facebook page"
          >
            <FacebookIcon size={16} />
          </a>
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold transition-colors"
            aria-label="Visit our Instagram page"
          >
            <InstagramIcon size={16} />
          </a>
          <a
            href={socialLinks.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold transition-colors"
            aria-label="Visit our YouTube channel"
          >
            <YoutubeIcon size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
