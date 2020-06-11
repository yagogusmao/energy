import styled from "styled-components";

export const ContainerInside = styled.div`
  animation: fadeIn 1s;
  border-radius:5px;
  border: 3px;
  border-left-style: solid;
  border-color: red;
  display: flex;
  flex-direction: column;
  margin: 10px;
  background: white;
  padding: 20px;
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
    margin: 5px;
    flex-direction: row;
    justify-content: center;
  }
  .almoxarifados {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-auto-rows: 50px;
    gap: 10px;
    p {
      font-size: 20px;
      font-weight: bold
    }
  }
  .almoxarifadosIndividuais {
    padding-left: 17px;
    border-radius: 5px;
    border: 2px;
    border-color: #ffeded;
    display: grid;
    border-style: solid;
    grid-template-columns: 70% 30%;
    justify-content: center;
    align-items: center;
  }
`;