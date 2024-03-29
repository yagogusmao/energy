import styled from "styled-components";

export const MenuTab = styled.div`
  animation: fadeIn 1s;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
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
  padding: 20px;
  margin: 10px;
  .tabela {
    overflow-x: scroll;
  }
  .titulo {
    justify-content: center;
    align-items:center;
    display: flex;
    margin-bottom: 10px;
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
  .inputs {  
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ContainerGerenciador = styled.div`
  animation: fadeIn 1s;
  border: 3px;
  border-left-style: solid;
  border-color: red;
  border-radius:5px;
  background: white;
  padding: 20px;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
  .botoes {
    justify-content: space-between;
    display: flex;
    margin-bottom: 10px;
  }
  .titulo {
    justify-content: center;
    align-items:center;
    display: flex;
    margin-bottom: 10px;
  }
  .tabela {
    overflow-x: scroll;
  }
  .dropdown {
    justify-content: center;
    align-items:center;
    display: flex;
    min-width: 200px;
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
  padding: 20px;
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
    flex-wrap: wrap;
    justify-content: space-evenly;
    .transformadores {
      display: flex;
      flex-direction: column;
      width: 600px;
      padding: 20px;
      border: 3px;
      margin-top: 10px;
      border-left-style: solid;
      background-color: #E5E5E5;
      border-color: red;
      border-radius:5px;
      .botao {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
  .titulo {
    justify-content: center;
    align-items:center;
    display: flex;
    margin-bottom: 10px;
  }
  .inputs {  
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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
  padding: 20px;
  align-items: center;
  background: white;
  margin-top: 10px;
  margin-right: 10px;
  margin-left: 10px;
  .titulo {
    justify-content: center;
    align-items:center;
    display: flex;
    margin-bottom: 10px;
  }
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
    grid-template-columns: 17% 17% 17% 17% 17% 15%;
    gap: 5px;
    .botao {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
  }
`;
export const ContainerPesquisa1 = styled.div`
animation: fadeIn 1s;
  border: 3px;
  border-left-style: solid;
  border-color: red;
  border-radius:5px;
  padding: 20px;
  justify-content: center;
  align-items: center;
  background: white;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
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