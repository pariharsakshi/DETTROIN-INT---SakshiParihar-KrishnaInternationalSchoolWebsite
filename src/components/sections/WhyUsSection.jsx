import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import {
  academicSystem,
  conceptLearning,
  experiencedFaculty,
  safeCampus,
} from "../../data/images";

const features = [
  {
    title: "Academic Excellence",
    description:
      "Our well-structured curriculum combines modern teaching techniques with strong academic foundations to help students achieve their highest potential.",

    points: [
      "Concept-based learning",
      "Smart classrooms",
      "Regular assessments",
      "Personalized attention",
    ],

    image: academicSystem,
  },

  {
    title: "Interactive Learning",
    description:
      "We encourage curiosity through practical activities, project-based learning and technology-enabled education that makes every lesson engaging.",

    points: [
      "Hands-on activities",
      "Digital learning",
      "Creative thinking",
      "Problem solving",
    ],

    image: conceptLearning,
  },

  {
    title: "Experienced Teachers",
    description:
      "Our qualified and passionate teachers mentor every child with care, ensuring academic growth along with confidence, discipline and leadership.",

    points: [
      "Expert faculty",
      "Student mentoring",
      "Regular guidance",
      "Friendly environment",
    ],

    image: experiencedFaculty,
  },

  {
    title: "Safe Campus",
    description:
      "Student safety is our highest priority. Our campus provides a secure, healthy and positive environment where children learn with confidence.",

    points: [
      "24×7 CCTV",
      "Secure transport",
      "Hygienic campus",
      "Medical support",
    ],

    image: safeCampus,
  },
];

const animation = (reverse = false) => ({
  hidden: {
    opacity: 0,
    x: reverse ? 60 : -60,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.7,
    },
  },
});

export default function WhyUsSection() {
  return (
    <section className="section-spacing-lg bg-light relative overflow-hidden">

      <div className="blob blob-primary w-72 h-72 -left-24 top-20"></div>
      <div className="blob blob-secondary w-60 h-60 right-0 bottom-0"></div>

      <div className="section-container">

        <SectionHeading
          eyebrow="Why Choose Us"
          title="Why Parents Choose Krishna International School"
          subtitle="We believe education is more than academics. Our focus is on developing confident, responsible and future-ready students through quality education and holistic development."
          align="center"
        />

        <div className="space-y-24 mt-16">

          {features.map((feature, index) => {

            const reverse = index % 2 !== 0;

            return (

              <div
                key={feature.title}
                className="grid lg:grid-cols-2 gap-16 items-center"
              >

                {/* Image */}

                <motion.div
                  variants={animation(reverse)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className={reverse ? "lg:order-2" : ""}
                >

                  <div className="image-hover image-shadow rounded-2xl">

                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="rounded-2xl"
                    />

                  </div>

                </motion.div>

                {/* Content */}

                <motion.div
                  variants={animation(!reverse)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className={reverse ? "lg:order-1" : ""}
                >

                  <span className="section-badge">
                    Excellence in Education
                  </span>

                  <h2 className="mb-5">
                    {feature.title}
                  </h2>

                  <p className="text-body leading-8 mb-8">
                    {feature.description}
                  </p>

                  <div className="space-y-4">

                    {feature.points.map((item) => (

                      <div
                        key={item}
                        className="flex items-center gap-3 card-flat p-4"
                      >

                        <CheckCircle
                          size={20}
                          className="text-primary shrink-0"
                        />

                        <span className="text-body font-medium">
                          {item}
                        </span>

                      </div>

                    ))}

                  </div>
                                    {/* Action Buttons */}

                  <div className="flex flex-wrap gap-4 mt-10">

                    <button className="btn-primary">
                      Explore More
                    </button>

                    <button className="btn-secondary">
                      Contact Us
                    </button>

                  </div>

                </motion.div>

              </div>

            );

          })}

        </div>

        {/* Bottom Highlight Section */}

        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <div className="bg-primary-gradient rounded-2xl p-10 lg:p-16 relative overflow-hidden">

            <div className="hero-shape blue -top-24 -left-24"></div>
            <div className="hero-shape gold -bottom-24 -right-24"></div>

            <div className="relative z-10 text-center">

              <span className="section-badge bg-white text-primary">
                Krishna International School
              </span>

              <h2 className="text-white mt-6 mb-5">
                Inspiring Excellence, Building Character
              </h2>

              <p className="text-white/90 max-w-3xl mx-auto leading-8 mb-10">
                We provide an environment where every student is encouraged to
                dream big, learn continuously and grow into a confident,
                compassionate and responsible individual.
              </p>

              <div className="grid md:grid-cols-4 gap-6">

                <div className="glass rounded-xl p-6">
                  <h3 className="text-4xl font-bold text-white mb-2">
                    15+
                  </h3>

                  <p className="text-white/80">
                    Years Experience
                  </p>
                </div>

                <div className="glass rounded-xl p-6">
                  <h3 className="text-4xl font-bold text-white mb-2">
                    1200+
                  </h3>

                  <p className="text-white/80">
                    Happy Students
                  </p>
                </div>

                <div className="glass rounded-xl p-6">
                  <h3 className="text-4xl font-bold text-white mb-2">
                    50+
                  </h3>

                  <p className="text-white/80">
                    Expert Teachers
                  </p>
                </div>

                <div className="glass rounded-xl p-6">
                  <h3 className="text-4xl font-bold text-white mb-2">
                    100%
                  </h3>

                  <p className="text-white/80">
                    Student Care
                  </p>
                </div>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}