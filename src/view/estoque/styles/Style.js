import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items:center;
  background: white;
  padding: 20px;
  width: 100%;
  margin: 5vw 5vh; 
  border-radius:5px;
  animation-duration: 1.5s;
  animation-name: fadeIn;
`;

export const ContainerInsideDown = styled.div`
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
    }
  }
`;
export const ContainerInsideUp = styled.div`
  border-radius:5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #d64f4f;
  padding: 40px;
  max-width: 500px;
  width: 100%;
  p {  
      margin: 5px;
      background: #d64f4f;
  }
`;