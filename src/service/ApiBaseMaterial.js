import ApiBase from './ApiBase';

const ApiBaseMaterial = {
    listar: (_id, unidadeMedida, descricao, codigoClasse, descricaoClasse) => ApiBase.get(`/material?_id=${_id}&unidadeMedida=${unidadeMedida}&descricao=${descricao}&codigoClasse=${codigoClasse}&descricaoClasse=${descricaoClasse}`)
}

export default ApiBaseMaterial;