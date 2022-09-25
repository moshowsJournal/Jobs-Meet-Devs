import styled from "styled-components";
import { motion } from "framer-motion";

const WorksCard = ({ image, title, description }) => {
  return (
    <Card>
      <div className="icon-container">
        <img src={image} alt="choose" />
      </div>
      <h1>{title}</h1>
      <p>{description}</p>
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
`;

export default WorksCard;
