import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items:center;
  background: white;
  padding: 40px;
  width: 100%;
  margin:  5vw 5vh; 
  border-radius:5px;
  animation-duration: 1.5s;
  animation-name: fadeIn;
`;

export const ContainerInsideUp = styled.div`
  border-radius:5px;
  display: grid;
  margin-bottom: 10px;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  background: #d64f4f;
  padding: 20px;
  width: 100%;
  p {
      font-size: 20px
  }
`;

export const ContainerInsideDown = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #d64f4f;
  padding: 40px;
  width: 100%;
  p {  
      margin: 5px;
      background: #d64f40;
  }
`;
