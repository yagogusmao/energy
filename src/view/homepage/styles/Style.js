import styled from "styled-components";

export const ContainerGraficoEquipes = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  display: flexbox;
  justify-content: center;
  align-items: center;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ContainerForaGraficoEquipes = styled.div`
  animation: fadeIn 1s;
  border-radius:5px;
  border: 3px;
  border-left-style: solid;
  border-color: red;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  margin-right: 10px;
  margin-left: 10px;
  background: white;
  padding: 5px;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ContainerTabelaGlobal = styled.div`
  animation: fadeIn 1s;
  border-radius:5px;
  border: 3px;
  border-left-style: solid;
  border-color: red;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  margin-top: 10px;
  margin-right: 10px;
  background: white;
  padding: 20px;
  .graficoTabela {
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    justify-content: space-evenly;
    align-items: center;
    .tabela {
      max-width: 660px;
    }
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;