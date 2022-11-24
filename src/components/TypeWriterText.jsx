import Typewriter from "typewriter-effect";
import styled from "styled-components";

const TypeWriterText = () => {
  return (
    <Span>
      <Typewriter
        options={{
          autoStart: true,
          loop: true,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString(`<span class="secondary">High-Value</span>`)
            .pauseFor(2000)
            .deleteAll()
            .typeString(`<span class="secondary">Industry-Ready</span>`)
            .pauseFor(2000)
            .deleteAll()
            .typeString(`<span class="secondary">Efficient</span>`)
            .pauseFor(2000)
            .deleteAll()
            .start();
        }}
      />
    </Span>
  );
};

const Span = styled.span`
  font-family: "WhyteInktrap", sans-serif;
  font-weight: 500;
  font-size: 2.5rem;
  .secondary {
    color: ${(props) => props.theme.secondary};
  }

  @media screen and (max-width: 40rem) {
    font-size: 1.8rem;
  }
`;

export default TypeWriterText;
