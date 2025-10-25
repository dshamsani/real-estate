import { Button, Container } from "react-bootstrap";
import { AnimationTitles } from "../components/AnimationTitles";
import type { FC } from "react";

export const Subscribe: FC = () => {
  return (
    <div className='subscribe'>
      <Container>
        <AnimationTitles
          title={`Subscribe to get fresh news update about our properties`}
          className='title mx-auto w-75 text-center'
        />
        <p className='gray-50 mt-3 mb-5 text-center'>
          Stay up to date with Renting-Platform or get involved in our community
        </p>
        <div className='d-flex justify-content-between align-items-center mx-auto p-1'>
          <input
            placeholder='Enter Your Email'
            className='w-100 border-0 bg-transparent ps-1 text-white'
          />
          <Button className='m-0'>Subscribe</Button>
        </div>
      </Container>
    </div>
  );
};
