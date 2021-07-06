//Ações de interação com a página

//Faz o requerimento dos elementos no arquivo elements.js
const elemento = require('./elements').ELEMENTS;

class Login {

    acessarPagina() {
        //Abre o site 
        //OBS: Abrir no Chrome
        cy.visit('https://www.saucedemo.com/');
    }

    preencherLoginBloqueado() {
        //Preenche o login com usuário bloqueado
        cy.get(elemento.nome).type('locked_out_user');

        //Preenche a senha com usuário bloqueado
        cy.get(elemento.senha).type('secret_sauce');

        //Clica em logar
        cy.get(elemento.botaoLogar).click();
    }

    validarMensagemRetorno() {
        //Valida mensagem de bloqueio
        cy.contains('Epic sadface: Sorry, this user has been locked out.').should('be.visible');

    }

}

//Indica que essa classe pode ser usada em outro lugar
export default new Login();