"use client";

import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import KeyFeatures from "@/components/KeyFeatures";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import WhyUs from "@/components/WhyUs";
import React, { useRef } from "react";

const Page = () => {
  const CTARef = useRef<HTMLDivElement>(null);
  const whyUsRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <Navbar />
      <Hero ctaRef={CTARef} whyUsRef={whyUsRef} />
      <div ref={whyUsRef}>
        <WhyUs />
      </div>
      <KeyFeatures />
      <Products />
      <div ref={CTARef}>
        <CTA />
      </div>
      <Footer />
    </div>
  );
};

export default Page;
