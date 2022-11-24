import styled from "styled-components";
import { motion } from "framer-motion";
import { textAnimate, imageAnimate } from "../animation";

const BuildCard = ({ image, title, description }) => {
  return (
    <Card
      initial="hide"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ staggerChildren: 0.5 }}
    >
      <div className="image-container">
        <motion.img variants={imageAnimate} src={image} alt="full-stack Engr" />
      </div>
      <motion.h1 variants={textAnimate} className="title">
        {title}
      </motion.h1>
      <motion.p variants={textAnimate} className="description">
        {description}
      </motion.p>
    </Card>
  );
};

const Card = styled(motion.article)`
  width: 31%;
  height: 25rem;
  padding: 2rem;
  border: 1px solid #e7e9eb;
  border-radius: 8px;
  .image-container {
    img {
      width: 100%;
    }
  }
  .title {
    margin-top: 2rem;
    font-family: "Open Sans", sans-serif;
    font-weight: 600;
    font-size: 1.5rem;
    color: ${(props) => props.theme.primary};
  }
  .description {
    margin-top: 1.5rem;
    font-size: 1rem;
    font-family: "GTWalsheimPro", sans-serif;
    color: ${(props) => props.theme.primary};
  }

  @media screen and (max-width: 40rem) {
    width: 100%;
  }
`;

export default BuildCard;
