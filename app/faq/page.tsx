"use client";

import { faqsData } from "@/api/data-faq";
import AccordionCard from "@/components/cards/accordion-card";
import React, { useState } from "react";

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <>
      <section className="section-p bg-hero-driven bg-cover bg-no-repeat bg-dark dark:bg-light-dd bg-blend-multiply bg-top relative">
        <div className="container-x pt-10 md:flex-row flex-col gap-4 md:gap-12 relative pb-24 text-center text-white">
          <div className="mx-auto w-20 mb-2 bg-danger h-1 rounded-full lcg_scroll from_scale lcg_animate"></div>
          <h1 className="max-w-sm mx-auto text-[38px] md:text-4xl leading-10 font-extrabold md:leading-[3.2rem] mb-4 lcg_scroll from_scale lcg_animate">
            Frequently Asked Questions
          </h1>
          <p className="mb-3 lcg_will_animate from_bottom delay-1 lcg_scroll lcg_animate">
            Let&apos;s build your new experience
          </p>
        </div>
        {/* <div className="absolute h-24 bg-[#fff] -translate-y-20 w-full -bottom-24 rounded-t-[50px]"></div> */}
      </section>
      {/* faq */}

      {/* FAQ Section */}
      <section id="faq" className="section-p bg-light_">
        <div className="container-x">
          <div className="content text-center flex-center_ flex-col mb-10 hidden">
            <div className="w-20 mb-4 bg-danger h-1 rounded-full"></div>
            {/* <p className="uppercase mb-5 lcg_scroll from_scale lcg_animate">
            Starter Bundles
          </p> */}
            <h2 className="max-w-sm text-[32px] leading-8 lcg_scroll from_bottom lcg_animate">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqsData.map((item, index) => (
              <AccordionCard
                key={index}
                answer={item.answer}
                question={item.question}
                activeIndex={activeIndex}
                curIndex={index}
                setActiveIndex={setActiveIndex}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
