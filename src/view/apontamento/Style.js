import styled from "styled-components";

export const ContainerPropriedades = styled.div`
  animation: fadeIn 1s;
  border-radius:5px;
  border: 3px;
  border-left-style: solid;
  border-color: red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  background: white;
  padding: 20px;
  .titulo {
    display: flex;
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
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ContainerCriar = styled.div`
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
  .dropdowns {
    display: grid;
    grid-template-columns: repeat(3, 200px);
    justify-content: center;
    align-items: center;
    gap: 10px;
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

export const ContainerApontamentosFinalizados = styled.div`
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
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ContainerInputs = styled.div`
  animation: fadeIn 1s;
  display: grid;
  border-radius:5px;
  border: 3px;
  border-left-style: solid;
  border-color: red;
    grid-template-columns: repeat(3, 300px);
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
  padding: 20px;
  background: white;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ContainerTabelaFinalizar = styled.div`
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
  .inputs {
    display: grid;
    grid-template-columns: repeat(3, 200px);
    justify-content: center;
    align-items: center;
    gap: 10px;
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

export const ContainerFomularioFinalizacao = styled.div`
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
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
