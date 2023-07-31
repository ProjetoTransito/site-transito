
const toogleBtn = document.querySelector('.toogle-btn')
const toogleBtnIcon = document.querySelector('.toogle-btn i')
const dropDownMenu = document.querySelector('#container-dropdown')

toogleBtn.onclick = function(){
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toogleBtnIcon.classList = isOpen
    ?"fa-solid fa-xmark"
    :"fa-solid fa-bars"
}

/* FUNÇÃO AUTOMÁTICA SLIDER*/
let count = 1;

document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage();
}, 5000)

function nextImage() {
    count ++;
    if (count > 4){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true
}
