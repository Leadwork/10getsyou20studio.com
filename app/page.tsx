import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { HowItWorks } from "@/components/how-it-works";
import { WhyChooseUs } from "@/components/why-choose-us";
import { About } from "@/components/about";
import { Faq } from "@/components/faq";
import { ContactCta } from "@/components/contact-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Services />
        <HowItWorks />
        <WhyChooseUs />
        <About />
        <Faq />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
