function digitar(texto){
    let elemento = texto.innerText.split('')
    console.log(elemento)
    texto.innerHTML = ''

    elemento.forEach((lista,i) => {

        setTimeout(() => {
            if(lista == '[' || lista == '>'){
                texto.innerHTML += `<br>${lista}`
            }else{
            texto.innerHTML += lista
            }
            
        }, 10 * i);
       
        document.getElementById("input_terminal").focus();
    });
   
}

function console_clickado(){
    document.getElementById("input_terminal").focus();
}

$('#nav_terminal').on('submit', (e) =>{
    e.preventDefault()
    var bloco = document.getElementById('bloco_sobreMin')
    let valor = $('#input_terminal').val()
    
    switch  (valor) {
        case '1':
            
            bloco.classList = 'd-block'
            break;

        case '2':
            console.log('caso 2')
            break;
        
        case '3':
            console.log('caso 3')
            break;
        
    }

    document.getElementById('input_terminal').value = ''

})




var text = document.querySelector('#linha')
digitar(text)


