"use client";

import type { JSX } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Insight1 from "@public/insight_insight1.svg";
import Insight2 from "@public/insight_insight2.svg";
import Insight3 from "@public/insight_insight3.svg";
import Insight4 from "@public/insight_insight4.svg";
import Insight5 from "@public/insight_insight5.svg";
import Insight6 from "@public/insight_insight6.svg";

const insights = [
  { name: "Insight 1", image: Insight1 },
  { name: "Insight 2", image: Insight2 },
  { name: "Insight 3", image: Insight3 },
  { name: "Insight 4", image: Insight4 },
  { name: "Insight 5", image: Insight5 },
  { name: "Insight 6", image: Insight6 },
];

const InsightCards = (): JSX.Element => {
  return (
    <section className="insight-cards">
      <div className="insight-cards__wrapper">
        <h2 className="insight-cards__title">Belangrijkste inzichten</h2>
        <Swiper spaceBetween={40} slidesPerView="auto">
          {insights.map(({ name, image }) => (
            <SwiperSlide key={name}>
              <Image src={image} alt={name} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="insight-cards__scroll">
          <p>Scroll voor meer</p>
          <span className="insight-cards__scroll-arrow">&rarr;</span>
        </div>
      </div>
    </section>
  );
};

export default InsightCards;
