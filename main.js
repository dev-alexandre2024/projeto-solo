const links = document.querySelectorAll('li')
const boletins = document.querySelectorAll('.div-boletim')

function validarLink(link) {
    switch (link) {
        case "Ana":
            boletins[0].classList.add('ver-boletim')
            boletins[1].classList.remove('ver-boletim')
            boletins[2].classList.remove('ver-boletim')
            break;
        case "Lucas":
            boletins[0].classList.remove('ver-boletim')
            boletins[1].classList.add('ver-boletim')
            boletins[2].classList.remove('ver-boletim')
            break;

        default:
            boletins[0].classList.remove('ver-boletim')
            boletins[1].classList.remove('ver-boletim')
            boletins[2].classList.add('ver-boletim')
            break;
    }
}

links.forEach(link => {
    link.addEventListener('click', () => {
        validarLink(link.textContent)
    })
})
