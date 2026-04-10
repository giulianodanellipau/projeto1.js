let filmes = [];

//Cadastro
document.getElementById("btnCadastrar").addEventListener("click", cadastrarFilme);

//Filtros
document.getElementById("btnFiltrarClassificacao").addEventListener("click", filtrarClassificacao);
document.getElementById("btnFiltrarAno").addEventListener("click", filtrarFiltrarAno);

function cadastrarFilme() {
    let titulo = document.getElementById("titulo").value;
    let ano = document.getElementById("ano").value;
    let classificacao = document.getElementById("classificacao").value;

    //Validação
    if (titulo === "" || ano === "" || classificacao === "") {
        alert("Preencha todos os campos!!!");
        return;
    }

    let filme = {
        titulo: titulo,
        ano: Number(ano),
        classificacao: classificacao,
    }

    filmes.push(filme);
    limparCampos();
    exibirFilmes(filmes);

}

//Exibir
function exibirFilmes(lista){
    let texto = lista.map(f => `${f.titulo} (${f.ano}) - Classificação: ${f.classificacao}`
    ).join("<br>");
    document.getElementById("listaFilmes").innerHTML = texto;
}

//Filtrar classificação
function filtrarClassificacao(){
    let filtro = document.getElementById("filtroClassificacao").value;
    let resultado = filmes.filter (f => f.classificacao === filtro);
    exibirFilmes(resultado);
}

function filtrarFiltrarAno(){
    let filtro = document.getElementById("filtroAno").value;
    let resultado = filmes.filter(f => f.ano == filtro);
    exibirFilmes(resultado);
}

function limparCampos(){
    document.getElementById("titulo").value = "";
    document.getElementById("ano").value = "";
    document.getElementById("classificacao").value = "";
}

/*
document => o que faz?
R: refere à janela que contém os objetos do HMTL

getElementById => o que faz?
R: retorna um objeto do documento a partir de um ID específico

value => o que é?
R: é um valor que pode ser atribuído 

diferencie (==) (===)
R: (==) é para igualar números, (===) é para igualar texto

join => o que faz?
R: retorna um array como string

filter => o que faz?
R: filtra a partir de uma certa condição proporcionada

*/