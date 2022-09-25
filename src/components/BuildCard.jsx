import styled from "styled-components";
import { motion } from "framer-motion";

const BuildCard = ({ image, title, description }) => {
  return (
    <Card>
      <div className="image-container">
        <img src={image} alt="full-stack Engr" />
      </div>
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
    </Card>
  );
};

const Card = styled(motion.article)`
  width: 28rem;
  height: 29.5rem;
  padding: 2rem;
  border: 1px solid #e7e9eb;
  border-radius: 8px;
  .image-container {
    img {
      width: 100%;
    }
  }
  .title {
    margin-top: 4rem;
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
`;

export default BuildCard;
