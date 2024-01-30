import { truncateString } from "../adapter/stringAdapter";
import { PlusButton } from "../assets/PlusButton";
import { Thumnail } from "../fetcher/program/program.type";
import "./CarouselCard.css";

type CarouselCardProps = {
  thumnail: Thumnail;
  showName: string;
};

export const CarouselCard = ({ thumnail, showName }: CarouselCardProps) => {
  return (
    <div className="carousel-card">
      <img alt={thumnail.alt} src={thumnail.url} />
      <div className="plus-button-container">
        <PlusButton />
      </div>
      <div>{truncateString(showName, 20)}</div>
    </div>
  );
};
