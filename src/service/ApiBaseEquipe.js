import ApiBase from './ApiBase';

const ApiBaseEquipe = {
    criarEquipe: (payload) => ApiBase.post('/equipe', payload),
    listarEquipes: () => ApiBase.get('/equipe'),
    listarEquipe: (_id) => ApiBase.get(`/equipe?_id=${_id}`),
    listarFuncionariosSemEquipe: () => ApiBase.get('/equipe/funcionario'),
    retirarFuncionario: (_idEquipe, _idFuncionario) => ApiBase.delete(`/equipe/funcionario?_id=${_idEquipe}&funcionario=${_idFuncionario}`),
    adicionarFuncionario: (payload) => ApiBase.put(`/equipe/funcionario`, payload),
    listarFuncionarios: (_idEquipe) => ApiBase.get(`/equipe/verFuncionarios?_id=${_idEquipe}`),
    verVeiculo: (_idEquipe) => ApiBase.get(`/equipe/veiculo?_id=${_idEquipe}`),
    listarVeiculosSemEquipe: () => ApiBase.get(`/equipe/verVeiculosSemEquipes`),
    definirVeiculo: (payload) => ApiBase.put('/equipe/veiculo', payload),
    deletarVeiculo: (_idEquipe) => ApiBase.delete(`/equipe/veiculo?_id=${_idEquipe}`),
    verFaturamento: (_idEquipe) => ApiBase.get(`/equipe/faturamento?_id=${_idEquipe}`),
    graficos: () => ApiBase.get('/equipe/faturamentoTodasEquipes')
}

export default ApiBaseEquipe;