function fun1() { //criar de forma literal
    
}

const fun2 = function () {// armazenar em uma variável

}

const array = [function (a, b) {return a + b}, fun1, fun2] //armazenar em um array

console.log(array[0](2, 3))

const obj = {}// armazenar em um atributo de objeto
obj.falar = function () {return 'Ei'}
console.log(obj.falar())

//passar função como parametro para outra função
function run(fun){
    fun()
}

run(function () {console.log('executando...')})

//uma funcao pode retornar/conter uma outra função
function soma(a, b){
    return function(c){
        console.log(a+b+c)
    }
}

soma(2,3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)