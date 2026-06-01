"use client";

import type { JSX } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import TeamvalueJustice from "@public/teamvalue_justice.svg";
import TeamvalueFun from "@public/teamvalue_fun.svg";
import TeamvalueHonesty from "@public/teamvalue_honesty.svg";
import TeamvalueHelpfulness from "@public/teamvalue_helpfulness.svg";
import TeamvalueCreativity from "@public/teamvalue_creativity.svg";
import type TeamValue from "@/types/TeamValuesInterface";

const values : TeamValue[] = [
  { name: "Rechtvaardigheid", image: TeamvalueJustice },
  { name: "Plezier", image: TeamvalueFun },
  { name: "Eerlijkheid", image: TeamvalueHonesty },
  { name: "Behulpzaam", image: TeamvalueHelpfulness },
  { name: "Creativiteit", image: TeamvalueCreativity },
];

const TeamValues = (): JSX.Element => {
  return (
    <section className="team-values" id="teamwaarden">
      <h2 className="team-values__title">Teamwaarden</h2>
      <Swiper spaceBetween={24} slidesPerView="auto">
        {values.map(({ name, image }: TeamValue): JSX.Element => (
          <SwiperSlide key={name}>
            <Image src={image} alt={name} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Scroll voor meer element */}
      <div className="team-values__scroll">
        <p>Scroll voor meer</p>
        <span className="team-values__scroll-arrow">&rarr;</span>
      </div>
    </section>
  );
};

export default TeamValues;
