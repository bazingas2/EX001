function contar() {
    var startNumber = document.getElementById("start")
    var endNumber = document.getElementById("end")
    var stepNumber = document.getElementById("step")
    var result = document.getElementById("result")

    if (startNumber.value.length == 0 || endNumber.value.length == 0 || stepNumber.value.length == 0) {
        result.innerHTML = "⚠️ Impossível contar! Preencha todos os campos."
    } else {
        result.innerHTML = "Contando: <br>"
        result.innerHTML += "🏠 "
        let i = Number(startNumber.value)
        let f = Number(endNumber.value)
        let p = Number(stepNumber.value)

        if (p <= 0) {
            window.alert("⚠️ Passo inválido! Usando passo 1 para continuar a contagem.")
            p = 1
        }

        if (i < f) {
            // Contagem crescente
            for (let c = i; c <= f; c += p) {
                result.innerHTML += `${c} ✌🏻 `
            }
        } else {
            // Contagem regressiva
            for (let c = i; c >= f; c -= p) {
                result.innerHTML += `${c} ✌🏻 `
            }
        }
        result.innerHTML += `🏁`
    }
}
