import Button from "@/components/Button";
import HeroSection from "@/containers/home-page/hero-section";

export default function Home() {
  return (
    <main className="flex flex-col pt-[87px] lg:pt-[98px] xl:pt-[130px] desktop:pt-[147px] mb-5 md:mb-[18px] lg:mb-[14px] xl:mb-5 desktop:mb-6">
      <HeroSection />
    </main>
  );
}
