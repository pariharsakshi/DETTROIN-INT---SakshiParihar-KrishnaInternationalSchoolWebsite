import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import QuickEnquiryCard from './QuickEnquiryCard';

export default function IntroRow() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left: Intro Text */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              eyebrow="Welcome to Excellence"
              title="Best School in Aligarh for Holistic Education"
              subtitle="Excellence International School is one of the leading educational institutions in Aligarh, Uttar Pradesh. We are dedicated to shaping young minds through a balanced blend of academics, values, creativity, and physical development — preparing students to confidently face the future."
            />
            <div className="space-y-4 text-body leading-relaxed">
              <p>
                Founded with a vision to provide world-class education in a nurturing
                environment, our school offers a comprehensive curriculum from Playgroup
                to Class VIII. Our experienced faculty, modern infrastructure, and
                child-centric teaching approach ensure that every student receives
                individualized attention and support.
              </p>
              <p>
                At Excellence International School, we believe education goes beyond
                textbooks. Our holistic approach combines strong academics with sports,
                arts, personality development, and value-based learning to develop
                well-rounded individuals who are ready for tomorrow&apos;s challenges.
              </p>
            </div>
          </motion.div>

          {/* Right: Quick Enquiry Card */}
          <div className="lg:col-span-2">
            <QuickEnquiryCard />
          </div>
        </div>
      </div>
    </section>
  );
}
