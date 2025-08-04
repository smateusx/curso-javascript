function comprar(veiculo) {
    let comprarVeiculo
    switch (veiculo) {
        case 'hatch':
            comprarVeiculo = 'Compra efetuada com sucesso'
            break
        case 'sedan':
            comprarVeiculo = 'Tem certeza que não prefere este modelo?'
            break
        case 'caminhao': 
            comprarVeiculo = 'Tem certeza que não prefere este modelo?'
            break
        case 'moto':
            comprarVeiculo = 'Tem certeza que não prefere este modelo?'
            break
        default:
            comprarVeiculo = 'Não trabalhamos com este tipo de automóvel aqui'
            break
    }
    console.log(comprarVeiculo)
}

comprar('moto')