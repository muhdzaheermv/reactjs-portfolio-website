import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hey <br />
        I'm Muhammed Zaheer
      </SectionTitle>
      <SectionText>
Self-taught developer since 2019 and BCA student at Calicut University. Started with the MERN stack, now focused on Python & Django. Passionate about solving real-world problems through tech. Always learning, building, and leveling up.
      </SectionText>
      <Button
          onClick={() => {
            const link = document.createElement("a");
            link.href = "/resume.pdf";
            link.download = "resume.pdf"; // The filename for the downloaded file
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
        >
          Download Resume
        </Button>
    </LeftSection>
  </Section>
);

export default Hero;
