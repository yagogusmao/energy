import styled from "styled-components";

export const ContainerInformacoes = styled.div`
  animation: fadeIn 1s;
  border-radius:5px;
  margin: 10px;
  border: 3px;
  border-left-style: solid;
  border-color: red;
  display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px,400px));
    justify-content: center;
    align-items: center;
    gap: 10px;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 20px;
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
  margin-bottom: 10px;
  margin-left: 10px;
  margin-right: 10px;
  border: 3px;
  border-left-style: solid;
  border-color: red;
  justify-content: center;
  background-color: white;
  padding: 20px;
  .titulo {
    display: flex;
    align-items: center;
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
`;