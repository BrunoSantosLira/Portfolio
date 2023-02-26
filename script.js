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

function destacarIcone(habilidade){
    let icon = document.getElementById('icone_destaque')
    let paragrafo = document.getElementById('paragrafo_destaque')
    icon.style.backgroundColor = 'white'
    console.log(habilidade)

    switch (habilidade){
        case 'html':
            icon.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
            
            paragrafo.innerHTML = 'HTML5(Linguagem de marcação de Hipertexto) é uma linguagem utilizada na construção e estruturação de páginas web e seus componentes visuais'
            break;

        case 'css':
            icon.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
       
            paragrafo.innerHTML = 'CSS3(Folha de estilo em cascata) é uma linguagem de estilização utilizada em páginas web e em seus componentes visuais'
            break;
        
        case 'javascript':
            icon.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
            
            paragrafo.innerHTML = 'JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web. '
            break;
        case 'php':
            icon.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg'

            paragrafo.innerHTML = 'PHP é uma linguagem interpretada livre, usada originalmente apenas para o desenvolvimento de aplicações presentes e atuantes no lado do servidor, capazes de gerar conteúdo dinâmico na World Wide Web. '
            break;
        case 'python':
            icon.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'

            paragrafo.innerHTML = 'Python é uma linguagem de programação de alto nível, interpretada de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte. Foi lançada por Guido van Rossum em 1991. '
            break;

        case 'jquery':
            icon.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original-wordmark.svg'

            paragrafo.innerHTML = 'jQuery é uma biblioteca livre que contém funções da linguagem de programação JavaScript que interage com páginas em HTML, desenvolvida para simplificar os scripts executados/interpretados no navegador de internet do usuário. '
            break;
        case 'mysql':
            icon.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg'

            paragrafo.innerHTML = 'O MySQL é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface. É atualmente um dos sistemas de gerenciamento de bancos de dados mais populares da Oracle Corporation, com mais de 10 milhões de instalações pelo mundo'
            break;
        case 'sass':
        icon.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg'

        paragrafo.innerHTML = 'Sass é uma linguagem de folhas de estilo concebida inicialmente por Hampton Catlin e desenvolvida por Natalie Weizenbaum. Depois de suas versões iniciais, Weizenbaum e Chris Eppstein continuaram a estender Sass com SassScript, uma simples linguagem de script usada em arquivos Sass.'
        break;
        case 'wordpress':
            icon.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg'
    
            paragrafo.innerHTML = 'WordPress é um sistema livre e aberto de gestão de conteúdo para internet, baseado em PHP com banco de dados MySQL, executado em um servidor interpretador, voltado principalmente para a criação de páginas eletrônicas e blogs online. '
            break;
        case 'git':
            icon.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg'
    
            paragrafo.innerHTML = 'Git ₍ₒᵤ em inglês britânico₎ é um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software, mas pode ser usado para registrar o histórico de edições de qualquer tipo de arquivo. '
            break;
        case 'bootstrap':
            icon.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg'
    
            paragrafo.innerHTML = 'Bootstrap é um framework web com código-fonte aberto para desenvolvimento de componentes de interface e front-end para sites e aplicações web, usando HTML, CSS e JavaScript, baseado em modelos de design para a tipografia, melhorando a experiência do usuário em um site amigável e responsivo.'
            break;

    }
}

$('#nav_terminal').on('submit', (e) =>{
    e.preventDefault()
    var bloco1 = document.getElementById('bloco_sobreMin')
    var bloco2 = document.getElementById('bloco_projetos')
    var bloco3 = document.getElementById('bloco_habilidades')
    let valor = $('#input_terminal').val()
    
    switch  (valor) {
        case '1':
            bloco2.classList = 'd-none'
            bloco3.classList = 'd-none'
            bloco1.classList = 'd-block animar'


            break;

        case '2':
            bloco1.classList = 'd-none'
            bloco2.classList = 'd-block animar'
            bloco3.classList = 'd-none'
            break;
        
        case '3':
            bloco1.classList = 'd-none'
            bloco2.classList = 'd-none'
            bloco3.classList = 'd-block animar'
            break;
        
    }

    document.getElementById('input_terminal').value = ''

})




var text = document.querySelector('#linha')
digitar(text)


