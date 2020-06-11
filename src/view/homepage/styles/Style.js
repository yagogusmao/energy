import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items:center;
  background: white;
  padding: 40px;
  width: 100%;
  position: relative;
  margin-top: 0px;
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