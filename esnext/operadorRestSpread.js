//spread com objeto
const funcionario = { nome: 'Maria', salario: 12345.69}
const clone = { ativo: true, ...funcionario}
console.log(clone)

//spread com array
const grupoA = ['João', 'Marta', 'Mateus']
const grupoB = ['Marcelo', 'Cintia', ...grupoA]
console.log(grupoB)