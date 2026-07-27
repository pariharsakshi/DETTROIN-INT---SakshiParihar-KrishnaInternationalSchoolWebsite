import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
} from "./SocialIcons";
import { schoolLogoLight } from "../../data/images";
import {
  navLinks,
  socialLinks,
  contactInfo,
} from "../../data/navigation";

const quickLinks = navLinks.filter(
  (link) => !link.children
);

export default function Footer() {

  return (

    <footer className="bg-heading text-white relative overflow-hidden">

      <div className="hero-shape blue -top-32 -left-32"></div>
      <div className="hero-shape gold -bottom-32 -right-32"></div>

      <div className="section-container py-20 relative z-10">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          {/* School Info */}

          <div>

            <Link
              to="/"
              className="flex items-center gap-4 mb-6"
            >

              <img
                src={schoolLogoLight}
                alt="Krishna International School"
                className="h-14"
              />

              <div>

                <h3 className="text-xl font-bold text-white">
                  Krishna
                </h3>

                <p className="text-sm text-secondary">
                  International School
                </p>

              </div>

            </Link>

            <p className="text-white/70 leading-7 mb-6">
              Krishna International School is committed to providing
              quality education in a safe, caring and inspiring
              environment where every child learns, grows and succeeds.
            </p>

            <div className="flex gap-3">

              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary transition flex items-center justify-center"
              >

                <FacebookIcon size={18} />

              </a>

              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary transition flex items-center justify-center"
              >

                <InstagramIcon size={18} />

              </a>

              <a
                href={socialLinks.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary transition flex items-center justify-center"
              >

                <YoutubeIcon size={18} />

              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">

              {quickLinks.map((link) => (

                <li key={link.path}>

                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-secondary transition"
                  >

                    {link.label}

                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* Admissions */}

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Admissions
            </h3>

            <ul className="space-y-4 text-white/70">

              <li>Admissions Open</li>

              <li>Pre-Primary to Middle School</li>

              <li>Smart Classrooms</li>

              <li>Experienced Faculty</li>

              <li>Safe Transport Facility</li>

              <li>Holistic Development</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Contact Us
            </h3>

            <div className="space-y-5">

              <div className="flex gap-3">

                <MapPin
                  size={20}
                  className="text-secondary mt-1 shrink-0"
                />

                <span className="text-white/70 leading-7">
                  {contactInfo.address}
                </span>

              </div>

              <div className="flex gap-3">

                <Phone
                  size={18}
                  className="text-secondary shrink-0 mt-1"
                />

                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-white/70 hover:text-secondary transition"
                >

                  {contactInfo.phone}

                </a>

              </div>

              <div className="flex gap-3">

                <Mail
                  size={18}
                  className="text-secondary shrink-0 mt-1"
                />

                <a
                  href={`mailto:${contactInfo.email1}`}
                  className="text-white/70 hover:text-secondary transition"
                >

                  {contactInfo.email1}

                </a>

              </div>

                            <div className="flex gap-3">

                <Mail
                  size={18}
                  className="text-secondary shrink-0 mt-1"
                />

                <a
                  href={`mailto:${contactInfo.email2}`}
                  className="text-white/70 hover:text-secondary transition"
                >

                  {contactInfo.email2}

                </a>

              </div>

              <div className="flex gap-3">

                <Clock
                  size={18}
                  className="text-secondary shrink-0 mt-1"
                />

                <span className="text-white/70">

                  {contactInfo.timings}

                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Bar */}

      <div className="border-t border-white/10 relative z-10">

        <div className="section-container py-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-white/60 text-sm text-center md:text-left">

            © {new Date().getFullYear()} Krishna International School. All Rights Reserved.

          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm">

            <Link
              to="/privacy-policy"
              className="text-white/60 hover:text-secondary transition"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="text-white/60 hover:text-secondary transition"
            >
              Terms & Conditions
            </Link>

            <Link
              to="/contact"
              className="text-white/60 hover:text-secondary transition"
            >
              Contact
            </Link>

          </div>

        </div>

      </div>

    </footer>

  );

}