import styled from "styled-components";
import { motion } from "framer-motion";
import { textAnimate, imageAnimate } from "../animation";

const WorksCard = ({ image, title, description }) => {
  return (
    <Card
      initial="hide"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ staggerChildren: 0.5 }}
    >
      <div className="icon-container">
        <motion.img variants={imageAnimate} src={image} alt="choose" />
      </div>
      <motion.h1 variants={textAnimate}>{title}</motion.h1>
      <motion.p variants={textAnimate}>{description}</motion.p>
    </Card>
  );
};

const Card = styled(motion.article)`
  width: 18.3rem;
  height: 22rem;
  padding: 3rem;
  border: 1px solid #e7e9eb;
  border-radius: 8px;
  h1 {
    margin-top: 0.5rem;
    font-size: 1.3rem;
    font-weight: 600;
    font-family: "Open Sans", sans-serif;
    color: ${(props) => props.theme.primary};
  }

  p {
    margin-top: 1rem;
    font-size: 0.9rem;
    font-family: "GTWalsheimPro", sans-serif;
    color: ${(props) => props.theme.text2};
  }

  @media screen and (max-width: 40rem) {
    width: 100%;
  }
`;

export default WorksCard;
