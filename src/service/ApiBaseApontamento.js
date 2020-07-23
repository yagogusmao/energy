import ApiBase from './ApiBase';

const ApiBaseApontamento = {
    listarApontamentosIniciados: () => ApiBase.get('/apontamento?opcao=INICIADO'),
    listarApontamentosFinalizados: () => ApiBase.get('/apontamento?opcao=FINALIZADO'),
    iniciarApontamento: (payload) => ApiBase.post('/apontamento', payload),
    finalizarApontamento: (payload) => ApiBase.put('/apontamento', payload),
    listarSupervisores: () => ApiBase.get('/apontamento/listarSupervisores'),
    listarEncarregados: () => ApiBase.get('/apontamento/listarEncarregados'),
    verApontamento: (_id) => ApiBase.get(`/apontamento?_id=${_id}`),
    verAtividades: (_id) => ApiBase.get(`/apontamento/verAtividades?_id=${_id}`),
    faturar: (payload) => ApiBase.post(`/apontamento/faturar`, payload),
    pesquisarObra: (codigoObra) => ApiBase.get(`/apontamento/faturar/obra?codigoObra=${codigoObra}`),
    faturarObra: (payload) => ApiBase.post(`/apontamento/faturar/obra`, payload),
    dashboard: () => ApiBase.get('/apontamento/dashboard')
}

export default ApiBaseApontamento;