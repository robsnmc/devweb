const soma = function (a,b){
    return a + b;
    
}
console.log(soma (3, 8))

const pessoa = {
    nome: "Linyker",
    idade: 22, 
    saudar: function (){
        return `Oi meu nome é ${this.nome} , e eu tenho ${this.idade} de idade. `;
    }

}
console.log(pessoa.nome);
console.log(pessoa.saudar());