import styled from "styled-components";

export const ContainerRelatorio = styled.div`
  animation: fadeIn 1s;
  border-radius:5px;
  border: 3px;
  border-left-style: solid;
  border-color: red;
  display: flex;
  flex-direction: column;
  background: white;
  align-items: left;
  padding: 20px;
  margin-bottom: 10px;
  margin-left: 10px;
  margin-right: 10px;
  .tabela {
    overflow-x: scroll;
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .titulo {
    justify-content: center;
    align-items:center;
    display: flex;
    margin: 10px;
  }
`;

export const ContainerPesquisa = styled.div`
  animation: fadeIn 1s;
  border: 3px;
  border-left-style: solid;
  border-color: red;
  border-radius:5px;
  padding: 20px;
  justify-content: center;
  align-items: center;
  background: white;
  margin: 10px;
  .titulo {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .tabela {
    overflow-x: scroll;
  }
  .inputs {
    justify-content: center;
    align-items: center;
    display: grid;
    margin: 5px;
    grid-template-columns: repeat(auto-fit, minmax(100px, 200px));
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