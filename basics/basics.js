// Tudo com '//' é um comentário em linguagem natural
// Os comentários são para ser lidos com atenção eles explicam o código.

/* Capítulo 2: Extrutura Léxica */

// JavaScript permite que programadores escrevam programas com outros idiomas
var sí = true;
var pi = 3.14;

// Usando palavra reservada como uma váriavel
var const_ = 300;
var json = 'JavaScript Object Notation';

// Ponto e vírgulas opcionais
var num1 = 2; // Esse ponto e vírgula poderia ser omitido
var num2 = 3;
var num3, num4;
num3 = 3, num4 = 4;

console.log(pi.toString());
console.log(typeof pi, const_);
console.log(json);
console.log(num3, num4)

/* Capítulo 3: Tipos, Valores, Variáveis */
// 3.1 Números
var math = {
    elevado: function (valor, expo) {
        return valor ** expo
    },
    soma: function (num1, num2) {
        return num1 + num2
    },
    factorial: function (num) {
        var fact = 1;
        if (num == 1 || num == 0) {
            return 1
        }
        for (var i = 1; i <= num; i++) {
            fact = fact * i
        }
        return fact
    }
}

var infP = +1 / 0;
var infN = -1 / 0;

var x = .3 - .2;
var y = .2 - .1;

// Trabalhando com datas e horas
var then = new Date(2020, 8, 2);
var later = new Date(2020, 8, 2, 15, 20, 20);
var now = new Date();
var elapsed = now - then;

// 3.2 Texto

"" //  A string vazia: ela tem zero caracteres
'testando'
"3.14"
"3,14"
"1.200,00"
'name="myform"'
"Whoudn't you prefer O'Reilly's book?"
"This string\nhas two lines"
"π is the raio of a circle's circumference to its diameter"

"duas\nlinhas" // Uma string representando 2 linhas escritas em uma linha
"um\
linha\
muito\
longa" // Uma string de 1 linhas escrita em 4 linha

'apas simples com scape "can\'t publish this post."'
'You\'re right, it can\'t be a quote.'
'\xA9', '\u03c0'

// 3.2.1 Trabalhando com strings

var msg = "Olá, " + "tudo bem JavaScript?";
var nome = 'Jo Caetano';
var getting = 'Welcome to my blog, ' + ' ' + nome;

var string = 'Olá, Mundo!'

string.charAt(0);
string.charAt(string.length - 1);
string.substring(1, 5);
string.slice(1, 4);
string.slice(3);
string.indexOf('1');
string.lastIndexOf('1');
string.indexOf("1", 4);
string.split(", ");
string.replace('o', 'O');
string.toUpperCase();
string[0]
string[string.length - 1]

// Comparações de padrões

// /^HTML/
// /[1-9][0-9]*/
// /\bjavascript\b/i

var texto = 'testing: 1, 2, 3'; // Exemplo de texto
var padrao = /\d+/g; // Corresponde a todas as instâncias de um ou mais dígitos
var telefone = '1202299';

// 3.3 Valores booleanos
var a = 4;
var b = 3;

if (a == 4)
    b = b + a
else
    a = a + b

// 3.4 Null e Undefined

// 3.5 Objecto Global
var global = this;

// 3.6 Objectos Wrapper

var str = 'testando';
str.len = 8;
var t = str.len;

var s = "test",
    n = 1,
    b = true;

var S = String(s),
    N = Number(n),
    B = Boolean(b);

// 3.7 Valores primitivos imutáveis e referências de objectos mutáveis

/* Os tipos primitivos em JS são imutaveis. 
 *  Talve já e tenha escrito isso lá em cima mas não   
 *  fa mal relembrar aqui em baixo.
 */

var saudacao = 'Olá';
saudacao = saudacao[0].toUpperCase() + saudacao.substring(1, saudacao.length + 1)

/**
 * Os objectos em JS são mutaveis "THE BIG DIFFERENCE"
 */

var cord = {
    lat: -123.3434
}
cord.lat = -1.30340;
cord.lng = 233.2323;

var frutas = [
    'Pera',
    'Banana',
    'Maçã',
    'Laranja',
    'Morango'
]

frutas[0] = 'Abacate';
frutas[4] = 'Melão';

var pontos = {
    x: 1,
    y: 2,
    z: 2
}

const res = pontos.x === pontos.y || pontos.y === pontos.z;

// Comparando dois Arrays

function equalArrays(a, b) {
    if (a.length != b.length)
        return false
    for (var i = 0; i < a.length; i++)
        if (a[i] !== b[i])
            return false
    return true
}

// 3.8 Conversões de tipos
// 3.8.2 Conversões explícitas

var n = 17;
var binary = n.toString(2);
var ternay = n.toString(3)
var octal = n.toString(8);
var hex = n.toString(16);

var numero = 18.343;
numero.toFixed(0);
numero.toFixed(2);
numero.toFixed(5);
numero.toExponential(1);
numero.toExponential(3);
numero.toPrecision(5);
numero.toPrecision(10);

parseInt("3 blind nice"); // => 3 
parseFloat(" 3.14 meters"); // => 3.14
parseInt("-12.34"); // => -12
parseInt("0xFF"); // => 255
parseInt("0xff"); // => 255
parseInt("-0xff"); // => -255
parseInt(.03); // => 0
parseInt(011); // => 9
parseFloat(".1"); // => 0.1
parseInt("0.1"); // => 0
parseInt(".1") // => NaN
parseFloat("$72.47"); // => NaN


console.log('Expoente: ', Math.pow(2, 53));
console.log('Literais: ', 0xff + 0xa, 0xcafe911, 0377, 017 + 010);
console.log('Literais ponto fluante: ', 3.03e2);
console.log('Aritmetica: ', math.elevado(2, 10));
console.log('Soma: ', math.soma(2, 10));
console.log('Factorial: ', math.factorial(5));
console.log(infP - infN, Number.POSITIVE_INFINITY, Number.MAX_VALUE + 1);
console.log(Number.MIN_VALUE - Number.POSITIVE_INFINITY, 0 / 0);
console.log(x, y, x == y, x == .1, y == .1);
console.log('Objecto Date', later.getFullYear(), later.getMonth());
console.log('Objecto Date', later.getDate(), later.getDay(), later.getHours());
console.log('Objecto Date', later.getUTCHours(), later.toString(), later.toUTCString());
console.log('Objecto Date', later.toLocaleDateString(), later.toLocaleTimeString());
console.log('Objecto Date', later.toISOString());
console.log('apas simples com scape "can\'t publish this post."');
console.log('\xA9 \u03c0');
console.log('\tNome, \tIdade');
console.log('\v', msg, '\n', getting);
console.log(padrao.test(texto)); // verdadeiro: existe uma correspondência 
console.log(texto.search(padrao)); // 9: posição da primeira correspondência
console.log(texto.match(padrao)); //  ["1", "2", "3"]: array de todas as correspondências
console.log(texto.replace(padrao, '#')); // "testing: #, #, #"
console.log(texto.split(/\D+/)); // ["","1","2","3"]: divide em não dígitos
console.log(telefone.match(/[1-9][0-9]*/));
console.log(a, b);
console.log(str.len, t, S.len, s == S, b === B, typeof s, typeof S);
console.log(saudacao, cord, res)
console.log(equalArrays([1, 2, 3, 4], [1, 3, 5, 3]), equalArrays([1, 3], [1, 3]))
console.log(binary, ternay, octal, hex);