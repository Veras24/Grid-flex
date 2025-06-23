function adicionarCaracter(caracter){
    const valorInput = document.querySelector('.display').value

    document.querySelector('.display').value = valorInput + caracter

}
   
    function limparTela() {
        document.querySelector('.display').value = ''
    }

    function calcular() {
        const c=valorInput = document.querySelector('.display').value
        // eval é o calculo//
        document.querySelector('.display').value = eval(valorInput)
    }

    function inverte(){
        const valorInput = document.querySelector('.display').value
        document.querySelector('.display').value = valorInput * -1
    }
