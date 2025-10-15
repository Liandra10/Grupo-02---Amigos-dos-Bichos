"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// EXPLICAÇÃO: Esta interface controla TODOS os serviços do pet shop! 
// ============================================== 
// 2. LISTAS - ONDE GUARDAMOS NOSSOS DADOS 
// ============================================== 
// 2.1 LISTA DE ANIMAIS CADASTRADOS 
let animais = [];
// EXPLICAÇÃO: Esta array (lista) vai guardar TODOS os animais do petshop! 
// 2.2 LISTA DE SERVIÇOS AGENDADOS   
let servicos = [];
// EXPLICAÇÃO: Esta array vai guardar TODOS os serviços marcados! 
// ============================================== 
// 3. FUNÇÕES PRINCIPAIS - O "MOTOR" DO SISTEMA 
// ============================================== 
// 3.1 FUNÇÃO PARA CALCULAR IDADE DO ANIMAL 
function calcularIdade(anoNascimento) {
    const anoAtual = 2024;
    //Definimos o ano atual  
    return anoAtual - anoNascimento; //Cálculo: ano atual - nascimento 
}
// EXPLICAÇÃO: Esta função RESOLVE o problema de confundir idades! 
// 3.2 FUNÇÃO PARA CRIAR UM NOVO ANIMAL 
function criarAnimal(nome, especie, idade, peso) {
    return {
        id: Math.floor(Math.random() * 1000), //Gera ID aleatório de 0 a 999 
        nome: nome, //Usa o nome recebido 
        especie: especie, //Usa a espécie recebida   
        raça: "indefinida", //Valor padrão para raça
        idade: idade, //Usa a idade recebida 
        peso: peso, //Usa o peso recebido 
        vacinado: false, //SEMPRE começa não vacinado
        dono: "indefinido" //Valor padrão para dono
    };
}
// 3.3 FUNÇÃO PARA AGENDAR SERVIÇOS 
function agendarServico(servico) {
    servicos.push(servico); //Adiciona o serviços na lista
    return ` ✅ Servico de ${servico.tipo} agendado! Preco: R$ ${servico.preco}`;
}
//  EXPLICAÇÃO: Esta função organiza todos os serviços!
//# sourceMappingURL=script.js.map