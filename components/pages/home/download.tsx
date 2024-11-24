import { Section } from "@/components/wrappers/section";
import { ImagesMobile } from "@/public/assets";
import Image from "next/image";

const Download = (): JSX.Element => {
  return (
    <div className="my-14 py-14 px-8 bg-bg text-white">
      <Section>
        <div className="md:grid md:grid-cols-2 md:gap-10 items-center">
          <div className="flex gap-6 flex-col">
            <h1 className="xl:text-2xl text-xl capitalize font-sans font-medium xl:leading-relaxed">
              Download Your Movies Watch Offline. <br /> Enjoy on Your Mobile
            </h1>
            <p className="text-text text-sm xl:text-base leading-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries..
            </p>
            <div className="flex gap-4 md:text-lg text-sm">
              <div className="flex-colo bg-black text-subMain px-6 py-3 rounded font-bold">
                HD 4K
              </div>
              <div className="flex flex-row items-center gap-4 bg-black text-subMain px-6 py-3 rounded font-bold">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                2K
              </div>
            </div>
          </div>
          <div>
            <Image
              src={ImagesMobile}
              alt="Mobile app"
              className="w-full object-contain"
            />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Download;
