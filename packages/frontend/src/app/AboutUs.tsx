import type { FC } from "react";
import { Button, Container } from "react-bootstrap";
import { AnimationTitles } from "../components/AnimationTitles";
import { MotionIn } from "../components/MotionIn";
import { ImageMosaic } from "../components/ImageMosaic";
import { MOSAIC } from "@/constants/aboutUs";

export const AboutUs: FC = () => {
  return (
    <div className="about">
      <Container className="d-flex justify-content-between flex-md-nowrap flex-wrap gap-4">
        <MotionIn from="left">
          <AnimationTitles title="What is Renting-Platform?" className="title" />
          <p className="gray-50 mb-5">
            As new technologies like cryptocurrency develop, the real estate sector is changing drastically. It is important to understand both how
            these technologies and the traditional real estate market work. Governments are unable to comprehend the rapid advancement of technology
            and modify their legal frameworks to accommodate it fast enough.
          </p>
          <Button variant="primary ms-0">Read More</Button>
        </MotionIn>

        <MotionIn from="right">
          <ImageMosaic images={MOSAIC} className="d-flex flex-column" gap={8} imgClassName="img p-0" />
        </MotionIn>
      </Container>
    </div>
  );
};
