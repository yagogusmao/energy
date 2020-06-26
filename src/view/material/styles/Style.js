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
  margin: 10px;
  animation: fadeIn 1s;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .titulo {
    display: flex;
    margin-bottom: 5px;
    flex-direction: row;
    justify-content: center;
  }
  .inputs {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 175px));
    gap: 10px;
    justify-content: center;
    align-items: center;
    .botao {
      justify-content: center;
      display: flex;
      align-items: center;
    } 
  }
`;

export const ContainerPesquisa = styled.div`
  border: 3px;
  border-left-style: solid;
  border-color: red;
  border-radius:5px;
  padding: 20px;
  justify-content: center;
  align-items: center;
  background: white;
  margin-right: 10px;
  margin-left: 10px;
  animation: fadeIn 1s;
  .titulo {
    display: flex;
    margin-bottom: 5px;
    flex-direction: row;
    justify-content: center;
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
    grid-template-columns: repeat(auto-fit, minmax(100px, 200px));
    gap: 10px;
    justify-content: center;
    align-items: center;
    .botao {
      justify-content: center;
      display: flex;
      align-items: center;
    } 
  }
`;

