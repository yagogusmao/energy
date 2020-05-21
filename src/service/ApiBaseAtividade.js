import ApiBase from './ApiBase';

const ApiBaseAtividade = {
    criarAtividade: (payload) => ApiBase.post('/atividade', payload),
    listarAtividades: () => ApiBase.get('/atividade')
}

export default ApiBaseAtividade;