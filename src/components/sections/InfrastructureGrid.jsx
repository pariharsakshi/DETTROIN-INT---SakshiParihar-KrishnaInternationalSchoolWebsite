import { motion } from "framer-motion";
import {
  MonitorSmartphone,
  FlaskConical,
  Library,
  Trophy,
  Bus,
  ShieldCheck,
} from "lucide-react";
import SectionHeading from "../common/SectionHeading";

const facilities = [
  {
    icon: MonitorSmartphone,
    title: "Smart Classrooms",
    description:
      "Interactive smart classrooms equipped with modern technology for engaging and effective learning.",
  },
  {
    icon: FlaskConical,
    title: "Science & Computer Labs",
    description:
      "Fully equipped laboratories that encourage practical learning, innovation and scientific thinking.",
  },
  {
    icon: Library,
    title: "Modern Library",
    description:
      "A peaceful learning space with a rich collection of books, journals and digital learning resources.",
  },
  {
    icon: Trophy,
    title: "Sports Facilities",
    description:
      "Indoor and outdoor sports facilities that promote teamwork, fitness and overall personality development.",
  },
  {
    icon: Bus,
    title: "Safe Transport",
    description:
      "GPS-enabled school buses with trained drivers and staff to ensure safe daily transportation.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Secure Campus",
    description:
      "24×7 CCTV surveillance, security staff and a student-friendly environment focused on safety.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
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

export default function InfrastructureGrid() {
  return (
    <section className="section-spacing-lg bg-white">

      <div className="section-container">

        <SectionHeading
          eyebrow="Campus Facilities"
          title="Modern Infrastructure for Better Learning"
          subtitle="Our campus provides world-class facilities that create a safe, comfortable and inspiring environment for every student's academic and personal growth."
          align="center"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
        >

          {facilities.map((facility) => {

            const Icon = facility.icon;

            return (

              <motion.div
                key={facility.title}
                variants={item}
                className="card hover:-translate-y-2 transition-all duration-300 p-8"
              >

                <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center mb-6">

                  <Icon size={30} />

                </div>

                <h3 className="mb-4">
                  {facility.title}
                </h3>

                <p className="text-body leading-7">
                  {facility.description}
                </p>

              </motion.div>

            );

          })}

        </motion.div>

      </div>

    </section>
  );
}