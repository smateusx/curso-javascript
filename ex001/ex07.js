function diaSemana(diaNumero){
    let nomeDia;
    switch (diaNumero) {
        case 1: 
            nomeDia = 'Domingo';
            break;
        case 2: 
            nomeDia = 'Segunda-Feira'
            break;
        case 3: 
            nomeDia = 'Terça-Feira'
            break;
        case 4: 
            nomeDia = 'Quarta-Feira'
            break;
        case 5: 
            nomeDia = 'Quinta-Feira'
            break;
        case 6: 
            nomeDia = 'Sexta-Feira'
            break;
        case 7: 
            nomeDia = 'Sábado'
            break;
        default:
            nomeDia = 'Número inválido!'
    }
    
    console.log(nomeDia)
}

diaSemana(2)