import type { FC } from "react";

import { Button, Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { AnimationTitles } from "../components/AnimationTitles";
import { getImage } from "@/assets";

export const AboutUs: FC = () => {
  return (
    <div className='about'>
      <Container className='d-flex justify-content-between flex-md-nowrap flex-wrap'>
        <motion.div
          initial={{ x: -200 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <AnimationTitles
            title='What is Renting-Platform?'
            className='title'
          />
          <p className='gray-50 mb-5'>
            As new technologies like cryptocurrency develop, the real estate
            sector is changing drastically. It is important to understand both
            how these technologies and the traditional real estate market work.
            Governments are unable to comprehend the rapid advancement of
            technology and modify their legal frameworks to accommodate it fast
            enough.
          </p>
          <Button variant='primary ms-0'>Read More</Button>
        </motion.div>
        <motion.div
          initial={{ x: 200 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className='d-flex'>
            <div>
              <img
                src={getImage('bohdan-d-fh6o-XkVQG8-unsplash.webp')}
                className='img me-2 p-0'
                alt='img'
              />
            </div>
            <div>
              <img
                src={getImage('john-o-nolan-6f_ANCcbj3o-unsplash.webp')}
                className='img p-0'
                alt='img'
              />
            </div>
          </div>
          <div className='d-flex'>
            <div>
              <img
                src={getImage('julia-solonina-ci19YINguoc-unsplash.webp')}
                className='img me-2 p-0'
                alt='img'
              />
            </div>
            <div>
              <img
                src={getImage('theater-amazonas-manaus.webp')}
                className='img p-0'
                alt='img'
              />
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
};
