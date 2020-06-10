import styled from "styled-components";

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
  width: 100%;
  margin: 5px;
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
  width: 100%;
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
  width: 100%;
  padding: 10px;
  margin: 5px;
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
  margin: 5px;
  background: white;
  padding: 10px;
  width: 100%;
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
  .inputSozinho {
    margin-bottom: 5px;
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
  width: 100%;
  margin: 5px;
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
    width: 100%;
    margin: 5px;
    grid-template-columns: 17% 17% 17% 17% 17% 140px;
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