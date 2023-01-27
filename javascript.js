let card = document.querySelector('#cardAtendimento')
let backgroundCard = document.querySelector('#backgroundcardAtendimento')

function HighlightButton(selector){
    let button = Array.from(document.querySelectorAll(selector))
    button[1].style.visibility="visible"
}
function hiddeButton(selector){
    let button = document.querySelectorAll(selector)
    button[1].style.visibility="hidden"  
}

document.querySelector('#atendButton').addEventListener('click', () => {
    backgroundCard.style.display="block"
    card.style.display="block"
    document.querySelector('body').style.overflow="hidden"
})
document.getElementById('xis').addEventListener("click", () => {
    backgroundCard.style.display="none"
    card.style.display="none"
    document.querySelector('body').style.overflow= 'visible'
    
})