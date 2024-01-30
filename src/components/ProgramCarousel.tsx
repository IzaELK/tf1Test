import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { LeftArrow } from "../assets/LeftArrow";
import { RightArrow } from "../assets/RightArrow";
import { Show } from "../fetcher/program/program.type";
import { CarouselCard } from "./CarouselCard";
import "./ProgramCarousel.css";

type ProgramCarouselProps = {
  shows: Show[];
};

export const ProgramCarousel = ({ shows }: ProgramCarouselProps) => {
  return (
    <Carousel
      infiniteLoop
      centerMode
      centerSlidePercentage={20}
      showIndicators={false}
      showThumbs={false}
      showStatus={false}
      swipeable={true}
      renderArrowPrev={(clickHandler) => (
        <button onClick={clickHandler}>
          <LeftArrow />
        </button>
      )}
      renderArrowNext={(clickHandler) => (
        <button onClick={clickHandler}>
          <RightArrow />
        </button>
      )}
      width={1000}
    >
      {shows.map((show) => (
        <CarouselCard
          thumnail={show.thumnail}
          showName={show.name}
          key={show.id}
        />
      ))}
    </Carousel>
  );
};
