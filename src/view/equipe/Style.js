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
  .equipes {
    display: flex;
    flex-direction: column;
    strong {
      font-size: 18px;
    }
    p {
      font-size: 14px;
    }
    .equipesIndividuais {
      border: 3px;
      border-left-style: solid;
      border-color: red;
      padding-left: 17px;
      margin: 5px;
      min-height: 50px;
      padding-right: 17px;
      border-radius: 5px;
      background-color: #E5E5E5;
      display: grid;
      grid-template-columns: 85% 15%;
      justify-content: center;
      align-items: center;
      .apresentacao {
        display:grid;
        flex-direction: column;
        gap: 5px;
      }
    }
  }
  
`;