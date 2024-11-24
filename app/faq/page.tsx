"use client";

import React, { useState } from "react";
import { BiPlus } from "react-icons/bi";

export const faqsData = [
  {
    question: "What is Kamflix?",
    answer:
      "Kamflix is a comprehensive movie database and social platform for film enthusiasts. It allows users to discover new movies, track their watchlist, rate and review films, and connect with other movie lovers.",
  },
  {
    question: "How do I create an account?",
    answer:
      "To create an account, click on the 'Sign Up' button in the top right corner of the homepage. Fill in your details, including your email address and a secure password. Once you've submitted the form, you'll receive a confirmation email to activate your account.",
  },
  {
    question: "Is Kamflix free to use?",
    answer:
      "Yes, Kamflix offers a free tier with access to basic features. We also offer premium subscriptions with additional benefits such as ad-free browsing, early access to new features, and exclusive content.",
  },
  {
    question: "How can I add a movie to my watchlist?",
    answer:
      "To add a movie to your watchlist, navigate to the movie's detail page and click on the 'Add to Watchlist' button. You can view and manage your watchlist from your user profile.",
  },
  {
    question: "How do I write a review?",
    answer:
      "To write a review, go to the movie's detail page and scroll down to the 'Reviews' section. Click on 'Write a Review' and you'll be prompted to rate the movie and write your thoughts. Remember to follow our community guidelines when writing reviews.",
  },
];

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
              <AccordionItem
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

interface PropsItem {
  question: string;
  answer: string;
  activeIndex: number;
  curIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

export const AccordionItem = ({
  question,
  answer,
  activeIndex,
  curIndex,
  setActiveIndex,
}: PropsItem) => {
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
          activeIndex == curIndex ? "" : "__scale-0 h-0"
        }`}>
        <p className="p-3">{answer}</p>
      </div>
    </div>
  );
};
