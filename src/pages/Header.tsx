import type { FC, MouseEvent } from "react";

import { Button, Card, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { CountDown } from "../components/functions/CountDown";
import { motion } from "framer-motion";
import { AnimationTitles } from "../components/functions/AnimationTitles";
import houseBig1 from "../images/properties/house_big-1.webp";
import houseBig from "../images/properties/house_big.webp";

export const Header: FC = () => {
  // Like button handler
  const handleLike = (e: MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains("fa-regular")) {
      target.className = "fa-solid fa-heart like text-danger";
    } else {
      target.className = "fa-regular fa-heart like";
    }
  };

  return (
    <div className='loading position-relative'>
      <Container className='d-flex justify-content-between align-items-center gap-md-5 flex-column flex-md-row mt-xl-4 mt-3 overflow-hidden'>
        <motion.div
          initial={{ x: -400 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <AnimationTitles title='Future of real estate investing' />
          <p className='gray-90 fs-5 mt-3'>
            Our real estate is virtual property you can purchase on a metaverse
            platform
          </p>
          <Button className='fs-5 fw-bold m-0 my-3 px-5 py-2'>Explore</Button>
          <div
            style={{ color: "white" }}
            className='d-none d-md-flex justify-content-between align-items-center my-4'
          >
            <div>
              <h5 className='fw-bold fs-1'>12K+</h5>
              <span className='gray-100'>properties</span>
            </div>
            <div>
              <h5 className='fw-bold fs-1'>10K+</h5>
              <span className='gray-100'>auction</span>
            </div>
            <div>
              <h5 className='fw-bold fs-1'>12K+</h5>
              <span className='gray-100'>developers</span>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 400 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
          className='my-5 w-100'
        >
          <div className='cards'>
            <Card className='bg-black-100 rounded'>
              <Card.Body className='p-2'>
                <div className='position-relative overflow-hidden rounded'>
                  <Card.Img
                    variant='top'
                    alt='img'
                    src={houseBig1}
                  />
                  <i
                    className='fa-regular fa-heart like'
                    onClick={handleLike}
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
            <Card className='bg-black-100'>
              <Card.Body className='p-2'>
                <div className='position-relative overflow-hidden rounded'>
                  <Card.Img
                    variant='top'
                    alt='img'
                    src={houseBig}
                  />
                  <i
                    className='fa-regular fa-heart like'
                    onClick={handleLike}
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
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{ color: "white" }}
          className='d-md-none d-flex justify-content-between align-items-center features my-4'
        >
          <div>
            <h5 className='fw-bold fs-1'>12K+</h5>
            <span className='gray-100'>properties</span>
          </div>
          <div>
            <h5 className='fw-bold fs-1'>10K+</h5>
            <span className='gray-100'>auction</span>
          </div>
          <div>
            <h5 className='fw-bold fs-1'>12K+</h5>
            <span className='gray-100'>developers</span>
          </div>
        </motion.div>
      </Container>
    </div>
  );
};
