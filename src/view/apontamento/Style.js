import styled from "styled-components";
export const UltraCointainer = styled.div`
  background:white;
  display:flex;
  width: 100vw - 100px;
  flex-direction:column;
  border-radius:5px;
  border: 3px;
  border-left-style: solid;
  border-color: red;
  margin:10px;
`;
export const ContainerPropriedades = styled.div`
  animation: fadeIn 1s;
  border-radius:5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  
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
  width:100%;
  flex-wrap:wrap;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
  
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
export const Dropdowns = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px,250px));
    justify-content: center;
    align-items: center;
    gap: 10px;
    width:100%;
    max-width:800px;
`
export const Graphics = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px,700px));
    justify-content: center;
    align-items: center;
    gap: 10px;
    width:100%;
    margin:10px;

`

export const ContainerApontamentosFinalizados = styled.div`
  animation: fadeIn 1s;
  border-radius:5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
  
  padding: 20px;
  .grafico {
    display:grid;
    min-width: 800px;
    min-height: 400px;
    height:100%;
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

export const ContainerGrafico = styled.div`
  animation: fadeIn 1s;
  border-radius:5px;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
  
  padding: 20px;
  margin-bottom: 10px;
  .p-chart{
    width:100%;
    max-width:600px;
  }
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

export const ContainerInputs = styled.div`
  animation: fadeIn 1s;
  display: grid;
  border-radius:5px;
    grid-template-columns: repeat(3, 300px);
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
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

export const ContainerTabelaFinalizar = styled.div`
  animation: fadeIn 1s;
  border-radius:5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
  
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
  
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

