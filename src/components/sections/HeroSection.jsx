import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { heroBanner1 } from "../../data/images";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <img
        src={heroBanner1}
        alt="Krishna International School"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="hero-overlay" />

      {/* Decorative Shapes */}
      <div className="hero-shape blue top-20 left-10" />
      <div className="hero-shape gold bottom-10 right-10" />

      {/* Content */}
      <div className="section-container hero-content">
        <div className="max-w-3xl">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-badge">
              🎓 Admissions Open 2026–27
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Empowering Young Minds
            <br />
            <span className="text-gradient">
              For A Bright Future
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-white/90 text-lg max-w-2xl mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Krishna International School provides a safe,
            inspiring and student-focused learning environment
            where every child develops confidence, creativity,
            leadership and academic excellence.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
           <div className="mt-10 flex flex-wrap gap-6">

  <Link
    to="/admissions"
    className="btn-primary w-52 h-14 text-lg"
  >
    Apply Now
  </Link>

  <Link
    to="/about"
    className="btn-secondary w-52 h-14 text-lg"
  >
    Explore School
  </Link>

</div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-8 mt-16 max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <div>
              <h3 className="text-white">15+</h3>
              <p className="text-white/80 text-sm">
                Years of Excellence
              </p>
            </div>

            <div>
              <h3 className="text-white">1200+</h3>
              <p className="text-white/80 text-sm">
                Happy Students
              </p>
            </div>

            <div>
              <h3 className="text-white">50+</h3>
              <p className="text-white/80 text-sm">
                Expert Teachers
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}