let mouseCursor = document.getElementById('cursor')
let links = document.querySelectorAll('a')

window.addEventListener('mousemove', e =>{

    mouseCursor.style.top = e.pageY + 'px'
    mouseCursor.style.left = e.pageX + 'px'

})

window.addEventListener('mousedown', e => {

    mouseCursor.style.width = '30px'
    mouseCursor.style.height = '30px'

})

window.addEventListener('mouseup', e => {

    mouseCursor.style.width = '50px'
    mouseCursor.style.height = '50px'
    
})

for (let i =0; i < links.length; i++){
    links[i].addEventListener('mouseover', e => {
        mouseCursor.style.width = '70px'
        mouseCursor.style.height = '70px'
    })
    links[i].addEventListener('mouseout', e => {
        mouseCursor.style.width = '50px'
        mouseCursor.style.height = '50px'
    })
}

