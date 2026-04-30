import HeroSection from "../components/HeroSection";
import ServicesPreview from "../components/ServicesPreview";
import AboutSection from "../components/AboutSection";
import CoursePreview from "../components/CoursePreview";
import TestimonialsSection from "../components/TestimonialsSection";
import AnnouncementBanner from "../components/AnnouncementBanner";
import { heroImage, courseImage } from "@/lib/images";

export default function Home() {
  return (
    <div>
      <AnnouncementBanner />
      <HeroSection heroImage={heroImage} />
      <ServicesPreview />
      <AboutSection />
      <CoursePreview courseImage={courseImage} />
      <TestimonialsSection />
    </div>
  );
}
