import type { FC } from "react";
import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, A11y } from "swiper/modules";
import "swiper/css";

import { AnimationTitles } from "../components/AnimationTitles";
import { MotionIn } from "../components/MotionIn";
import { PropertyAuctionCard } from "../components/PropertyAuctionCard";
import { useToggleSet } from "../hooks/useToggleSet";
import { CARD_BREAKPOINTS, PROPERTIES_CARDS, TAB_BREAKPOINTS, TABS } from "@/constants/properties";

export type PropertyTab = "All" | "Cottage" | "Chalet" | "Manor" | "Penthouse" | "Farmhouse" | "Duplex";

export const Properties: FC = () => {
  const [activeTab, setActiveTab] = useState<PropertyTab>("All");
  const { has: isLiked, toggle: toggleLike } = useToggleSet<number>([2]);

  const visibleCards = activeTab === "All" ? PROPERTIES_CARDS : PROPERTIES_CARDS.filter((c) => c.category === activeTab);

  return (
    <div className="properties">
      <Container>
        <AnimationTitles className="title mx-auto" title="Discover more properties" />

        <div className="tabs d-flex justify-content-start justify-content-sm-center align-items-center w-lg-50 flex-nowrap">
          <Swiper className="mySwiper overflow-none" grabCursor spaceBetween={15} breakpoints={TAB_BREAKPOINTS}>
            {TABS.map((tab) => (
              <SwiperSlide key={tab}>
                <Button className={`bg-black-100 ms-0 border-0 ${activeTab === tab ? "active" : ""}`} onClick={() => setActiveTab(tab)}>
                  {tab}
                </Button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <MotionIn from="left">
          <Swiper
            modules={[Pagination, Navigation, A11y]}
            className="mySwiper mt-4"
            grabCursor
            loop
            spaceBetween={15}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation
            breakpoints={CARD_BREAKPOINTS}
            a11y={{ enabled: true }}
            aria-label="Property listings carousel"
          >
            {visibleCards.map((c) => (
              <SwiperSlide key={c.id}>
                <PropertyAuctionCard
                  id={c.id}
                  imageSrc={c.imageSrc}
                  title={c.title}
                  agency={c.agency}
                  countdown={c.countdown}
                  currentBidEth={c.currentBidEth}
                  liked={isLiked(c.id)}
                  onToggleLike={toggleLike}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </MotionIn>
      </Container>
    </div>
  );
};
