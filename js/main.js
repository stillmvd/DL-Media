let mouseCursor = document.getElementById('cursor')

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

