import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  height: 50px;
  background: #ce5f52;
  -webkit-box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1);
  position: relative;
  animation: topDown 1.5s;
  svg {
    display: none;
    position: absolute;
    left: 15px;
  }
  .logo {
    display: block;
    width: 120px;
    height: 80px;
    position: absolute;
    left: 15px;
  }
  @media (max-width: 880px) {
    .logo {
      left: 35%;
    }
    .ButtonArea{
      display: none;
    }
    svg {
      display: block;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  /* grid-template-rows: 62px 1fr 200px; */
  /* overflow: visible; */
`;

export const NavbarListMobile = styled.div`
  display: grid;
  grid-template-rows: repeat(7, 50px);
  width: 100%;
  align-items: flex-start;
  justify-content: center;
  gap: 5px;
  a {
    font-weight: normal;
    color: #ffffff;
    position: relative;
    transition: all 0.4s;
  }
  a::after {
    content: "";
    display: flex;
    width: 0px;
    height: 1px;
    transition: all 0.4s;
  }
  a:hover {
    color: #ffffff;
  }
  a:hover::after {
    width: 100%;
    background: #ffffff;
  }
`;

export const NavbarList = styled.div`
  display: grid;
  grid-template-columns: repeat(7, auto);
  width: calc(100% - 200px);
  align-items: center;
  justify-content: center;
  gap: 30px;
  border:none;
  @media (max-width: 880px) {
    grid-template-columns: auto;
    grid-template-rows: repeat(7, auto);

    a {
      display: none;
    }

  }
  a {
    font-weight: normal;
    color: #ffff;
  }
`;
export const NavbarMobile = styled.div`
  display: ${props => (props.show ? "fixed" : "none")};
  width: 50%;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: fixed;
  padding: 50px 15px;
  top: 0;
  left: 0;
  background: #ce5f52;
  z-index: 999;
  animation: leftRight .7s;
  /* position: relative; */
  svg {
    width: 15px;
    height: 15px;
    position: absolute;
    top: 25px;
    left: 20px;
  }
  @keyframes leftRight {
    0% {
      left: -100%;
    }
    100% {
      left: 0;
    }
  }
`;
export const ButtonArea = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;

  position: absolute;
  right: 15px;
`;
export const ButtonArea1 = styled.div`
  display: flex;
  position: absolute;
  right: 5px;
`;

export const LogoContainer = styled.div`
  display: flex;
  width: 100%;
  /* align-items: flex-start;
  justify-content: center; */
  padding: 5px;
  position: relative;
  svg {
    width: 200px;
    height: 200px;
    position: absolute;
    top: -40px;
    left: 20px;
  }
`;
