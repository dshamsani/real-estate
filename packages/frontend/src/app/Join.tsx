import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { AnimationTitles } from "../components/AnimationTitles";
import type { FC } from "react";
import { getImage } from "@/assets";

export const Join: FC = () => {
  return (
    <div className='join'>
      <Container>
        <Swiper
          grabCursor={true}
          spaceBetween={50}
          slidesPerView={1}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            998: {
              slidesPerView: 3,
            },
            1198: {
              slidesPerView: 4,
            },
          }}
          className='mySwiper'
        >
          <SwiperSlide className='align-items-start flex-column px-3 py-4'>
            <h4 className='gray-100 mb-5'>1</h4>
            <img
              src={getImage('illustration/01.webp')}
              alt='Crypto Community'
            />
            <AnimationTitles
              title='Crypto Community'
              className='h4 mt-5 mb-4 text-white'
            />
            <p className='gray-50'>
              Unprecedented access to investment projects in the real economy
              globally
            </p>
          </SwiperSlide>
          <SwiperSlide className='align-items-start flex-column px-3 py-4'>
            <h4 className='gray-100 mb-5'>2</h4>
            <img
              src={getImage('illustration/02.webp')}
              alt='Asset Owners'
            />
            <AnimationTitles
              title='Asset Owners'
              className='h4 mt-5 mb-4 text-white'
            />
            <p className='gray-50'>
              Proprietary tools for borderless capital raise
            </p>
          </SwiperSlide>
          <SwiperSlide className='align-items-start flex-column px-3 py-4'>
            <h4 className='gray-100 mb-5'>3</h4>
            <img
              src={getImage('illustration/03.webp')}
              alt='Registration'
            />
            <AnimationTitles
              title='Registration'
              className='h4 mt-5 mb-4 text-white'
            />
            <p className='gray-50'>
              Absolute data security and maximum transparency of all
              blockchain-based transactions
            </p>
          </SwiperSlide>
          <SwiperSlide className='align-items-start flex-column px-3 py-4'>
            <h4 className='gray-100 mb-5'>4</h4>
            <img
              src={getImage('illustration/04.webp')}
              alt='Create Solutions'
            />
            <AnimationTitles
              title='Create Solutions'
              className='h4 mt-5 mb-4 text-white'
            />
            <p className='gray-50'>
              Decentralized community-ran platform for fundraising
            </p>
          </SwiperSlide>
        </Swiper>
      </Container>
    </div>
  );
};
