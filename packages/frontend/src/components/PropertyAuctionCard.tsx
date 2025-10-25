import type { FC } from "react";

import { Card } from "react-bootstrap";
import { CountDown } from "../components/CountDown";

export interface PropertyAuctionCardProps {
  id: number;
  imageSrc: string;
  title: string;
  agency: string;
  countdown: { h: number; m: number; s: number };
  currentBidEth: number | string;
  liked: boolean;
  onToggleLike: (id: number) => void;
}

export const PropertyAuctionCard: FC<PropertyAuctionCardProps> = ({ id, imageSrc, title, agency, countdown, currentBidEth, liked, onToggleLike }) => {
  return (
    <Card className="bg-black-100 rounded">
      <Card.Body className="p-2">
        <div className="position-relative overflow-hidden rounded">
          <Card.Img variant="top" alt={title} src={imageSrc} />
          <i
            className={`fa-heart like ${liked ? "fa-solid text-danger" : "fa-regular"}`}
            onClick={() => onToggleLike(id)}
            role="button"
            aria-label={liked ? "Remove from favorites" : "Add to favorites"}
          />
        </div>

        <h5 className="fw-normal mt-2 text-white">{title}</h5>
        <p className="gray-90">{agency}</p>

        <div className="d-flex">
          <div className="me-3">
            <CountDown {...countdown} />
            <span className="gray-90">Remaining Time</span>
          </div>
          <div>
            <h6 className="text-white">{currentBidEth} ETH</h6>
            <span className="gray-90">Current Bid</span>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};
