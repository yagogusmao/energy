import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items:center;
  background: white;
  padding: 20px;
  width: 100%;
  margin: 5vw 5vh; 
  border-radius:5px;
  animation-duration: 1.5s;
  animation-name: fadeIn;
`;

export const ContainerInside = styled.div`
  border-radius:5px;
  display: flex;
  flex-direction: column;
  align-items: left;
  background: #d64f4f;
  padding: 20px;
  width: 100%;
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    p {
      font-size: 20px;
      font-weight: bold
    }
  }
`;