import { Swiper, SwiperSlide } from "swiper/react";
import { AnimationTitles } from "../components/functions/AnimationTitles";
import { motion } from "framer-motion";
import type { FC } from "react";
import { getImage } from "@/assets";

export const Developers: FC = () => {
  return (
    <div className='developers'>
      <div className='container-fluid'>
        <AnimationTitles
          title='Our the best developers'
          className='title mx-auto'
        />
        <p className='gray-50 mb-5 text-center'>
          The value of real estate can be affected by its utility, project, and
          demand.{" "}
        </p>
        <motion.div
          initial={{ x: -80 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Swiper
            className='mySwiper overflow-none justify-content-start'
            grabCursor={true}
            slidesPerView={5}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              596: {
                slidesPerView: 3,
              },
              998: {
                slidesPerView: 4,
              },
              1198: {
                slidesPerView: 5,
              },
            }}
          >
            <SwiperSlide>
              <div className='d-flex justify-content-between align-items-center px-3 py-2'>
                <img
                  className='pe-3'
                  src={getImage('developers/logo-01.png')}
                  alt='UA real house'
                />
                <h6 className='m-0 text-white'>UA real house</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='d-flex justify-content-between align-items-center px-3 py-2'>
                <img
                  className='pe-3'
                  src={getImage('developers/logo-02.png')}
                  alt='ERA Ukraine Real Estate'
                />
                <h6 className='m-0 text-white'>ERA Ukraine Real Estate</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='d-flex justify-content-between align-items-center px-3 py-2'>
                <img
                  className='pe-3'
                  src={getImage('developers/logo-03.png')}
                  alt='Happy Neighbor'
                />
                <h6 className='m-0 text-white'>Happy Neighbor</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='d-flex justify-content-between align-items-center px-3 py-2'>
                <img
                  className='pe-3'
                  src={getImage('developers/logo-04.png')}
                  alt='American Home Agents'
                />
                <h6 className='m-0 text-white'>American Home Agents</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='d-flex justify-content-between align-items-center px-3 py-2'>
                <img
                  className='pe-3'
                  src={getImage('developers/logo-05.png')}
                  alt='Ukr Home Agents'
                />
                <h6 className='m-0 text-white'>Ukr Home Agents</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='d-flex justify-content-between align-items-center px-3 py-2'>
                <img
                  className='pe-3'
                  src={getImage('developers/logo-06.png')}
                  alt='UA real estate agency'
                />
                <h6 className='m-0 text-white'>UA real estate agency</h6>
              </div>
            </SwiperSlide>
          </Swiper>
        </motion.div>
        <motion.div
          initial={{ x: 80 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Swiper
            className='mySwiper overflow-none'
            spaceBetween={50}
            grabCursor={true}
            slidesPerView={4}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              596: {
                slidesPerView: 3,
              },
              1298: {
                slidesPerView: 5,
              },
            }}
          >
            <SwiperSlide>
              <div className='d-flex justify-content-between align-items-center px-3 py-2'>
                <img
                  className='pe-3'
                  src={getImage('developers/logo-07.png')}
                  alt='Red Oak Realty'
                />
                <h6 className='m-0 text-white'>Red Oak Realty</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='d-flex justify-content-between align-items-center px-3 py-2'>
                <img
                  className='pe-3'
                  src={getImage('developers/logo-08.png')}
                  alt='Dream House'
                />
                <h6 className='m-0 text-white'>Dream House</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='d-flex justify-content-between align-items-center px-3 py-2'>
                <img
                  className='pe-3'
                  src={getImage('developers/logo-09.png')}
                  alt='Leading Real Estate Companies'
                />
                <h6 className='m-0 text-white'>
                  Leading Real Estate Companies
                </h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='d-flex justify-content-between align-items-center px-3 py-2'>
                <img
                  className='pe-3'
                  src={getImage('developers/logo-10.png')}
                  alt='Home Partners of World'
                />
                <h6 className='m-0 text-white'>Home Partners of World</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='d-flex justify-content-between align-items-center px-3 py-2'>
                <img
                  className='pe-3'
                  src={getImage('developers/logo-11.png')}
                  alt='Red Oak Realty'
                />
                <h6 className='m-0 text-white'>Red Oak Realty</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='d-flex justify-content-between align-items-center px-3 py-2'>
                <img
                  className='pe-3'
                  src={getImage('developers/logo-13.png')}
                  alt='American Home Agents'
                />
                <h6 className='m-0 text-white'>American Home Agents</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='d-flex justify-content-between align-items-center px-3 py-2'>
                <img
                  className='pe-3'
                  src={getImage('developers/logo-12.png')}
                  alt='UA real estate agency'
                />
                <h6 className='m-0 text-white'>UA real estate agency</h6>
              </div>
            </SwiperSlide>
          </Swiper>
        </motion.div>
      </div>
    </div>
  );
};
