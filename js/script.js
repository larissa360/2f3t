mensagem = (msg) => alert(msg);
soma = (a,b) => a + b;
sub = (a,b) => a - b;
mult = (a,b) => a * b;
div = (a,b) => a / b;
raiz = x => Math.sqrt(x);

let a = "";
let b = "";
let valor = "";
let temPonto = false;
//mensagem(soma(10,soma(8,2)));
//mensagem(soma(2,div(2,2)));
//mensagem(soma(div(80,2),mult(5,3)));
//mensagem(soma(sub(8,5),sub(3,70)));

function escrever_display(num){

document.getElementByid("resultado").value = num;
}
 
function digitando(tecla){

if( tecla == "."){
    if(!temPonto){
        temPonto = true;
         valor += tecla;
         escrever_display(valor);

    }
    return;
}
valor += tecla;
escrever_display(valor);

}

let executa = "";
function operacao(op){
    executa = op;
    a = valor;
    valor = "";
    temPonto = false;
}

function calcula(){
    if(executa != ""){
        b=valor;
        if(executa == "mult") escrever_display(mult(a,b));
        if(executa == "div") escrever_display(div(a,b));
        if(executa == "sub") escrever_display(sub(a,b));
        if(executa == "soma") escrever_display(soma(Number(a),Number(b)));
        a = "";
        b = "";
        valor = "";
        temPonto = false;

    }
}