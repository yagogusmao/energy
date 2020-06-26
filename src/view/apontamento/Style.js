import styled from "styled-components";


export const MenuTab = styled.div`
  animation: fadeIn 1s;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
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
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  background: white;
  padding: 20px;
  .dropdowns {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 200px));
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  .botao {
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

export const ContainerApontamentosFinalizados = styled.div`
  animation: up_down 1s;
  border-radius:5px;
  border: 3px;
  border-left-style: solid;
  border-color: red;
  margin-left: 15%;
  margin-right: 15%;
  margin-bottom: 10px;
  @media only screen and (max-width: 600px) {
    margin-left: 10px;
    margin-right: 10px;
  }
  background: white;
  padding: 20px;
  .tabela {
    overflow-x: scroll;
  }
  @keyframes up_down{
                from{
                    opacity: 0;
                }
                to{
                  opacity: 1;
                }
            }

`;
export const ContainerGrafico = styled.div`
  animation: fadeIn 1s;
  border-radius:5px;
  border: 3px;
  border-left-style: solid;
  border-color: red;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 600px) {
    margin-left: 10px;
    margin-right: 10px;
  }
  margin-left: 15%;
  margin-right: 15%;
  background: white;
  padding: 20px;
  margin-bottom: 10px;
  .grafico {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  background: white;
  padding: 20px;
  .inputs {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 200px));
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  .tabela {
    display: flex;
    flex-direction: column;
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
