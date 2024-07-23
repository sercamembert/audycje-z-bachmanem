import Button from "@/components/Buttons/Button";
import HeroSection from "@/containers/home-page/hero-section";
import AboutSection from "@/containers/home-page/about-section";

export default function Home() {
  return (
    <main className="flex flex-col gap-12 lg:gap-28 xl:gap-40 desktop:gap-48 pt-[87px] lg:pt-[98px] xl:pt-[130px] desktop:pt-[147px] mb-[200px]">
      <HeroSection />
      <AboutSection />
    </main>
  );
}
