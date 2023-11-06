mensagem = (msg) => alert(msg);
soma = (a,b) => a + b;
sub = (a,b) => a - b;
mult = (a,b) => a * b;
div = (a,b) => a / b;
raiz = x => Math.sqrt(x);

let a = "0";
let b = "0";
let c = "0";
let sa = "+";
let sb = "+";
let sc = "+";
let valor = "";
let temPonto = false;
let desligada = true;

//mensagem (soma(10, soma(8,2)));
//mensagem (soma(2, div(2,2)));
//mensagem (soma(div(80,2), mult (5,3)) );
//mensagem (soma(sub(8,5), sub(3,70)));

function porcentagem(){
    if(executa == "mult"){
        b = valor;
        escrever_display (div(mult(a,b),100));
        b = "";
        valor = "";
    }
}
function raiz_quadrada (){
    escrever_display(raiz(valor));
    valor = "";
}

function onoff (){
    if(desligada){
        escrever_display("");
        desligada = false;
    }else{
        zerar();
        escrever_display("");
        desligada =  true;
    }
}

function zerar(){
    if(desligada) return;
    a = "";
    b = "";
    valor = "";
    temPonto = "";
    escrever_display(0);
}

//Função para mostrar numeros no display
function escrever_display(num){
    document.getElementById("resultado").value = num;

}

function digitando(tecla){
    if(desligada) return;
    if( tecla == "."){
        if(!temPonto){
            temPonto = true;
            valor == tecla;
            escrever_display(valor);
        }
        return;
    }
       
    valor += tecla;
    escrever_display(valor);

}
let executa = "";
function operacao(op){
    if(desligada) return;
    executa = op;
    a = valor;
    valor = "";
    temPonto = false;
}
function calcula(){
    if(desligada) return;
    if(executa != ""){
        b=valor;
        if(executa == "mult") escrever_display(mult(a,b));
        if(executa == "div") escrever_display(div(a,b));
        if(executa == "sub") escrever_display(sub(a,b));
        if(executa == "soma") escrever_display(soma(Number(a), Number(b)));
        a = "";
        b = "";
        valor = "";
        temPonto = false;
    }
}

const calcula_eqa2g = ()=>{
    //delta = b*b - 4 .a.c
    //!= --> representa diferente
    // || representa ou
    if(a == "" || a == 0 || a == "0") return;
    a = Number(a);
    b = Number(b);
    c = Number(c);
    if (sa != "+") a = -a;
    if (sb != "+") a = -b;
    if (sc != "+") a = -c;
    let delta = (b*b) - (4*a*c);
    document.getElementById("delta").innerHTML = "Delta = " + delta;
    if(delta < 0) {
        document.getElementById("raiz").innerHTML = "Não possui rais real";

    }
    if(delta == 0) {
        let x = -b/(2*a);
        document.getElementById("raiz").innerHTML = "X1 = X2" + x;

    }
    if(delta > 0){
        let x1 = (-b + Math.sqrt(delta))/(2*a);
    }
}

const set_sinal_a = ()=>{
    sa = document.getElementById("a").value;
    calcula_eqa2g();
}

const set_sinal_b = ()=>{
    sb = document.getElementById("b").value;
    calcula_eqa2g();
}

const set_sinal_c = ()=>{
    sc = document.getElementById("c").value;
    calcula_eqa2g();
}

const set_valor_a = ()=>{
    a = document.getElementById("valor_a").value;
    calcula_eqa2g();
}

const set_valor_b = ()=>{
    b = document.getElementById("valor_b").value;
    calcula_eqa2g();
}
const set_valor_c = ()=>{
    c = document.getElementById("valor_c").value;
    calcula_eqa2g();
}
