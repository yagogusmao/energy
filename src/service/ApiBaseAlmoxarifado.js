import ApiBase from './ApiBase';

const ApiBaseAlmoxarifado = {
    criar: (payload) => ApiBase.post('/almoxarifado', payload),
    listar: () => ApiBase.get('/almoxarifado'),
    listarEstoque: (_id) => ApiBase.get(`/almoxarifado/estoque?_id=${_id}`),
    adicionarEstoque: (payload) => ApiBase.put('/almoxarifado/estoque', payload),
    retirarEstoque: (_id, material, quantidade, vaiPara, servico, equipe) => ApiBase.delete(`/almoxarifado/estoque?_id=${_id}&material=${material}&quantidade=${quantidade}&vaiPara=${vaiPara}&servico=${servico}&equipe=${equipe}`),
    verRelatorio: (_id, opcao) => ApiBase.get(`/almoxarifado/relatorio?_id=${_id}&opcao=${opcao}`)
}

export default ApiBaseAlmoxarifado;