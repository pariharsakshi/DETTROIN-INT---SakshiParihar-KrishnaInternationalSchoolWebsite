import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import {
  sportsPhysical,
  culturalActivities,
  personalityDev,
  transportFacility,
} from "../../data/images";

const features = [
  {
    title: "Sports & Physical Education",
    description:
      "We encourage students to stay active through indoor and outdoor sports, helping them develop teamwork, discipline, confidence and a healthy lifestyle.",

    points: [
      "Indoor & Outdoor Sports",
      "Professional Sports Coaching",
      "Annual Sports Meet",
      "Yoga & Fitness Activities",
    ],

    image: sportsPhysical,
  },

  {
    title: "Arts & Cultural Activities",
    description:
      "Creativity is an essential part of learning. Students participate in music, dance, drama, painting and cultural celebrations throughout the year.",

    points: [
      "Dance & Music Classes",
      "Art & Craft Activities",
      "Annual Cultural Programs",
      "Festival Celebrations",
    ],

    image: culturalActivities,
  },

  {
    title: "Personality Development",
    description:
      "Our personality development programs help students build confidence, communication skills, leadership qualities and positive values for life.",

    points: [
      "Leadership Skills",
      "Public Speaking",
      "Communication Training",
      "Value Based Education",
    ],

    image: personalityDev,
  },

  {
    title: "Safe Transportation",
    description:
      "We provide secure and comfortable transportation with trained drivers, GPS-enabled buses and dedicated staff for student safety.",

    points: [
      "GPS Enabled Vehicles",
      "Experienced Drivers",
      "Safe Pickup & Drop",
      "Regular Vehicle Maintenance",
    ],

    image: transportFacility,
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

export default function HolisticDevelopment() {
  return (
    <section className="section-spacing-lg bg-light relative overflow-hidden">

      <div className="blob blob-primary w-72 h-72 -top-20 -left-20"></div>
      <div className="blob blob-secondary w-60 h-60 bottom-10 right-0"></div>

      <div className="section-container">

        <SectionHeading
          eyebrow="Beyond Academics"
          title="Holistic Development"
          subtitle="We nurture every student's physical, creative, emotional and social growth through a wide range of activities beyond the classroom."
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
                    Student Growth
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
                        className="card-flat p-4 flex items-center gap-3"
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
                      Explore Activities
                    </button>

                    <button className="btn-secondary">
                      Book a Campus Visit
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

          <div className="bg-primary-gradient rounded-2xl p-10 lg:p-16 relative overflow-hidden">

            <div className="hero-shape blue -top-24 -left-24"></div>
            <div className="hero-shape gold -bottom-24 -right-24"></div>

            <div className="relative z-10 text-center">

              <span className="section-badge bg-white text-primary">
                Complete Student Development
              </span>

              <h2 className="text-white mt-6 mb-5">
                Learning Beyond the Classroom
              </h2>

              <p className="text-white/90 max-w-3xl mx-auto leading-8 mb-10">
                At Krishna International School, education goes beyond books.
                We encourage students to discover their talents, develop life
                skills, build confidence and become responsible citizens through
                academics, sports, arts and leadership opportunities.
              </p>

              <div className="grid md:grid-cols-4 gap-6">

                <div className="glass rounded-xl p-6">
                  <h3 className="text-4xl font-bold text-white mb-2">
                    25+
                  </h3>

                  <p className="text-white/80">
                    Sports & Activities
                  </p>
                </div>

                <div className="glass rounded-xl p-6">
                  <h3 className="text-4xl font-bold text-white mb-2">
                    15+
                  </h3>

                  <p className="text-white/80">
                    Student Clubs
                  </p>
                </div>

                <div className="glass rounded-xl p-6">
                  <h3 className="text-4xl font-bold text-white mb-2">
                    100+
                  </h3>

                  <p className="text-white/80">
                    Annual Events
                  </p>
                </div>

                <div className="glass rounded-xl p-6">
                  <h3 className="text-4xl font-bold text-white mb-2">
                    100%
                  </h3>

                  <p className="text-white/80">
                    Holistic Learning
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