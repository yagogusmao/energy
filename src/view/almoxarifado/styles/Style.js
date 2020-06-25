import styled from "styled-components";

export const ContainerInside = styled.div`
  animation: fadeIn 1s;
  border-radius:5px;
  border: 3px;
  border-left-style: solid;
  border-color: red;
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
    justify-content: center;
  }
`;