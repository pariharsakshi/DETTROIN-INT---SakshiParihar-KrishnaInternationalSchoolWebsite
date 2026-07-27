import HeroSection from '../components/sections/HeroSection';
import IntroRow from '../components/sections/IntroRow';
import AboutSection from '../components/sections/AboutSection';
import AcademicStages from '../components/sections/AcademicStages';
import WhyUsSection from '../components/sections/WhyUsSection';
import HolisticDevelopment from '../components/sections/HolisticDevelopment';
import InfrastructureGrid from '../components/sections/InfrastructureGrid';
import ValuesGrid from '../components/sections/ValuesGrid';
import TestimonialCarousel from '../components/sections/TestimonialCarousel';
import FAQSection from '../components/sections/FAQSection';
import FloatingButtons from '../components/common/FloatingButtons';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroRow />
      <AboutSection />
      <AcademicStages />
      <WhyUsSection />
      <HolisticDevelopment />
      <InfrastructureGrid />
      <ValuesGrid />
      <TestimonialCarousel />
      <FAQSection />
      <FloatingButtons />
    </>
  );
}
