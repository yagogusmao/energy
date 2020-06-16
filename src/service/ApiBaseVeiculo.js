import ApiBase from './ApiBase';

const ApiBaseVeiculo = {
    criarVeiculo: (payload) => ApiBase.post('/veiculo', payload),
    listarVeiculos: () => ApiBase.get('/veiculo'),
    listarVeiculosSemEquipe: () => ApiBase.get('/veiculo')
}

export default ApiBaseVeiculo;