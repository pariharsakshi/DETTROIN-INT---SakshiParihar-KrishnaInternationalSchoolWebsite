import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionHeading from "../common/SectionHeading";

const faqs = [
  {
    question: "How can I apply for admission?",
    answer:
      "You can begin the admission process by filling out the enquiry form or visiting our campus. Our admission team will guide you through document verification, interaction and fee details.",
  },
  {
    question: "What classes are offered at Krishna International School?",
    answer:
      "We offer education from Pre-Primary to Middle School with a balanced curriculum that focuses on academics, creativity, sports and personality development.",
  },
  {
    question: "Is transportation available?",
    answer:
      "Yes. We provide safe transportation through GPS-enabled school buses operated by experienced drivers with trained support staff.",
  },
  {
    question: "What extracurricular activities are available?",
    answer:
      "Students can participate in sports, music, dance, art, public speaking, cultural programs, leadership activities and various clubs throughout the academic year.",
  },
  {
    question: "How does the school ensure student safety?",
    answer:
      "Our campus is monitored through CCTV surveillance, trained security staff, visitor verification and safe transport facilities to ensure every student's wellbeing.",
  },
  {
    question: "Do you organize parent-teacher meetings?",
    answer:
      "Yes. Regular parent-teacher meetings are conducted to discuss academic progress, behaviour, strengths and areas of improvement.",
  },
];

export default function FAQSection() {

  const [open, setOpen] = useState(0);

  return (

    <section className="section-spacing-lg bg-white">

      <div className="section-container max-w-4xl">

        <SectionHeading
          eyebrow="Frequently Asked Questions"
          title="Have Questions? We're Here to Help"
          subtitle="Find answers to the most common questions about admissions, academics, facilities and student life."
          align="center"
        />

        <div className="space-y-5 mt-16">

          {faqs.map((faq, index) => {

            const active = open === index;

            return (

              <div
                key={faq.question}
                className={`rounded-2xl overflow-hidden border transition-all duration-300 ${
                  active
                    ? "border-primary shadow-lg"
                    : "border-gray-200 hover:border-primary/40"
                }`}
              >

                <button
                  onClick={() =>
                    setOpen(active ? null : index)
                  }
                  className="w-full flex justify-between items-center text-left p-6"
                >

                  <h3 className="font-semibold text-lg text-heading pr-8">
                    {faq.question}
                  </h3>

                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      active ? "rotate-180 text-primary" : ""
                    }`}
                  />

                </button>

                <AnimatePresence>

                  {active && (

                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                      className="overflow-hidden"
                    >

                      <div className="px-6 pb-6 text-body leading-8">

                        {faq.answer}

                      </div>

                    </motion.div>

                  )}

                </AnimatePresence>

              </div>

            );

          })}

        </div>

      </div>

    </section>

  );

}