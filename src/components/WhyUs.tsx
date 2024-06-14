import React from "react";
import { ThumbsUpIcon, Users2Icon, Zap } from "lucide-react";

const WhyUs = () => {
  return (
    <>
      <div className="container py-24 lg:py-32">
        <div className="max-w-2xl mx-auto">
          <div className="grid gap-12">
            <div>
              <h2 className="text-3xl font-bold lg:text-4xl">Why us?</h2>
              <p className="mt-3 text-muted-foreground">
                At MyHelpDesk, we leverage cutting-edge artificial intelligence
                to transform your customer service experience.
              </p>
            </div>
            <div className="space-y-6 lg:space-y-10">
              <div className="flex">
                <Zap className="flex-shrink-0 mt-2 h-6 w-6" />
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold">
                    Instant Response
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    Reduce wait times with instant, accurate responses to common
                    inquiries, freeing up your team for more complex tasks.
                  </p>
                </div>
              </div>

              <div className="flex">
                <Users2Icon className="flex-shrink-0 mt-2 h-6 w-6" />
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold">
                    Personalized Interactions
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    Our AI learns from every interaction, providing personalized
                    support that makes every customer feel valued.
                  </p>
                </div>
              </div>

              <div className="flex">
                <ThumbsUpIcon className="flex-shrink-0 mt-2 h-6 w-6" />
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold">
                    Scalable Solutions
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    { `Whether you're a small startup or a large enterprise, our AI
                    scales with your business needs, adapting to your growth.` }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyUs;
