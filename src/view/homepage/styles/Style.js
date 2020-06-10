import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items:center;
  background:#444444;
  padding: 40px;
  width: 100%;
  margin:  5vw 5vh; 
  border-radius:5px;
  animation: fadeIn 1s;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;