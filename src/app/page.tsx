import AboutPreview from '@/components/sections/about-preview';
import FeaturedProjects from '@/components/sections/featured-projects';
import Hero from '@/components/sections/hero';
import SkillsCarousel from '@/components/sections/skills-carousel';
import TechStack from '@/components/sections/tech-stack';

export default function Home() {
  return (
    <>
      <Hero />
      <TechStack />
      {/* Wrapper for gradient blobs that span multiple sections */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-[20%] left-1/2 h-[80vh] w-[80%] -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-500/20 via-fuchsia-500/15 to-orange-400/20 blur-[100px] will-change-transform" />
        </div>
        <FeaturedProjects />
        <SkillsCarousel />
      </div>
      <AboutPreview />
    </>
  );
}
