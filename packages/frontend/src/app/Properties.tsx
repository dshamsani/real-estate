import { Button, Card, Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { CountDown } from "../components/functions/CountDown";
import { motion } from "framer-motion";
import { AnimationTitles } from "../components/functions/AnimationTitles";
import type { FC } from "react";
import { useState } from "react";

import { getImage } from "@/assets";

type PropertyTab = "All" | "Cottage" | "Chalet" | "Manor" | "Penthouse" | "Farmhouse" | "Duplex";

export const Properties: FC = () => {
  const [activeTab, setActiveTab] = useState<PropertyTab>("Cottage");
  const [likedProperties, setLikedProperties] = useState<Set<number>>(new Set([2]));

  const handleTabClick = (tab: PropertyTab) => {
    setActiveTab(tab);
  };

  const toggleLike = (propertyId: number) => {
    setLikedProperties((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(propertyId)) {
        newSet.delete(propertyId);
      } else {
        newSet.add(propertyId);
      }
      return newSet;
    });
  };

  return (
    <div className='properties'>
      <Container>
        <AnimationTitles
          className='title mx-auto'
          title='Discover more properties'
        />
        {/* Start tabs */}
        <div className='tabs d-flex justify-content-start justify-content-sm-center align-items-center w-lg-50 flex-nowrap'>
          <Swiper
            className='mySwiper overflow-none'
            grabCursor={true}
            spaceBetween={15}
            slidesPerView={6}
            breakpoints={{
              0: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 6,
              },
            }}
          >
            <SwiperSlide>
              <Button
                className={`bg-black-100 ms-0 border-0 ${activeTab === "All" ? "active" : ""}`}
                onClick={() => handleTabClick("All")}
              >
                All
              </Button>
            </SwiperSlide>
            <SwiperSlide>
              <Button
                className={`bg-black-100 ms-0 border-0 ${activeTab === "Cottage" ? "active" : ""}`}
                onClick={() => handleTabClick("Cottage")}
              >
                Cottage
              </Button>
            </SwiperSlide>
            <SwiperSlide>
              <Button
                className={`bg-black-100 ms-0 border-0 ${activeTab === "Chalet" ? "active" : ""}`}
                onClick={() => handleTabClick("Chalet")}
              >
                Chalet
              </Button>
            </SwiperSlide>
            <SwiperSlide>
              <Button
                className={`bg-black-100 ms-0 border-0 ${activeTab === "Manor" ? "active" : ""}`}
                onClick={() => handleTabClick("Manor")}
              >
                Manor
              </Button>
            </SwiperSlide>
            <SwiperSlide>
              <Button
                className={`bg-black-100 ms-0 border-0 ${activeTab === "Penthouse" ? "active" : ""}`}
                onClick={() => handleTabClick("Penthouse")}
              >
                Penthouse
              </Button>
            </SwiperSlide>
            <SwiperSlide>
              <Button
                className={`bg-black-100 ms-0 border-0 ${activeTab === "Farmhouse" ? "active" : ""}`}
                onClick={() => handleTabClick("Farmhouse")}
              >
                Farmhouse
              </Button>
            </SwiperSlide>
            <SwiperSlide>
              <Button
                className={`bg-black-100 ms-0 border-0 ${activeTab === "Duplex" ? "active" : ""}`}
                onClick={() => handleTabClick("Duplex")}
              >
                Duplex
              </Button>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* End tabs */}
        {/* Start cards */}
        <motion.div
          initial={{ x: -80 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Swiper
            slidesPerView={4}
            spaceBetween={15}
            grabCursor={true}
            loop={true}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              520: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              992: {
                slidesPerView: 4,
              },
              1198: {
                slidesPerView: 5,
              },
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className='mySwiper mt-4'
          >
            <SwiperSlide>
              <Card className='bg-black-100 rounded'>
                <Card.Body className='p-2'>
                  <div className='position-relative overflow-hidden rounded'>
                    <Card.Img
                      variant='top'
                      alt='Cottage Forrest 1'
                      src={getImage('properties/picture-of-a-wooden-building-in-the-forest.webp')}
                    />
                    <i
                      className={`fa-heart like ${likedProperties.has(1) ? "fa-solid text-danger" : "fa-regular"}`}
                      onClick={() => toggleLike(1)}
                    ></i>
                  </div>
                  <h5 className='fw-normal mt-2 text-white'>
                    Cottage «Forrest 1»
                  </h5>
                  <p className='gray-90'>@Red Oak Realty</p>
                  <div className='d-flex'>
                    <div className='me-3'>
                      <CountDown h={9} m={45} s={8} />
                      <span className='gray-90'>Remaining Time</span>
                    </div>
                    <div>
                      <h6 className='text-white'>29.71 ETH</h6>
                      <span className='gray-90'>Current Bid</span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card className='bg-black-100 rounded'>
                <Card.Body className='p-2'>
                  <div className='position-relative overflow-hidden rounded'>
                    <Card.Img
                      variant='top'
                      alt='Freshness'
                      src={getImage('properties/pexels-stan-krotov-12737424 1.webp')}
                    />
                    <i
                      className={`fa-heart like ${likedProperties.has(2) ? "fa-solid text-danger" : "fa-regular"}`}
                      onClick={() => toggleLike(2)}
                    ></i>
                  </div>
                  <h5 className='fw-normal mt-2 text-white'>Freshness</h5>
                  <p className='gray-90'>@ERA Ukraine Real Estate</p>
                  <div className='d-flex'>
                    <div className='me-3'>
                      <CountDown h={29} m={15} s={10} />
                      <span className='gray-90'>Remaining Time</span>
                    </div>
                    <div>
                      <h6 className='text-white'>14.81 ETH</h6>
                      <span className='gray-90'>Current Bid</span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card className='bg-black-100 rounded'>
                <Card.Body className='p-2'>
                  <div className='position-relative overflow-hidden rounded'>
                    <Card.Img
                      variant='top'
                      alt='Wish house'
                      src={getImage('properties/pexels-rachel-claire-8112843 1.webp')}
                    />
                    <i
                      className={`fa-heart like ${likedProperties.has(3) ? "fa-solid text-danger" : "fa-regular"}`}
                      onClick={() => toggleLike(3)}
                    ></i>
                  </div>
                  <h5 className='fw-normal mt-2 text-white'>Wish house</h5>
                  <p className='gray-90'>@UA real estate agency</p>
                  <div className='d-flex'>
                    <div className='me-3'>
                      <CountDown h={23} m={6} s={1} />
                      <span className='gray-90'>Remaining Time</span>
                    </div>
                    <div>
                      <h6 className='text-white'>16.62 ETH</h6>
                      <span className='gray-90'>Current Bid</span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card className='bg-black-100 rounded'>
                <Card.Body className='p-2'>
                  <div className='position-relative overflow-hidden rounded'>
                    <Card.Img
                      variant='top'
                      alt='Spruce'
                      src={getImage('properties/david-kovalenko-9-qFzV9a2Zc-unsplash.webp')}
                    />
                    <i
                      className={`fa-heart like ${likedProperties.has(4) ? "fa-solid text-danger" : "fa-regular"}`}
                      onClick={() => toggleLike(4)}
                    ></i>
                  </div>
                  <h5 className='fw-normal mt-2 text-white'>Spruce</h5>
                  <p className='gray-90'>@Dream House</p>
                  <div className='d-flex'>
                    <div className='me-3'>
                      <CountDown h={10} m={30} s={58} />
                      <span className='gray-90'>Remaining Time</span>
                    </div>
                    <div>
                      <h6 className='text-white'>17.01 ETH</h6>
                      <span className='gray-90'>Current Bid</span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card className='bg-black-100 rounded'>
                <Card.Body className='p-2'>
                  <div className='position-relative overflow-hidden rounded'>
                    <Card.Img
                      variant='top'
                      alt='Residence Rybna'
                      src={getImage('properties/house_big-1.webp')}
                    />
                    <i
                      className={`fa-heart like ${likedProperties.has(5) ? "fa-solid text-danger" : "fa-regular"}`}
                      onClick={() => toggleLike(5)}
                    ></i>
                  </div>
                  <h5 className='fw-normal mt-2 text-white'>Residence Rybna</h5>
                  <p className='gray-90'>@UA real estate agency</p>
                  <div className='d-flex'>
                    <div className='me-3'>
                      <CountDown h={18} m={21} s={8} />
                      <span className='gray-90'>Remaining Time</span>
                    </div>
                    <div>
                      <h6 className='text-white'>29.71 ETH</h6>
                      <span className='gray-90'>Current Bid</span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card className='bg-black-100 rounded'>
                <Card.Body className='p-2'>
                  <div className='position-relative overflow-hidden rounded'>
                    <Card.Img
                      variant='top'
                      alt='Blue Sky'
                      src={getImage('properties/house_big.webp')}
                    />
                    <i
                      className={`fa-heart like ${likedProperties.has(6) ? "fa-solid text-danger" : "fa-regular"}`}
                      onClick={() => toggleLike(6)}
                    ></i>
                  </div>
                  <h5 className='fw-normal mt-2 text-white'>Blue Sky</h5>
                  <p className='gray-90'>@ERA Ukraine Real Estate</p>
                  <div className='d-flex'>
                    <div className='me-3'>
                      <CountDown h={23} m={16} s={11} />
                      <span className='gray-90'>Remaining Time</span>
                    </div>
                    <div>
                      <h6 className='text-white'>17.31 ETH</h6>
                      <span className='gray-90'>Current Bid</span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </SwiperSlide>
          </Swiper>
        </motion.div>
        {/* End cards */}
      </Container>
    </div>
  );
};
