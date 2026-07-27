import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
} from "lucide-react";
import SectionHeading from "../components/common/SectionHeading";
import { contactInfo } from "../data/navigation";

export default function ContactPage() {

  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    const subject =
      formData.subject || "General Enquiry";

    const body = `
Name : ${formData.name}

Email : ${formData.email}

Phone : ${formData.phone}

Message :

${formData.message}
`;

    window.location.href = `mailto:${contactInfo.email1}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);

    setTimeout(() => {

      setSubmitted(false);

    }, 3000);

  };

  const inputClass =
    "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition";

  return (

    <div className="bg-offwhite min-h-screen">

      <section className="section-spacing-lg">

        <div className="section-container">

          <SectionHeading
            eyebrow="Contact Us"
            title="We're Here To Help"
            subtitle="Have questions about admissions or academics? Reach out to our team and we'll be happy to assist you."
            align="center"
          />

          <div className="grid lg:grid-cols-3 gap-12 mt-16">

            {/* Contact Cards */}

            <motion.div
              initial={{
                opacity: 0,
                x: -40,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              className="space-y-6"
            >

              <div className="card p-6 flex gap-4">

                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">

                  <MapPin className="text-primary" />

                </div>

                <div>

                  <h3 className="font-semibold text-heading mb-2">
                    Visit Our Campus
                  </h3>

                  <p className="text-body leading-7">
                    {contactInfo.address}
                  </p>

                </div>

              </div>

              <div className="card p-6 flex gap-4">

                <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center">

                  <Phone className="text-secondary" />

                </div>

                <div>

                  <h3 className="font-semibold text-heading mb-2">
                    Call Us
                  </h3>

                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="text-body hover:text-primary"
                  >
                    {contactInfo.phone}
                  </a>

                </div>

              </div>

              <div className="card p-6 flex gap-4">

                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center">

                  <Mail className="text-blue-600" />

                </div>

                <div>

                  <h3 className="font-semibold text-heading mb-2">
                    Email Us
                  </h3>

                  <a
                    href={`mailto:${contactInfo.email1}`}
                    className="block text-body hover:text-primary"
                  >
                    {contactInfo.email1}
                  </a>

                  <a
                    href={`mailto:${contactInfo.email2}`}
                    className="block text-body hover:text-primary mt-1"
                  >
                    {contactInfo.email2}
                  </a>

                </div>

              </div>

              <div className="card p-6 flex gap-4">

                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">

                  <Clock className="text-green-600" />

                </div>

                <div>

                  <h3 className="font-semibold text-heading mb-2">
                    School Hours
                  </h3>

                  <p className="text-body">
                    {contactInfo.timings}
                  </p>

                </div>

              </div>

            </motion.div>

            {/* Contact Form */}

            <motion.div
              initial={{
                opacity: 0,
                x: 40,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
              className="lg:col-span-2 card p-8 lg:p-10"
            >

              <span className="section-badge">
                Send Message
              </span>

              <h2 className="text-3xl font-bold text-heading mt-5 mb-2">
                Let's Talk
              </h2>

              <p className="text-body mb-8">
                Fill out the form below and our team will
                get back to you as soon as possible.
              </p>

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                <div className="grid md:grid-cols-2 gap-5">

                  <input
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />

                </div>

                <div className="grid md:grid-cols-2 gap-5">

                  <input
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />

                  <input
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={inputClass}
                  />

                </div>

                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                  className={`${inputClass} resize-none`}
                />

                <button
                  type="submit"
                  className="btn-primary w-full md:w-auto flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  {submitted ? "Message Sent" : "Send Message"}
                </button>

              </form>

            </motion.div>

          </div>

          {/* Google Map */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="mt-20 overflow-hidden rounded-3xl shadow-xl border border-gray-200"
          >

            <iframe
              title="Krishna International School Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.660080497991!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9f8f1b7%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwMzUnNDAuNiJF!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />

          </motion.div>

        </div>

      </section>

    </div>

  );

}
