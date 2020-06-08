import ApiBase from './ApiBase';

const ApiBaseUsuario = {
    login: (payload) => ApiBase.post("/usuario/login", payload),
}

export default ApiBaseUsuario;