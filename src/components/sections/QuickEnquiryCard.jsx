import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function QuickEnquiryCard() {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    session: "2026-27",
    name: "",
    email: "",
    phone: "",
    grade: "",
    message: "",
  });

  const grades = [
    "Pre-Primary",
    "Nursery",
    "LKG",
    "UKG",
    "Class I",
    "Class II",
    "Class III",
    "Class IV",
    "Class V",
    "Class VI",
    "Class VII",
    "Class VIII",
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `Admission Enquiry - ${formData.grade}`;

    const body = `
Session : ${formData.session}

Name : ${formData.name}

Email : ${formData.email}

Phone : ${formData.phone}

Grade : ${formData.grade}

Message :
${formData.message}
`;

    window.location.href = `mailto:${encodeURIComponent(
      "admissions@krishnainternationalschool.com"
    )}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  const inputClass =
    "w-full rounded-xl border border-gray-200 px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition";

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
      }}
      className="card p-8 lg:p-10"
    >
      <span className="section-badge">
        Admission Enquiry
      </span>

      <h3 className="text-3xl font-bold text-heading mt-5 mb-2">
        Let's Connect
      </h3>

      <p className="text-body mb-8">
        Fill in your details and our admissions team will
        contact you as soon as possible.
      </p>

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        <select
          name="session"
          value={formData.session}
          onChange={handleChange}
          className={inputClass}
        >
          <option>2026-27</option>
          <option>2027-28</option>
        </select>

        <input
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          className={inputClass}
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          className={inputClass}
        />

        <input
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          className={inputClass}
        />

        <select
          name="grade"
          value={formData.grade}
          onChange={handleChange}
          className={inputClass}
          required
        >
          <option value="">
            Select Class
          </option>

          {grades.map((grade) => (
            <option
              key={grade}
              value={grade}
            >
              {grade}
            </option>
          ))}
        </select>

        <textarea
          rows={4}
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className={`${inputClass} resize-none`}
        />

        <button
          type="submit"
          className="btn-primary w-full flex justify-center items-center gap-2"
        >
          <Send size={18} />

          {submitted
            ? "Enquiry Sent"
            : "Send Enquiry"}
        </button>
      </form>
    </motion.div>
  );
}