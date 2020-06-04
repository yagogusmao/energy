import styled from "styled-components";

export const ContainerInside = styled.div`
  border-radius:5px;
  border: 3px;
  border-left-style: solid;
  border-color: red;
  display: flex;
  flex-direction: column;
  background: white;
  padding: 20px;
  width: 100%;
  .titulo {
    display: flex;
    margin: 5px;
    flex-direction: row;
    justify-content: center;
  }
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

export const ContainerPesquisa = styled.div`
  border: 3px;
  border-left-style: solid;
  border-color: red;
  border-radius:5px;
  display: flex;
  flex-direction: column;
  padding: 10px;
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

