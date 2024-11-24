"use client";

import Link from "next/link";
import React, { useState } from "react";
import { BiPlus } from "react-icons/bi";

export default function FAQSection() {
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
      <section id="faq" className="section-p bg-light">
        <div className="container-x">
          <div className="content text-center flex-center flex-col mb-10">
            <div className="w-20 mb-4 bg-danger h-1 rounded-full"></div>
            {/* <p className="uppercase mb-5 lcg_scroll from_scale lcg_animate">
            Starter Bundles
          </p> */}
            <h2 className="max-w-sm text-[32px] leading-8 lcg_scroll from_bottom lcg_animate">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "How does NotLedia's AI enhance my notes?",
                a: "NotLedia's AI analyzes your input, structures it, and provides additional insights and connections you might have missed.",
              },
              {
                q: "Is my data safe with NotLedia's AI processing?",
                a: "Yes, we use state-of-the-art encryption and anonymization techniques to ensure your data remains private and secure.",
              },
              {
                q: "Can I use NotLedia offline?",
                a: "Yes, you can create notes offline. NotLedia's AI features will sync and process your notes when you're back online.",
              },
            ].map((item, index) => (
              <AccordionItem
                key={index}
                answer={item.a}
                question={item.q}
                activeIndex={activeIndex}
                curIndex={index}
                setActiveIndex={setActiveIndex}
              />
            ))}
            <div className="text-center">
              <p>
                Still have more queries? visit out faq page{" "}
                <Link href={"/faq"} className="text-secondary font-bold">
                  Read More
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

interface PropsItem {
  question: string;
  answer: string;
  activeIndex: number;
  curIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}
export function AccordionItem({
  question,
  answer,
  activeIndex,
  curIndex,
  setActiveIndex,
}: PropsItem) {
  return (
    <div className="border-2 border-muted/20 rounded-xl overflow-hidden">
      <div
        onClick={() =>
          setActiveIndex((prev) => (prev == curIndex ? -1 : curIndex))
        }
        className={`p-3 flex gap-2 justify-between bg-muted/10 ${
          activeIndex == curIndex ? "border-b border-b-muted/20 " : ""
        }`}>
        <h4 className="text-lg font-semibold">{question}</h4>
        <span
          className={`shrink-0 transition-all duration-300 ${
            activeIndex == curIndex ? "rotate-45" : ""
          }`}>
          <BiPlus fontSize={20} />
        </span>
      </div>
      <div
        className={`transition origin-top ${
          activeIndex == curIndex ? "" : "h-0"
        }`}>
        <p className="p-3">{answer}</p>
      </div>
    </div>
  );
}
