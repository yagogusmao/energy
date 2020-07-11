import ApiBase from './ApiBase';

const ApiBaseAtividade = {
    criarAtividade: (payload) => ApiBase.post('/atividade', payload),
    listarAtividades: (nome) => ApiBase.get(`/atividade?nome=${nome}`)
}

export default ApiBaseAtividade;