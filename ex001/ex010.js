function num(numero){
    let num1
    switch(numero){
        case 0:
            num1 = 'zero'
            break
        case 1:
            num1 = 'um'
            break
        case 2:
            num1 = 'dois'
            break
        case 3:
            num1 = 'três'
            break
        case 4:
            num1 = 'quatro'
            break
        case 5:
            num1 = 'cinco'
            break
        default:
            num1 = 'número fora do intervalo!'
            break
    }
    console.log(num1)
}
num(1)