import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion } from "framer-motion";
import type { FC } from "react";
import stellarImg from "../images/partners/stellar.png";
import blockportImg from "../images/partners/blockport.png";
import fantomImg from "../images/partners/fantom.png";
import onfidoImg from "../images/partners/onfido.png";
import trImg from "../images/partners/tr.png";
import qaImg from "../images/partners/qa.png";

export const Partners: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className='partners'
    >
      <Container className='d-flex align-items-center flex-nowrap overflow-hidden'>
        <Swiper
          className='mySwiper'
          loop={true}
          grabCursor={true}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            520: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            992: {
              slidesPerView: 5,
            },
            1198: {
              slidesPerView: 5,
            },
          }}
        >
          <SwiperSlide>
            <img
              src={stellarImg}
              alt='stellar'
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={blockportImg}
              alt='blockport'
            />
          </SwiperSlide>
          <SwiperSlide>
            <img src={fantomImg} alt='fantom' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={onfidoImg} alt='onfido' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={trImg} alt='tr' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={qaImg} alt='qa' />
          </SwiperSlide>
        </Swiper>
      </Container>
    </motion.div>
  );
};
