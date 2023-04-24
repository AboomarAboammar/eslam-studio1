import React from "react";
import {
  ArrowForward,
  ArrowRight,
  HeroBg,
  HeroBtnWrapper,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  VideoBg,
} from "./HeroElement";
import Video from "../../Videos/video.mp4";
import { useState } from "react";
import { Button } from "../ButtonEeleents";

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>ESLAM STUDIO PHOTOGRAGHY</HeroH1>
        <HeroP>
          ستوديو اسلام بالجيزة للتصوير الفوتوغرافي والتصوير الفوري تصوير الحفلات والافراح واعياد الميلاد والسيشن تصوير عالي الجودة باحدث كاميرات التصوير العنوان شارع المحطة بالجيزة الجيزة ليس للاستوديو فروع اخري الحجز عن طريق المحل
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="/"
            primary
            dark
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            Get Started{hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
