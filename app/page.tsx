import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { Services } from "@/components/services";
import { HowItWorks } from "@/components/how-it-works";
import { Deliverables } from "@/components/deliverables";
import { RealProducers } from "@/components/real-producers";
import { WhyChooseUs } from "@/components/why-choose-us";
import { Team } from "@/components/team";
import { About } from "@/components/about";
import { Pricing } from "@/components/pricing";
import { Faq } from "@/components/faq";
import { ContactCta } from "@/components/contact-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Stats />
        <Services />
        <HowItWorks />
        <Deliverables />
        <RealProducers />
        <WhyChooseUs />
        <Team />
        <About />
        <Pricing />
        <Faq />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
