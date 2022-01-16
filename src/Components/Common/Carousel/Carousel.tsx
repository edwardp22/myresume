import React from "react";
import { Carousel as CarouselReact } from "react-responsive-carousel";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Carousel({
  items,
}: {
  items: {
    alt: string;
    image: string;
  }[];
}) {
  return (
    <div>
      <CarouselReact
        autoPlay
        infiniteLoop
        interval={10000}
        transitionTime={500}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
      >
        {items.map((item) => (
          <div key={item.alt}>
            {item.image ? (
              <Zoom>
                <img
                  src={item.image}
                  alt={item.alt}
                  style={{ height: "100%" }}
                />
              </Zoom>
            ) : null}
          </div>
        ))}
      </CarouselReact>
    </div>
  );
}
