import { motion } from "framer-motion";
import { Eye, Target, CheckCircle } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import {
  aboutImage,
  visionMissionImage,
} from "../../data/images";

const missionPoints = [
  "Provide a safe and inspiring learning environment.",
  "Deliver academic excellence through modern teaching methods.",
  "Develop creativity, confidence and leadership skills.",
  "Promote discipline, values and social responsibility.",
  "Encourage innovation and lifelong learning.",
  "Prepare students for future academic and career success.",
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
    },
  }),
};

export default function AboutSection() {
  return (
    <section className="bg-light section-spacing-lg relative overflow-hidden">

      <div className="blob blob-primary w-72 h-72 -top-20 -left-20"></div>
      <div className="blob blob-secondary w-60 h-60 bottom-0 right-0"></div>

      <div className="section-container">

        {/* About School */}

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="relative"
          >
            <div className="image-hover image-shadow rounded-2xl">
              <img
                src={aboutImage}
                alt="Krishna International School"
                className="rounded-2xl"
              />
            </div>

            <div className="absolute -bottom-8 -right-8 glass rounded-2xl p-6 hidden lg:block">

              <h3 className="text-3xl font-bold text-primary">
                15+
              </h3>

              <p className="text-muted font-medium">
                Years of Excellence
              </p>

            </div>

          </motion.div>

          {/* Content */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >

            <SectionHeading
              eyebrow="About Krishna International School"
              title="Building Bright Futures Through Quality Education"
              subtitle="We believe that every child has unique potential. Our mission is to nurture confident, responsible and lifelong learners through academic excellence and holistic development."
            />

            <div className="space-y-5 text-body leading-8">

              <p>
                Krishna International School is committed to
                providing an engaging learning environment
                where students grow academically, socially and
                emotionally. Our experienced teachers combine
                modern teaching methods with strong moral values
                to help every child succeed.
              </p>

              <p>
                From early childhood education to higher
                classes, we focus on creativity, critical
                thinking, communication and practical learning.
                Every student receives the guidance and
                encouragement needed to become a confident and
                responsible citizen.
              </p>

            </div>

            {/* Highlights */}

            <div className="grid sm:grid-cols-2 gap-5 mt-10">

              <div className="card p-5">

                <h4 className="text-primary font-semibold mb-2">
                  Experienced Faculty
                </h4>

                <p className="text-sm text-muted">
                  Dedicated teachers providing personalized
                  attention and quality education.
                </p>

              </div>

              <div className="card p-5">

                <h4 className="text-primary font-semibold mb-2">
                  Smart Classrooms
                </h4>

                <p className="text-sm text-muted">
                  Interactive digital learning that makes
                  education engaging and effective.
                </p>

              </div>

              <div className="card p-5">

                <h4 className="text-primary font-semibold mb-2">
                  Safe Campus
                </h4>

                <p className="text-sm text-muted">
                  CCTV surveillance, secure transportation and
                  student-friendly infrastructure.
                </p>

              </div>

              <div className="card p-5">

                <h4 className="text-primary font-semibold mb-2">
                  Holistic Development
                </h4>

                <p className="text-sm text-muted">
                  Equal focus on academics, sports, arts and
                  extracurricular activities.
                </p>

              </div>

            </div>

          </motion.div>

        </div>

        {/* Vision & Mission */}

        <div className="grid lg:grid-cols-2 gap-10 mt-24">
                    {/* Vision */}

          <motion.div
            className="card p-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="flex items-center gap-4 mb-6">

              <div className="w-14 h-14 rounded-xl bg-[var(--color-pastel-blue)] flex items-center justify-center">
                <Eye
                  size={28}
                  className="text-primary"
                />
              </div>

              <h3 className="text-2xl font-bold text-heading">
                Our Vision
              </h3>

            </div>

            <p className="text-body leading-8 mb-6">
              To become a leading educational institution that
              empowers students with knowledge, character,
              creativity and confidence, preparing them to excel
              in a rapidly changing world while becoming
              responsible global citizens.
            </p>

            <div className="image-hover rounded-xl">
              <img
                src={visionMissionImage}
                alt="Our Vision"
                className="rounded-xl"
              />
            </div>

          </motion.div>

          {/* Mission */}

          <motion.div
            className="card p-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >

            <div className="flex items-center gap-4 mb-6">

              <div className="w-14 h-14 rounded-xl bg-[var(--color-pastel-yellow)] flex items-center justify-center">
                <Target
                  size={28}
                  className="text-secondary"
                />
              </div>

              <h3 className="text-2xl font-bold text-heading">
                Our Mission
              </h3>

            </div>

            <p className="text-body mb-6">
              We strive to provide a joyful, inclusive and
              future-ready learning experience where every
              student reaches their full potential.
            </p>

            <ul className="space-y-4">

              {missionPoints.map((point, index) => (

                <motion.li
                  key={index}
                  className="flex items-start gap-3"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={index * 0.08}
                >

                  <CheckCircle
                    size={20}
                    className="text-primary mt-1 shrink-0"
                  />

                  <span className="text-body">
                    {point}
                  </span>

                </motion.li>

              ))}

            </ul>

          </motion.div>

        </div>

      </div>

    </section>
  );
}