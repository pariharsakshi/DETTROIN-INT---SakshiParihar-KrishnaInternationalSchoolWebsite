import QuickEnquiryCard from "../components/sections/QuickEnquiryCard";
import SectionHeading from "../components/common/SectionHeading";
import FAQSection from "../components/sections/FAQSection";

export default function AdmissionsPage() {

  const steps = [
    {
      title: "Submit Enquiry",
      description:
        "Complete the online enquiry form or visit our campus to receive the admission brochure and application form.",
    },
    {
      title: "Registration",
      description:
        "Submit the application form along with the required documents such as birth certificate, photographs and previous academic records.",
    },
    {
      title: "Interaction / Assessment",
      description:
        "Students attend a friendly interaction or a simple assessment depending on the class for which admission is sought.",
    },
    {
      title: "Admission Confirmation",
      description:
        "Selected students receive an admission offer based on eligibility and seat availability.",
    },
    {
      title: "Fee Payment",
      description:
        "Complete the admission fee payment to confirm the student's seat for the academic session.",
    },
  ];

  return (
    <div className="bg-offwhite min-h-screen">

      <section className="section-spacing-lg">

        <div className="section-container">

          <SectionHeading
            eyebrow="Admissions Open"
            title="Start Your Child's Learning Journey"
            subtitle="Join Krishna International School and become a part of a nurturing environment where every child is encouraged to learn, grow and excel."
            align="center"
          />

          <div className="grid lg:grid-cols-2 gap-14 mt-16">

            <QuickEnquiryCard />

            <div className="card p-8 lg:p-10">

              <h3 className="text-3xl font-bold text-heading mb-8">
                Admission Process
              </h3>

              <div className="space-y-8">

                {steps.map((step, index) => (

                  <div
                    key={step.title}
                    className="flex gap-5"
                  >

                    <div className="w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0">

                      {index + 1}

                    </div>

                    <div>

                      <h4 className="font-semibold text-heading text-lg mb-2">
                        {step.title}
                      </h4>

                      <p className="text-body leading-7">
                        {step.description}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      <FAQSection />

    </div>
  );

}