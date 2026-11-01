import Navbar from "./_components/Navbar";
import HeroSection from "./_components/HeroSection";
import ProjectsSection from "./_components/ProjectsSection";
import AboutSection from "./_components/AboutSection";
import FaqSection from "./_components/FaqSection";
import ContactSection from "./_components/ContactSection";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="page-offset">
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
