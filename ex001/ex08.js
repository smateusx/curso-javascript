function frutas(fruta) {
    let temFruta
    switch(fruta) {
        case 'maca':
            temFruta = 'Não vendemos esta fruta aqui'
            break
        case 'kiwi':
            temFruta = 'Estamos com escassez de kiwis'
            break
        case 'melancia':
            temFruta = 'Aqui está, são 3 reais o quilo!'
            break
        default:
            temFruta = 'ERRO!!!'
            break
    }
    console.log(temFruta)
}

frutas('maca')
frutas('kiwi')
frutas('melancia')