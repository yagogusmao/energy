import ApiBase from './ApiBase';

const ApiBaseAlmoxarifado = {
    criar: (payload) => ApiBase.post('/almoxarifado', payload),
    listar: () => ApiBase.get('/almoxarifado'),
    listarEstoque: (_id) => ApiBase.get(`/almoxarifado/estoque?_id=${_id}`),
    adicionarEstoque: (payload) => ApiBase.put('/almoxarifado', payload),
    retirarEstoque: (_id, material, quantidade) => ApiBase.delete(`/almoxarifado/estoque?_id=${_id}&
        material=${material}&
        quantidade=${quantidade}`)
}

export default ApiBaseAlmoxarifado;