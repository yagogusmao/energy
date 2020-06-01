import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items:center;
  background: white;
  padding: 10px;
  width: 100%;
  margin: 3vw 3vh; 
  border-radius:5px;
  animation-duration: 1.5s;
  animation-name: fadeIn;
  background: #d64f4f;
`;

export const ContainerEstoque = styled.div`
  border-radius:5px;
  background: white;
  padding: 20px;
  width: 100%;
  margin: 5px;
  div {
    justify-content: center;
    align-items:center;
    display: flex;
    margin: 10px;
  }
`;
export const ContainerMudarEstoque = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  padding: 20px;
  width: 100%;
  div {  
    margin: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  button {
    padding: 3px;
  }
`;

export const ContainerSuperior = styled.div`
  border-radius:5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  width: 100%;
  padding: 20px;
  margin: 5px;
`;

export const ContainerPesquisa = styled.div`
  border-radius:5px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  background: white;
  width: 100%;
  margin: 5px;
  .inputs {
    display: flex;
    flex-direction: row;
  }
  button {
    padding: 3px;
  }
`;