import { motion } from "framer-motion";
import {
  ShieldCheck,
  HandHeart,
  Award,
  Lightbulb,
  Users,
  BookOpen,
} from "lucide-react";
import SectionHeading from "../common/SectionHeading";

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "We encourage honesty, responsibility and ethical values in every student.",
  },
  {
    icon: HandHeart,
    title: "Respect",
    description:
      "Students learn to respect themselves, others and every culture around them.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We inspire students to give their best in academics, sports and life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Creative thinking and problem-solving are encouraged every day.",
  },
  {
    icon: Users,
    title: "Teamwork",
    description:
      "Collaboration and leadership prepare students for future success.",
  },
  {
    icon: BookOpen,
    title: "Lifelong Learning",
    description:
      "We nurture curiosity and develop a passion for continuous learning.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function ValuesGrid() {
  return (
    <section className="section-spacing-lg bg-light">

      <div className="section-container">

        <SectionHeading
          eyebrow="Our Values"
          title="Building Strong Character for Life"
          subtitle="Along with academic excellence, we focus on values that help students become confident, responsible and compassionate individuals."
          align="center"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
        >

          {values.map((value) => {

            const Icon = value.icon;

            return (

              <motion.div
                key={value.title}
                variants={item}
                className="card text-center p-8 hover:-translate-y-2 transition-all duration-300"
              >

                <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center mx-auto mb-6">

                  <Icon size={30} />

                </div>

                <h3 className="mb-4">
                  {value.title}
                </h3>

                <p className="text-body leading-7">
                  {value.description}
                </p>

              </motion.div>

            );

          })}

        </motion.div>

      </div>

    </section>
  );
}