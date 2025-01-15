const links = document.querySelectorAll('li')
const boletins = document.querySelectorAll('.div-boletim')

// window.addEventListener('click', () => {
//     boletins.forEach(bb => {
//         console.log(bb.classList[1])
//     })
// })

links.forEach(link => {
    link.addEventListener('click', () => {
        console.log(link.textContent)

        validarLink(link.textContent)
    })
})

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