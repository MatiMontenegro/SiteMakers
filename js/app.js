
//Esto es js para las cards de los sitios creados!!
const panels= document.querySelectorAll('.panel')

panels.forEach((panel) => {
panel.addEventListener('click', () =>{
    removeActiveClasses()
    panel.classList.add('active')
})
})

function removeActiveClasses(){
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}
codex/find-and-fix-important-codebase-bug


if (typeof module !== 'undefined') {
    module.exports = { removeActiveClasses }
}
main
