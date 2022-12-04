function isVisible(div){
    let divBox = div.getBoundingClientRect()
    let fromTop = -200
    if(divBox.top - window.innerHeight < fromTop){
        return true
    }else {
        return false
    }
}

function getHidden(){
    let divList = document.querySelectorAll('.hidden')
    divList.forEach(function(div){
        if(isVisible(div)){
            div.classList.remove('hidden')
        }
    })
}

document.addEventListener('wheel', getHidden)