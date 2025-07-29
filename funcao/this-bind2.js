function Pessoa() {
    this.idade = 0

    setInterval(function() {//foi que deu problema kkkkkk
        this.idade++
        console.log(this.idade)
    }.bind(this), 100)
}

new Pessoa