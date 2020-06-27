import styled from "styled-components";

export const ContainerPropriedades = styled.div`
  animation: fadeIn 1s;
  border-radius:5px;
  border: 3px;
  border-left-style: solid;
  border-color: red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
  background: white;
  padding: 20px;
  .titulo {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .propriedades {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

export const MenuTab = styled.div`
  animation: fadeIn 1s;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  margin-left: 10px;
  margin-right: 10px;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ContainerGerenciadorFuncionarios = styled.div`
  animation: fadeIn 1s;
  border-radius:5px;
  border: 3px;
  border-left-style: solid;
  border-color: red;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-right: 10px;
  background: white;
  padding: 20px;
  .titulo {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .propriedades {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

export const ContainerGerenciadorVeiculos = styled.div`
  animation: fadeIn 1s;
  border-radius:5px;
  border: 3px;
  border-left-style: solid;
  border-color: red;
  display: flex;
  flex-direction: column;
      justify-content: center;
      align-items: center;
  margin-left: 10px;
  margin-right: 10px;
  background: white;
  padding: 20px;
  .titulo {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .propriedades {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    .dados {
      display: flex;
      flex-direction: column;
      justify-content: center;
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

export const ContainerMetas = styled.div`
animation: fadeIn 1s;
  border-radius:5px;
  border: 3px;
  border-left-style: solid;
  border-color: red;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 200px));
  gap: 10px;
  margin-left: 10px;
  margin-right: 10px;
  justify-content: center;
  align-items: center;
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
`

export const ContainerVeiculos = styled.div`
  animation: fadeIn 1s;
  .titulo {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  border-radius:5px;
  border: 3px;
  border-left-style: solid;
  border-color: red;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-right: 10px;
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
`;

export const ContainerFaturamento = styled.div`
  animation: fadeIn 1s;
  .titulo {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: space-between;
  }
  border-radius:5px;
  border: 3px;
  border-left-style: solid;
  border-color: red;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
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
`;