import FeaturesCarousel from '@/components/sections/features-carousel';
import FeaturesGrid from '@/components/sections/features-grid';
import Hero from '@/components/sections/hero';
import Logos from '@/components/sections/logos';
import WhyWeBegan from '@/components/sections/why-we-began';

export default function Home() {
  return (
    <>
      <Hero />
      <Logos />
      <FeaturesGrid />
      <FeaturesCarousel />
      <WhyWeBegan />
    </>
  );
}
