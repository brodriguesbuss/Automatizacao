/// <reference types="cypress" />

//Autor: Brenda Rodrigues

import Login from '../support/pages/Logon';
import Produtos from '../support/pages/Produtos';


describe('Ongs', () => {
    it('Login com usuário bloqueado, e validar a mensagem de bloqueio exibida', () => {

        Login.acessarPagina();
        Login.preencherLoginBloqueado();
        Login.validarMensagemRetorno();

    });

    it('Realizar uma compra completa com mais de um produto no carrinho', () => {

        Login.acessarPagina();
        Produtos.preencherLoginComSucesso();
        Produtos.ehPaginaDeProdutos();
        Produtos.adicionaProdutosAoCarrinho();
        Produtos.clicarNoCarrinho();
        Produtos.clicarEmFinalizar();
        Produtos.cadastraCEP();
        Produtos.finalizarCompraDepoisDoCEP();
        Produtos.concluiCompraDepoisDeFinalizar();

    });

    it('Adicionar todos os produtos ao carrinho e validar o valor total da compra a ser pago', () => {

        Login.acessarPagina();
        Produtos.preencherLoginComSucesso();
        Produtos.ehPaginaDeProdutos();
        Produtos.adicionarTodosProdutosCarrinho();
        Produtos.clicarNoCarrinho();
        Produtos.clicarEmFinalizar();
        Produtos.cadastraCEP();
        Produtos.finalizarCompraDepoisDoCEP();
        Produtos.validaValorTotal();
        
    });
});