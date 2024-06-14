import React from "react";
import {
  BookOpenIcon,
  Brain,
  MessagesSquareIcon,
  Settings2Icon,
} from "lucide-react";

const KeyFeatures = () => {
  return (
    <>
      <div className="container py-24 lg:py-32">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-12">
          <div className="text-center">
            <div className="flex justify-center items-center w-12 h-12 bg-primary border rounded-full mx-auto">
              <Brain className="flex-shrink-0 w-5 h-5 text-primary-foreground" />
            </div>
            <div className="mt-3">
              <h3 className="text-lg font-semibold ">
                Natural Language Processing
              </h3>
              <p className="mt-1 text-muted-foreground">
                Our AI understands and processes human language, making
                interactions feel natural and engaging.
              </p>
            </div>
          </div>
          <div className="text-center">
            <div className="flex justify-center items-center w-12 h-12 bg-primary border rounded-full mx-auto">
              <Settings2Icon className="flex-shrink-0 w-5 h-5 text-primary-foreground" />
            </div>
            <div className="mt-3">
              <h3 className="text-lg font-semibold ">Multi-Channel Support</h3>
              <p className="mt-1 text-muted-foreground">
                Engage with your customers on their preferred platforms, from
                web chat and email to social media and beyond.
              </p>
            </div>
          </div>
          <div className="text-center">
            <div className="flex justify-center items-center w-12 h-12 bg-primary border rounded-full mx-auto">
              <BookOpenIcon className="flex-shrink-0 w-5 h-5 text-primary-foreground" />
            </div>
            <div className="mt-3">
              <h3 className="text-lg font-semibold ">Analytics & Insights</h3>
              <p className="mt-1 text-muted-foreground">
                Gain valuable insights from customer interactions to
                continuously improve your service and business strategies.
              </p>
            </div>
          </div>
          <div className="text-center">
            <div className="flex justify-center items-center w-12 h-12 bg-primary border rounded-full mx-auto">
              <MessagesSquareIcon className="flex-shrink-0 w-5 h-5 text-primary-foreground" />
            </div>
            <div className="mt-3">
              <h3 className="text-lg font-semibold ">Seamless Integration</h3>
              <p className="mt-1 text-muted-foreground">
                Easily integrate our AI with your existing systems and
                workflows, ensuring a smooth transition and minimal disruption.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default KeyFeatures;
