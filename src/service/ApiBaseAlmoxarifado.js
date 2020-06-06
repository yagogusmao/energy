import ApiBase from './ApiBase';

const ApiBaseAlmoxarifado = {
    criar: (payload) => ApiBase.post('/almoxarifado', payload),
    listar: () => ApiBase.get('/almoxarifado'),
    listarEstoque: (_id) => ApiBase.get(`/almoxarifado/estoque?_id=${_id}`),
    adicionarEstoque: (payload) => ApiBase.put('/almoxarifado/estoque', payload),
    retirarEstoque: (payload) => ApiBase.put(`/almoxarifado/retirarEstoque`, payload),
    verRelatorio: (_id, opcao) => ApiBase.get(`/almoxarifado/relatorio?_id=${_id}&opcao=${opcao}`),
    retirarTransformador: (payload) => ApiBase.put("/almoxarifado/retirarTransformador", payload),
    retirarMedidor: (payload) => ApiBase.put("/almoxarifado/retirarMedidor", payload),
}

export default ApiBaseAlmoxarifado;