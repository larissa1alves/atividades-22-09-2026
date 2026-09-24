function validarSenha(senha) {
    return senha.length >= 6;
}

function autenticarUsuario(usuario, senha) {
    if (validarSenha(senha)) {
        return "Acesso concedido para " + usuario;
    } else {
        return "Senha muito curta para o usuário " + usuario;
    }
}


