function salarios() {

    let horas;
    let taxa;
    let extra;
    let montante;
    let salario;

    horas = document.getElementById("horasId")
    taxa = document.getElementById("taxaId")
    salario = document.getElementById("salario")
    horas = horas.value
    taxa = taxa.value

    if (horas > (8 * 24)) {
        extra = horas - (8 * 24)
        montante = (190 * taxa) + (1.5 * extra * taxa)
        salario.innerText = montante.toLocaleString() + " K"

    } else {
        montante = horas * taxa
        salario.innerText = montante.toLocaleString() + " K"
    }

}