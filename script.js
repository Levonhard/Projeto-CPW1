function selecao_menu_principal(url) {
    const links = document.querySelectorAll("#menu ul a, .conteudo-site ul a")
    const subpaginas = document.querySelectorAll(".conteudo >div")

    url = url.slice(url.lastIndexOf('#') + 1)
    switch (url) {
        case ("inicio"):
            ativar(0, 4)
            break
        case ("sobre"):
            ativar(1, 5)
            break
        case ("contato"):
            ativar(2, 6)
            break
        case ("cadastro-login"):
            ativar(3, 7)
            break
        default:
            ativar(0, 4)
            break
    }

    function ativar(id1, id2) {
        Object.entries(links).forEach((key, value) => links[value].classList.remove("ativo"))
        Object.entries(subpaginas).forEach((key,value) => subpaginas[value].style.display = "none")
        links[id1].classList.add("ativo")
        links[id2].classList.add("ativo")
        subpaginas[id1].style.removeProperty("display")
        document.documentElement.scrollTop = 0
    }
}

window.onload = () => selecao_menu_principal(window.location.href)
window.onhashchange = (e) => selecao_menu_principal(e.newURL)

const botao_voltar_topo = document.querySelector(".conteudo >button")

window.onscroll = function() {
    if (document.documentElement.scrollTop > 300) {
        botao_voltar_topo.style.display = "block";
    } else {
        botao_voltar_topo.style.display = "none"
    }
}

botao_voltar_topo.onclick = () => document.documentElement.scrollTop = 0