//Procurar o botão
document.querySelector("#add-time")
// Quando clicar no botao
.addEventListener("click", cloneField)

// Executar uma açao
function cloneField(){
    // Duplicar os campos
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)

    //pegar os campos
    const fields = newFieldContainer.querySelectorAll("input")
  
    // para cada campo, limpar
    fields.forEach(function(field) {
        //pega o field do momento e limpa ele
        field.value = ""
    })
    
    // Colocar na pagina
    document.querySelector("#schedule-items").appendChild(newFieldContainer)
}