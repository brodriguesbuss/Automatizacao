//Ações de interação com a página

//Faz o requerimento dos elementos no arquivo elements.js
const elemento = require('./elements').ELEMENTS;

class Produtos {

    preencherLoginComSucesso() {
        //Faz acesso com usuário com permissão
        cy.get(elemento.nome).type('standard_user');
        cy.get(elemento.senha).type('secret_sauce');
        cy.get(elemento.botaoLogar).click();
    }

    ehPaginaDeProdutos() {
        //Valida se está na página de produtos que só é exibida para usuário logado
        cy.contains('Products').should('be.visible');
    }

    adicionaProdutosAoCarrinho() {

        //Adiciona produtos ao carrinho de compras
        cy.get(elemento.produto1).click();
        cy.get(elemento.produto2).click();
    }

    clicarNoCarrinho() {
        //Clica no carrinho de compras
        cy.get(elemento.carrinho).click();
    }

    clicarEmFinalizar() {

        //Clica em finalizar a compra
        cy.get(elemento.botaoFinalizarCarrinho).click();

    }

    cadastraCEP() {

        //Preenche o primeiro nome
        cy.get(elemento.nomeCEP).type("Teste");

        //Preenche o sobrenome
        cy.get(elemento.sobrenomeCEP).type("Automatizado");

        //Informa o CEP
        cy.get(elemento.cep).type("89010-001");

    }

    finalizarCompraDepoisDoCEP() {

        //Finaliza a compra
        cy.get(elemento.botaoFinalizaDepoisDoCep).click();

    }

    concluiCompraDepoisDeFinalizar() {

        //Conclui a compra
        cy.get(elemento.botaoConcluiDepoisDoCep).click();

        //Valida mensagem
        cy.contains('THANK YOU FOR YOUR ORDER').should('be.visible');
    }

    adicionarTodosProdutosCarrinho() {
        cy.get(elemento.produto1).click();
        cy.get(elemento.produto2).click();
        cy.get(elemento.produto3).click();
        cy.get(elemento.produto4).click();
        cy.get(elemento.produto5).click();
        cy.get(elemento.produto6).click();
    }

    validaValorTotal() {
        //Validar valor total a ser pago
        cy.get('.summary_total_label').contains('Total: $140.34');
    }

}


//Indica que essa classe pode ser usada em outro lugar
export default new Produtos();