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
      <FeaturedProjects />
      <SkillsCarousel />
      <AboutPreview />
    </>
  );
}
