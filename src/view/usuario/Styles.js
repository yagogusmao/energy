import styled from "styled-components";

export const Container = styled.div`
  animation-duration: 1s;
  animation-name: fadeIn;
  border-radius:5px;
  border: 3px;
  border-left-style: solid;
  border-color: red;
  display: flex;
  flex-direction: column;
  background: white;
  padding: 20px;
  max-width: 700px;
  width: 100%;
  .titulo {
    justify-content: center;
    align-items: center;
    display: flex;
  }
  .botao {
    justify-content: center;
    align-items: center;
    display: flex;
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

