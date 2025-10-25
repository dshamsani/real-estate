import type { FC } from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { MotionIn } from "../components/MotionIn";
import { JoinStepCard } from "../components/JoinStepCard";
import { STEPS } from "@/constants/join";

export const Join: FC = () => {
  return (
    <div className="join">
      <Container>
        <MotionIn from="bottom">
          <Swiper
            grabCursor
            spaceBetween={50}
            slidesPerView={1}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              998: { slidesPerView: 3 },
              1198: { slidesPerView: 4 },
            }}
            className="mySwiper"
          >
            {STEPS.map((item) => (
              <SwiperSlide key={item.step}>
                <JoinStepCard {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </MotionIn>
      </Container>
    </div>
  );
};
