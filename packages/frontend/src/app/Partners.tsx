import type { FC } from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y } from "swiper/modules";
import { MotionIn } from "../components/MotionIn";
import { BREAKPOINTS, PARTNERS } from "@/constants/partners";

export const Partners: FC = () => {
  return (
    <MotionIn from="fade" className="partners">
      <Container className="d-flex align-items-center flex-nowrap overflow-hidden">
        <Swiper
          className="mySwiper"
          modules={[Autoplay, A11y]}
          loop
          grabCursor
          breakpoints={BREAKPOINTS}
          spaceBetween={24}
          autoplay={{
            delay: 2200,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          a11y={{ enabled: true }}
          aria-label="Partners logos carousel"
        >
          {PARTNERS.map((p) => (
            <SwiperSlide key={p.alt}>
              <img src={p.src} alt={`${p.alt} logo`} loading="lazy" decoding="async" style={{ height: 40, objectFit: "contain", width: "100%" }} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </MotionIn>
  );
};
