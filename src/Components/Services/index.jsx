import React from "react";
import {
  ServicesBox,
  ServicesContainer,
  ServicesH2,
  ServicesH3,
  ServicesIcon,
  ServicesP,
  ServicesWrapper,
} from "./ServicesElements";
import Icon1 from "../../Images/icon1.svg";
import Icon2 from "../../Images/icon2.svg";
import Icon3 from "../../Images/icon3.svg";
import Icon4 from "../../Images/icon4.svg";
import Icon5 from "../../Images/icon5.svg";
import Icon6 from "../../Images/icon6.svg";

const Services = () => {
  return (
    <ServicesContainer id="Services">
      <ServicesH2>خدماتنا</ServicesH2>
      <ServicesWrapper>
        <ServicesBox>
          <ServicesIcon src={Icon1} />
          <ServicesH3>Photography</ServicesH3>
          <ServicesP>
           تصوير باحدث كاميرات التصوير وعالية الجودة
          </ServicesP>
        </ServicesBox>
        <ServicesBox>
          <ServicesIcon src={Icon2} />
          <ServicesH3>Videography</ServicesH3>
          <ServicesP>
            فيديو لجميع المناسبات باحدث اجهزة التصوير 
          </ServicesP>
        </ServicesBox>
        <ServicesBox>
          <ServicesIcon src={Icon3} />
          <ServicesH3>PARTY</ServicesH3>
          <ServicesP>
            الحفلات واعياد الميلاد والافراح وجميع المناسبات العاءلية
          </ServicesP>
        </ServicesBox>
        <ServicesBox>
          <ServicesIcon src={Icon4} />
          <ServicesH3>Session</ServicesH3>
          <ServicesP>
            تصوير السيشن واجمل اللحظات وابدع اللقطات
          </ServicesP>
        </ServicesBox>
        <ServicesBox>
          <ServicesIcon src={Icon5} />
          <ServicesH3>Wedding party</ServicesH3>
          <ServicesP>
            تصوير حفلات الزواج وتصميم البوم للعروسين والاهل والاصحابوتصوير قيديو للحفلة
          </ServicesP>
        </ServicesBox>
        <ServicesBox>
          <ServicesIcon src={Icon6} />
          <ServicesH3>Children's parties</ServicesH3>
          <ServicesP>
           لحظات الاطفال من اجمل الذكريات اللي بنحافظ عليها ونخلها في صور وفيديوهات
          </ServicesP>
        </ServicesBox>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
