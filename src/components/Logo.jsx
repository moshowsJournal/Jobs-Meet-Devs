import styled from "styled-components";
import logo from "../assets/pngs/JMD.png";

const Logo = () => {
  return (
    <StyledLogo>
      <div className="logo-image">
        <img src={logo} alt="logo" />
      </div>
      <div className="logo-text">
        <span>Jobs</span>
        <span>Meet Devs</span>
      </div>
    </StyledLogo>
  );
};

const StyledLogo = styled.div`
  min-width: 12rem;
  position: relative;
  display: flex;
  align-items: center;
  .logo-image {
    position: relative;
    width: 8rem;
    height: 4.5rem;
    img {
      position: absolute;
      top: 6px;
      left: -20px;
      width: 100%;
      height: 100%;
    }
  }
  .logo-text {
    font-family: "GTWalsheimPro", sans-serif;
    position: absolute;
    left: 5.8rem;
    display: flex;
    flex-direction: column;
    span {
      font-weight: bold;
      color: ${(props) => props.theme.text1};
    }
  }
`;

export default Logo;
