import React, { RefObject } from "react";
import { Button } from "./ui/Button";

const Hero = ({
  ctaRef,
  whyUsRef,
}: {
  ctaRef: RefObject<HTMLDivElement>;
  whyUsRef: RefObject<HTMLDivElement>;
}) => {
  return (
    <div className="relative overflow-hidden py-24 lg:py-32">
      <div className="relative z-10">
        <div className="container py-10 lg:py-16">
          <div className="max-w-2xl text-center mx-auto">
            <p className="">Revolutionizing Customer Service with AI</p>
            <div className="mt-5 max-w-2xl">
              <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                Turn your clients into lifetime customers
              </h1>
            </div>
            <div className="mt-5 max-w-3xl">
              <p className="text-xl text-muted-foreground">
                Our AI-driven solutions are designed to enhance efficiency,
                boost satisfaction, and drive growth for your business.
              </p>
            </div>
            <div className="mt-8 gap-3 flex justify-center">
              <Button
                size={"lg"}
                onClick={() =>
                  ctaRef.current!.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }
              >
                Get started
              </Button>
              <Button
                size={"lg"}
                variant={"outline"}
                onClick={() =>
                  whyUsRef.current!.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }
              >
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
