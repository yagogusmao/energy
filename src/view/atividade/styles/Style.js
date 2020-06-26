import styled from "styled-components";

export const ContainerCriar = styled.div`
  animation: fadeIn 1s;
  border-radius:5px;
  margin: 10px;
  border: 3px;
  border-left-style: solid;
  border-color: red;
  background-color: white;
  padding: 20px;
  .titulo {
    justify-content: center;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  .inputs {
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(auto-fit, minmax(100px, 200px));
    gap: 10px;
    .botao {
      justify-content: center;
      display: flex;
      align-items: center;
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

export const ContainerTabela = styled.div`
  animation: fadeIn 1s;
  border-radius:5px;
  margin-right: 10px;
  margin-left: 10px;
  border: 3px;
  border-left-style: solid;
  border-color: red;
  background-color: white;
  padding: 20px;
  .titulo {
    justify-content: center;
    display: flex;
    align-items: center;
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

