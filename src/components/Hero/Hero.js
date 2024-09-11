import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Bem-vindo ao <br />
          Meu portfólio pessoal
        </SectionTitle>
        <SectionText>
          "Sou um desenvolvedor de software qualificado, com experiência em
          TypeScript e JavaScript, e conhecimento em frameworks como React,
          Node.js e Three.js. Sou um aprendiz ágil e colaboro de forma próxima
          com clientes para criar soluções eficientes, escaláveis e intuitivas,
          voltadas para resolver problemas reais. Vamos trabalhar juntos para
          transformar suas ideias em realidade!"
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
