import styled from "styled-components";

export const MenuTab = styled.div`
  animation: fadeIn 1s;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ContainerEstoque = styled.div`
  animation: fadeIn 1s;
  border-radius:5px;
  border: 3px;
  border-left-style: solid;
  border-color: red;
  display: flex;
  flex-direction: column;
  background: white;
  align-items: left;
  padding: 10px;
  margin: 10px;
  .tabela {
    overflow-x: scroll;
  }
  .titulo {
    justify-content: center;
    align-items:center;
    display: flex;
    margin: 10px;
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
export const ContainerMudarEstoque = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  padding: 10px;
  .tabela {
    overflow-x: scroll;
  }
  .inputs {  
    margin: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    button {
      padding: 3px;
    }
  }
`;

export const ContainerGerenciador = styled.div`
  animation: fadeIn 1s;
  border: 3px;
  border-left-style: solid;
  border-color: red;
  border-radius:5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  padding: 10px;
  margin-top: 10px;
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
`;

export const ContainerEstoqueRetirar = styled.div`
  animation: fadeIn 1s;
  border: 3px;
  border-left-style: solid;
  border-color: red;
  border-radius:5px;
  display: flex;
  flex-direction: column;
  margin: 10px;
  background: white;
  padding: 10px;
  .tabela {
    overflow-x: scroll;
  }
  .entradas {
    display: grid;
    margin: 5px;
    grid-template-columns: 50% 50%;
    gap: 5px;
    .checkbox {
      display: flex;
      justify-content: center;
      align-items:center;
    }
  }
  .gerenciadores {
    display: flex;
    flex-direction: row;
    .transformadores {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin: 20px;
    }
  }
  .titulo {
    justify-content: center;
    align-items:center;
    display: flex;
    margin: 10px;
  }
  .inputs {  
    margin: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    button {
      padding: 3px;
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

export const ContainerPesquisa = styled.div`
  animation: fadeIn 1s;
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
  margin-top: 10px;
  margin-right: 10px;
  margin-left: 10px;
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
  .inputs {
    display: grid;
    margin: 5px;
    grid-template-columns: 17% 17% 17% 17% 17% 100px;
    width: 100%;
    gap: 5px;
    .botao {
      display: flex;
      max-height: 25px;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      button {
        padding: 3px
      }
    }
  }
`;