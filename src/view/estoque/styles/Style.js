import styled from "styled-components";

export const ContainerEstoque = styled.div`
  border-radius:5px;
  border: 3px;
  border-left-style: solid;
  border-color: red;
  display: flex;
  flex-direction: column;
  background: white;
  align-items: left;
  padding: 20px;
  width: 100%;
  margin: 5px;
  .titulo {
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
  border: 3px;
  border-left-style: solid;
  border-color: red;
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
  border: 3px;
  border-left-style: solid;
  border-color: red;
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
    display: grid;
    width: 100%;
    margin: 5px;
    grid-template-columns: 17% 17% 17% 17% 17% 15%;
    gap: 5px;
    .botao {
      display: flex;
      justify-content: center;
      align-items: center;
      button {
        padding: 3px
      }
    }
  }
`;