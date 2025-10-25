import type { FC } from "react";
import { Button, Container } from "react-bootstrap";
import { AnimationTitles } from "../components/AnimationTitles";
import { MotionIn } from "../components/MotionIn";
import { FeaturesRow } from "../components/FeaturesRow";
import { PropertyAuctionCard } from "../components/PropertyAuctionCard";
import { useToggleSet } from "../hooks/useToggleSet";
import { HEADER_CARDS, STATS } from "@/constants/header";
export const Header: FC = () => {
  const { has, toggle } = useToggleSet<number>();

  return (
    <div className="loading position-relative">
      <Container className="d-flex justify-content-between align-items-center gap-md-5 flex-column flex-md-row mt-xl-4 mt-3 overflow-hidden">
        <MotionIn from="left">
          <AnimationTitles title="Future of real estate investing" />
          <p className="gray-90 fs-5 mt-3">Our real estate is virtual property you can purchase on a metaverse platform</p>
          <Button className="fs-5 fw-bold m-0 my-3 px-5 py-2">Explore</Button>

          <div className="d-none d-md-flex my-4" style={{ color: "white" }}>
            <FeaturesRow items={STATS} className="d-flex w-100 justify-content-between align-items-center" />
          </div>
        </MotionIn>

        <MotionIn from="right" className="my-5 w-100">
          <div className="cards">
            {HEADER_CARDS.map((c) => (
              <PropertyAuctionCard
                key={c.id}
                id={c.id}
                imageSrc={c.imageSrc}
                title={c.title}
                agency={c.agency}
                countdown={c.countdown}
                currentBidEth={c.currentBidEth}
                liked={has(c.id)}
                onToggleLike={toggle}
              />
            ))}
          </div>
        </MotionIn>

        <MotionIn from="fade" className="d-md-none d-flex features my-4">
          <FeaturesRow items={STATS} className="d-flex w-100 justify-content-between align-items-center" />
        </MotionIn>
      </Container>
    </div>
  );
};
