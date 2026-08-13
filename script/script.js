const botaoR = document.querySelector("#R"); // Este será nosso verificador para averiguar a existência de um botãoR na página
if (botaoR){ 
    botaoR.addEventListener('click', () => {
        document.querySelector(".codigo_console").classList.remove("active");
        document.querySelector(".console_codigo").classList.add("active");
    });
}

const botaoC = document.querySelector("#C");
if (botaoC){   
        botaoC.addEventListener('click', () => {
            document.querySelector(".console_codigo").classList.remove("active");
            document.querySelector(".codigo_console").classList.add("active");
    })
}

const botaoProxExerc = document.querySelector("#proximoExercicio");
if (botaoProxExerc) {
    botaoProxExerc.addEventListener('click', (e) => {
        e.preventDefault(); // previne o <a href="#"> de recarregar a página

        let caminho = window.location.pathname;
        let nomeDoArquivo = caminho.split('/').pop();

        let numero = parseInt(nomeDoArquivo.match(/\d+/g).join(''), 10);
        let novoNumero = numero + 1;
        novoNumero = novoNumero.toString().padStart(2, '0'); // padStart() é o tamanho final esperado seguido pelo o que colocar no começo.
        let novoNomeDoArquivo = `ex${novoNumero}.html`;
        window.location.href = novoNomeDoArquivo;
    })
}

const botaoExercAnt = document.querySelector("#exercicioAnterior");
if (botaoExercAnt){
    botaoExercAnt.addEventListener('click', (e) => {
        e.preventDefault();

        let caminho = window.location.pathname;
        let nomeDoArquivo = caminho.split('/').pop();
        
        let numero = parseInt(nomeDoArquivo.match(/\d+/g).join(''), 10);
        let novoNumero = numero -1;
        novoNumero = novoNumero.toString().padStart(2, '0');
        let novoNomeDoArquivo = `ex${novoNumero}.html`;
        window.location.href = novoNomeDoArquivo;
    })
}

//### Fazer a página mudar e lembrar do Tema Claro/Escuro

let moon = document.querySelector("#moon");
let sun = document.querySelector("#sun");
let initialThemeToggleStatus = localStorage.getItem("tema") // Utilize para saber se o tema claro está ligado ou desligado.
if (initialThemeToggleStatus === "light") {
        moon.style.display = "block";
        sun.style.display = "none";
        document.querySelector("body").classList.add("light");
        document.querySelector("h4").classList.add("light");
} else if (initialThemeToggleStatus === "dark" || initialThemeToggleStatus === null){
        moon.style.display = "none";
        sun.style.display = "block";
        document.querySelector("body").classList.remove("light");
        document.querySelector("h4").classList.remove("light");
        localStorage.setItem("tema","dark");
}
document.querySelector(".theme").addEventListener('click', () => {

    // Este "getComputedStyle(moon).display" serve para consultar o resultado de todos os estilos somados, esteja ele em outro arquivo css, esteja ele inline, etc.
    if (localStorage.getItem("tema") == "dark"){
        // Para mudar o estilo da tag usamos igual a baixo:
        moon.style.display = "block";
        sun.style.display = "none";
        localStorage.setItem("tema","light");
        document.querySelector("body").classList.add("light");
        document.querySelector("h4").classList.add("light");
    } else if (localStorage.getItem("tema") == "light") {
        moon.style.display = "none";
        sun.style.display = "block";
        document.querySelector("body").classList.remove("light");
        document.querySelector("h4").classList.remove("light");
        localStorage.setItem("tema","dark");
    }
});

const path = window.location.pathname;
console.log(path)
if (path.endsWith("/pagMain.html")) {
    document.querySelector("aside").innerHTML = `
    <ul>
        <li><a href="Atividades_resolvidas/EstruturaSequencial.html">Estrutura sequencial</a></li>
        <li>Estrutura de decisão</li>
        <li>Estrutura de repetição</li>
        <li>Exercícios sobre listas</li>
        <li>Exercícios sobre funções</li>
        <li>Exercícios sobre strings</li>
        <li>Exercícios sobre arquivos</li>
        <li>Exercícios sobre classes</li>
        <li>Lista de projetos</li>
        <li>Lista de dados</li>
    </ul>`
} else if (path.endsWith("/Atividades_resolvidas/EstruturaSequencial.html")) {
    document.querySelector("aside").innerHTML = `
    <ul>
        <li><a href="./EstruturaSequencial.html">Estrutura sequencial</a></li>
        <li>Estrutura de decisão</li>
        <li>Estrutura de repetição</li>
        <li>Exercícios sobre listas</li>
        <li>Exercícios sobre funções</li>
        <li>Exercícios sobre strings</li>
        <li>Exercícios sobre arquivos</li>
        <li>Exercícios sobre classes</li>
        <li>Lista de projetos</li>
        <li>Lista de dados</li>
    </ul>`
} else {
    document.querySelector("aside").innerHTML = `
    <ul>
        <li><a href="../EstruturaSequencial.html">Estrutura sequencial</a></li>
        <li>Estrutura de decisão</li>
        <li>Estrutura de repetição</li>
        <li>Exercícios sobre listas</li>
        <li>Exercícios sobre funções</li>
        <li>Exercícios sobre strings</li>
        <li>Exercícios sobre arquivos</li>
        <li>Exercícios sobre classes</li>
        <li>Lista de projetos</li>
        <li>Lista de dados</li>
    </ul>`
}
