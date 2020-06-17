import ApiBase from './ApiBase';

const ApiBaseAlmoxarifado = {
    listarApontamentosIniciados: () => ApiBase.get('/apontamento?opcao=INICIADO'),
    listarApontamentosFinalizados: () => ApiBase.get('/apontamento?opcao=FINALIZADO'),
    iniciarApontamento: (payload) => ApiBase.post('/apontamento', payload),
    finalizarApontamento: (payload) => ApiBase.put('/apontamento', payload)
}

export default ApiBaseAlmoxarifado;