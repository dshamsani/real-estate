import type { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { AnimationTitles } from "../components/AnimationTitles";
import { MotionIn } from "../components/MotionIn";
import { DeveloperLogoCard } from "../components/DeveloperLogoCard";

import { DEVELOPERS_BOTTOM, DEVELOPERS_TOP, DEVS_BREAKPOINTS_BOTTOM, DEVS_BREAKPOINTS_TOP } from "@/constants/developers";

export const Developers: FC = () => {
  return (
    <div className="developers">
      <div className="container-fluid">
        <AnimationTitles title="Our the best developers" className="title mx-auto" />
        <p className="gray-50 mb-5 text-center">The value of real estate can be affected by its utility, project, and demand.</p>

        <MotionIn from="left">
          <Swiper className="mySwiper overflow-none justify-content-start" grabCursor spaceBetween={20} breakpoints={DEVS_BREAKPOINTS_TOP}>
            {DEVELOPERS_TOP.map((dev) => (
              <SwiperSlide key={dev.name}>
                <DeveloperLogoCard {...dev} />
              </SwiperSlide>
            ))}
          </Swiper>
        </MotionIn>

        <MotionIn from="right">
          <Swiper className="mySwiper overflow-none mt-4" grabCursor spaceBetween={50} breakpoints={DEVS_BREAKPOINTS_BOTTOM}>
            {DEVELOPERS_BOTTOM.map((dev) => (
              <SwiperSlide key={dev.name}>
                <DeveloperLogoCard {...dev} />
              </SwiperSlide>
            ))}
          </Swiper>
        </MotionIn>
      </div>
    </div>
  );
};
