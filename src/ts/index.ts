//Estudos typescript

//tsc (arquivo.ts)

//tipos primitivos: number, boolean, string
let ligado:boolean = true;
let num:number = 5;
let altura: number = 1.70;
let word:string = "Hello";

//tipos especiais: null, undefined
let nulo:null = null;
let undef: undefined = undefined;

//tipos abrangentes: any, void
let qualquer: any = [5, '', true, null, undefined];
let vazio:void;

//objeto sem previsibilidade

let produto: object = {
    name: "Richard",
    cidade: 'Ma',
    idade: 19,
    vivo: true
};

//objeto tipado com previsibilidade

type produtoLoja = {
    nome:string;
    preco:number;
    unidade:number;
};

let meuProduto: produtoLoja = {
    nome: 'Mesa',
    preco: 50.99,
    unidade: 102
};

//arrays

let dados: string[] = ['opa', 'ola', 'mundo'];
let dados2: Array<string> = ['hello', 'world'];

//array de multi tipos

let infos:(string | number)[] = ['ola', 5];


//tuplas: vetores multitypes que temos locais certos pra cada coisa, precisa seguir a ordem de definição

let boleto:[string, number, number] = ['agua conta', 500, 913];
