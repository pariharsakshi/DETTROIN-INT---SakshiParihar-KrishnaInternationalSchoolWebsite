import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
} from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import {
  testimonialAvatar1,
  testimonialAvatar2,
  testimonialAvatar3,
  testimonialAvatar4,
  testimonialAvatar5,
} from "../../data/images";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    relation: "Parent of Aarav",
    avatar: testimonialAvatar1,
    rating: 5,
    quote:
      "Krishna International School has provided an excellent learning environment. The teachers are caring, supportive and always encourage students to perform their best.",
  },

  {
    id: 2,
    name: "Priya Verma",
    relation: "Parent of Ananya",
    avatar: testimonialAvatar2,
    rating: 5,
    quote:
      "The school's focus on academics along with extracurricular activities has helped my daughter become more confident and responsible.",
  },

  {
    id: 3,
    name: "Amit Singh",
    relation: "Parent of Kabir",
    avatar: testimonialAvatar3,
    rating: 5,
    quote:
      "The teachers give personal attention to every student. We are very happy with the progress our son has made over the last year.",
  },

  {
    id: 4,
    name: "Sneha Patel",
    relation: "Parent of Diya",
    avatar: testimonialAvatar4,
    rating: 5,
    quote:
      "The campus is safe, classrooms are modern and the management is always supportive. We highly recommend this school.",
  },

  {
    id: 5,
    name: "Vikas Gupta",
    relation: "Parent of Rohan",
    avatar: testimonialAvatar5,
    rating: 5,
    quote:
      "The balance between academics, sports and personality development makes Krishna International School the perfect choice for children.",
  },
];

export default function TestimonialCarousel() {

  const [current, setCurrent] = useState(0);
  const [cards, setCards] = useState(3);

  useEffect(() => {

    const resize = () => {

      if (window.innerWidth < 768) {

        setCards(1);

      } else if (window.innerWidth < 1024) {

        setCards(2);

      } else {

        setCards(3);

      }

    };

    resize();

    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);

  }, []);

  const next = () => {

    setCurrent((prev) =>
      prev + cards >= testimonials.length ? 0 : prev + 1
    );

  };

  const prev = () => {

    setCurrent((prev) =>
      prev === 0
        ? Math.max(0, testimonials.length - cards)
        : prev - 1
    );

  };

  useEffect(() => {

    const timer = setInterval(next, 5000);

    return () => clearInterval(timer);

  }, [current, cards]);

  const visible = testimonials.slice(current, current + cards);

  if (visible.length < cards) {

    visible.push(
      ...testimonials.slice(0, cards - visible.length)
    );

  }

  return (

    <section className="section-spacing-lg bg-light overflow-hidden">

      <div className="section-container">

        <SectionHeading
          eyebrow="Testimonials"
          title="What Parents Say About Us"
          subtitle="The trust and appreciation of our parents inspire us to provide quality education and a nurturing environment every day."
          align="center"
        />

        <div className="relative mt-16">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <AnimatePresence mode="popLayout">

              {visible.map((item, index) => (

                <motion.div
                  key={`${item.id}-${current}`}
                  initial={{
                    opacity: 0,
                    y: 30,
                    scale: 0.95,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    y: -20,
                    scale: 0.95,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="card p-8 relative"
                >

                  <Quote
                    size={42}
                    className="absolute top-6 right-6 text-primary/10"
                  />

                  <div className="flex gap-1 mb-6">

                    {[...Array(item.rating)].map((_, i) => (

                      <Star
                        key={i}
                        size={18}
                        className="fill-yellow-400 text-yellow-400"
                      />

                    ))}

                  </div>

                  <p className="text-body leading-8 italic mb-8">
                    "{item.quote}"
                  </p>

                  <div className="flex items-center gap-4">
                                        <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />

                    <div>

                      <h4 className="font-semibold text-heading">
                        {item.name}
                      </h4>

                      <p className="text-sm text-body">
                        {item.relation}
                      </p>

                    </div>

                  </div>

                </motion.div>

              ))}

            </AnimatePresence>

          </div>

          {/* Navigation */}

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 hidden lg:flex w-12 h-12 rounded-full bg-white shadow-lg items-center justify-center hover:bg-primary hover:text-white transition-all"
          >

            <ChevronLeft size={22} />

          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 hidden lg:flex w-12 h-12 rounded-full bg-white shadow-lg items-center justify-center hover:bg-primary hover:text-white transition-all"
          >

            <ChevronRight size={22} />

          </button>

        </div>

        {/* Indicators */}

        <div className="flex justify-center gap-3 mt-10">

          {testimonials.map((_, index) => (

            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`transition-all rounded-full ${
                index === current
                  ? "w-8 h-2 bg-primary"
                  : "w-2 h-2 bg-primary/30 hover:bg-primary/60"
              }`}
            />

          ))}

        </div>

      </div>

    </section>

  );

}
                  