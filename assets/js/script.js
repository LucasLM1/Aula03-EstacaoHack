// Aguarda o DOM estar pronto para executar o scripts
$(document).ready(function () {

    $('#loginAluno').submit(function (evento) {
        var usuario = $('#inputUsuario').val()
        var senha = $('#inputSenha').val()

        // comparar o usuario e a senha com os valores fixado no sistema
        // usuario
        // senha
        if (usuario == 'lucaslms' && senha == 'praqsenha') {
            $('#mensagem').addClass('alert alert-success alert-dismissible fade show')
            $('#mensagem').removeClass('alert-warning')
            $('#mensagem').text('Usuário Logado!').show().fadeOut(4000)
        } else {
            $('#mensagem').addClass('alert alert-warning alert-dismissible fade show')
            $('#mensagem').removeClass('alert-success')
            $('#mensagem').text('Usuário ou senha inválida!').show().fadeOut(4000)
            // bloqueia o evento de submit
            evento.preventDefault()
        }
    })


})