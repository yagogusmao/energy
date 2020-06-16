import ApiBase from './ApiBase';

const ApiBaseFuncionario = {
    criarFuncionario: (payload) => ApiBase.post('/funcionario', payload),
    listarFuncionarios: () => ApiBase.get('/funcionario')
}

export default ApiBaseFuncionario;