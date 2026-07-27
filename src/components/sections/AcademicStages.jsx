import { motion } from "framer-motion";
import SectionHeading from "../common/SectionHeading";
import {
  prePrimaryClassroom,
  primaryActivity,
  middleSchoolStudents,
  daycareToddlers,
} from "../../data/images";

const stages = [
  {
    title: "Pre-Primary",
    subtitle: "Playgroup • Nursery • LKG • UKG",
    description:
      "Our Pre-Primary program builds a joyful learning environment where children develop curiosity, creativity and confidence through fun, activity-based education.",

    features: [
      "Activity Based Learning",
      "Language & Communication",
      "Creative Arts & Music",
      "Motor Skill Development",
      "Social & Emotional Growth",
      "Healthy Learning Environment",
    ],

    image: prePrimaryClassroom,
  },

  {
    title: "Primary School",
    subtitle: "Class I – Class V",

    description:
      "Students strengthen their academic foundation through concept-based learning, practical activities and modern teaching methods that make every lesson engaging.",

    features: [
      "Strong Academic Foundation",
      "Interactive Smart Classes",
      "Computer Education",
      "Sports & Physical Activities",
      "Art & Creativity",
      "Personality Development",
    ],

    image: primaryActivity,
  },

  {
    title: "Middle School",
    subtitle: "Class VI – VIII",

    description:
      "Our middle school prepares students for future challenges by encouraging critical thinking, leadership, teamwork and independent learning.",

    features: [
      "Advanced Science Learning",
      "Mathematics Excellence",
      "Practical Laboratory Sessions",
      "Leadership Activities",
      "Public Speaking",
      "Career Awareness",
    ],

    image: middleSchoolStudents,
  },

  {
    title: "Day Care",
    subtitle: "1.5 – 3 Years",

    description:
      "A safe, caring and nurturing environment where toddlers enjoy learning through play while receiving personal attention from trained caregivers.",

    features: [
      "Safe & Secure Campus",
      "Experienced Caretakers",
      "Nutritious Meals",
      "Play Based Activities",
      "Comfortable Environment",
      "Regular Parent Updates",
    ],

    image: daycareToddlers,
  },
];

const fadeAnimation = (reverse = false) => ({
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

export default function AcademicStages() {
  return (
    <section className="section-spacing-lg bg-white">

      <div className="section-container">

        <SectionHeading
          eyebrow="Academics"
          title="Our Academic Programs"
          subtitle="We provide age-appropriate education designed to help every student achieve academic excellence while developing confidence, creativity and strong values."
          align="center"
        />

        <div className="space-y-24 mt-16">

          {stages.map((stage, index) => {

            const reverse = index % 2 !== 0;

            return (

              <div
                key={stage.title}
                className="grid lg:grid-cols-2 gap-14 items-center"
              >

                {/* Image */}

                <motion.div
                  variants={fadeAnimation(reverse)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className={`${reverse ? "lg:order-2" : ""}`}
                >

                  <div className="image-hover image-shadow rounded-2xl">

                    <img
                      src={stage.image}
                      alt={stage.title}
                      className="rounded-2xl"
                    />

                  </div>

                </motion.div>

                {/* Content */}

                <motion.div
                  variants={fadeAnimation(!reverse)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className={`${reverse ? "lg:order-1" : ""}`}
                >

                  <span className="section-badge">
                    {stage.subtitle}
                  </span>

                  <h2 className="mb-5">
                    {stage.title}
                  </h2>

                  <p className="text-body leading-8 mb-8">
                    {stage.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4">

                    {stage.features.map((item) => (

                      <div
                        key={item}
                        className="card-flat p-4 flex items-center gap-3"
                      >

                        <div className="w-3 h-3 rounded-full bg-[var(--color-secondary)]"></div>

                        <span className="text-body font-medium">
                          {item}
                        </span>

                      </div>

                    ))}

                  </div>
                                    {/* Action Buttons */}

                  <div className="flex flex-wrap gap-4 mt-10">

                    <button className="btn-primary">
                      Learn More
                    </button>

                    <button className="btn-secondary">
                      Admissions Open
                    </button>

                  </div>

                </motion.div>

              </div>

            );

          })}

        </div>

        {/* Bottom CTA */}

        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <div className="bg-primary-gradient rounded-2xl p-10 lg:p-16 text-center relative overflow-hidden">

            <div className="hero-shape blue -top-20 -left-20"></div>
            <div className="hero-shape gold -bottom-20 -right-20"></div>

            <div className="relative z-10">

              <span className="section-badge bg-white text-primary">
                Admissions 2026–27
              </span>

              <h2 className="text-white mt-6 mb-5">
                Give Your Child the Best Start for a Bright Future
              </h2>

              <p className="text-white/90 max-w-3xl mx-auto leading-8 mb-8">
                At Krishna International School, we believe every child deserves
                quality education, caring teachers, modern classrooms and
                opportunities to discover their full potential.
              </p>

              <div className="flex flex-wrap justify-center gap-5">

                <button className="btn-gold">
                  Apply Now
                </button>

                <button className="btn-secondary bg-white text-primary border-white hover:bg-transparent hover:text-white">
                  Contact Us
                </button>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}