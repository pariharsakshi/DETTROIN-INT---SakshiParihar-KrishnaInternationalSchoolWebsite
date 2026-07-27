import { motion } from "framer-motion";
import { Calendar, Newspaper, BookOpen } from "lucide-react";

export default function BlogPage() {
  return (
    <section className="bg-offwhite section-spacing-lg">
      <div className="section-container">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="section-badge">School Updates</span>

          <h1 className="text-4xl md:text-5xl font-bold text-heading mt-5">
            News & Blog
          </h1>

          <p className="mt-6 text-body text-lg leading-8">
            Stay connected with Krishna International School through our
            latest news, student achievements, academic events, competitions,
            celebrations, and educational articles.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          <motion.div
            whileHover={{ y: -8 }}
            className="card p-8 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <Newspaper className="text-primary" size={30} />
            </div>

            <h3 className="text-xl font-semibold text-heading mb-3">
              School News
            </h3>

            <p className="text-body">
              Get updates about campus activities, competitions,
              achievements, and important announcements.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="card p-8 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-5">
              <BookOpen className="text-secondary" size={30} />
            </div>

            <h3 className="text-xl font-semibold text-heading mb-3">
              Learning Articles
            </h3>

            <p className="text-body">
              Read educational blogs, parenting tips, and learning resources
              shared by our experienced educators.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="card p-8 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
              <Calendar className="text-green-600" size={30} />
            </div>

            <h3 className="text-xl font-semibold text-heading mb-3">
              Events
            </h3>

            <p className="text-body">
              Explore upcoming school events, celebrations, workshops,
              seminars, and annual functions.
            </p>
          </motion.div>

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="card mt-16 p-12 text-center"
        >
          <h2 className="text-3xl font-bold text-heading">
            Coming Soon
          </h2>

          <p className="text-body text-lg mt-4 max-w-2xl mx-auto">
            We are preparing exciting articles, event highlights,
            student success stories, and educational insights.
            Stay tuned for regular updates from Krishna International School.
          </p>
        </motion.div>

      </div>
    </section>
  );
}