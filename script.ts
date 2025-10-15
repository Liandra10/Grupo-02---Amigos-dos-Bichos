// ============================================== 
// 1. INTERFACES - NOSSAS "FICHAS DE CADASTRO" 
// ============================================== 
// 1.1 INTERFACE PARA ANIMAIS - FICHA OBRIGATÓRIA 
interface Animal { 
 
    id: number;           //Número único para identificar cada animal 
    nome: string;         //Nome do animal - deve ser texto 
    especie: string;      //Tipo: "cachorro", "gato", "pássaro", etc 
    raça: string;         //Raça: "vira-lata", "siamês", "poodle"     
    idade: number;        //Idade em anos - deve ser número 
    peso: number;         //Peso em kg - deve ser número   
    vacinado: boolean;    //true = já vacinado, false = não vacinado 
    dono: string;         //Nome do dono do animal
}

// EXPLICAÇÃO: Esta interface é como um FORMULÁRIO que TODO animal deve preencher! 

// 1.2 INTERFACE PARA SERVIÇOS - O QUE NOSSO PETSHOP OFERECE

interface Servico { 
    id: number;           //Número único para cada serviços 
    tipo: string;         //Tipo de serviços: "banho", "tosa", "consulta", etc 
    animalId: number;     //ID do animal que vai receber o serviços 
    preco: number;        //Preço em reais - deve ser número 
    concluido: boolean;   //true = serviços feitos, false = ainda não feitos 
}

// EXPLICAÇÃO: Esta interface controla TODOS os serviços do pet shop! 

// ============================================== 
// 2. LISTAS - ONDE GUARDAMOS NOSSOS DADOS 
// ============================================== 
// 2.1 LISTA DE ANIMAIS CADASTRADOS 

let animais: Animal[] = []; 

// EXPLICAÇÃO: Esta array (lista) vai guardar TODOS os animais do petshop! 

// 2.2 LISTA DE SERVIÇOS AGENDADOS   

let servicos: Servico[ ] = [ ]; 

// EXPLICAÇÃO: Esta array vai guardar TODOS os serviços marcados! 

// ============================================== 
// 3. FUNÇÕES PRINCIPAIS - O "MOTOR" DO SISTEMA 
// ============================================== 
// 3.1 FUNÇÃO PARA CALCULAR IDADE DO ANIMAL 

function calcularIdade(anoNascimento: number): number { 
const anoAtual: number = 2024;        
//Definimos o ano atual  
    return anoAtual - anoNascimento;    //Cálculo: ano atual - nascimento 
} 

// EXPLICAÇÃO: Esta função RESOLVE o problema de confundir idades! 
// 3.2 FUNÇÃO PARA CRIAR UM NOVO ANIMAL 

function criarAnimal(nome: string, especie: string, idade: number, peso: 
number): Animal { 
    return { 
        id: Math.floor(Math.random() * 1000), //Gera ID aleatório de 0 a 999 
        nome: nome,  //Usa o nome recebido 
        especie: especie,   //Usa a espécie recebida   
        raça: "indefinida", //Valor padrão para raça
        idade: idade,   //Usa a idade recebida 
        peso: peso, //Usa o peso recebido 
        vacinado: false, //SEMPRE começa não vacinado
        dono: "indefinido" //Valor padrão para dono
    }; 
} 


// 3.3 FUNÇÃO PARA AGENDAR SERVIÇOS 

function agendarServico(servico: Servico): string {
    servicos.push(servico);    //Adiciona o serviços na lista
    return ` ✅ Servico de ${servico.tipo} agendado! Preco: R$ ${servico.preco}`;
}

//  EXPLICAÇÃO: Esta função organiza todos os serviços!