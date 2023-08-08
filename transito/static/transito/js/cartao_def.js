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

//SEXO
var radios = document.getElementsByName("sexo"); 
for (var i = 0; i < radios.length; i++) { 
    if (radios[i].checked) { 
    sexo = radios[i].value; 
    } 
}; 


//FUNÇÃO CEP

let cep_idoso = document.querySelector('#cep_def');
let rua_idoso = document.querySelector('#rua_def');
let bairro_idoso = document.querySelector('#bairro_def');
let cidade_idoso = document.querySelector('#cidade_def');
let estado_idoso = document.querySelector('#estado_def');

cep_idoso.value = '';

cep_idoso.addEventListener('blur', function(e) {
    let cep = e.target.value;
    let script = document.createElement('script');
    script.src = 'https://viacep.com.br/ws/'+cep+'/json/?callback=popularForm1';
    document.body.appendChild(script);
});

function popularForm1(resposta) {
    if("erro" in resposta) {
        alert('CEP não encontrado');
        return;
    }

    console.log(resposta);
    rua_def.value = resposta.logradouro;
    bairro_def.value = resposta.bairro;
    cidade_def.value = resposta.localidade;
    estado_def.value = resposta.uf;
}

let cep_rep = document.querySelector('#cep_rep');
let rua_rep = document.querySelector('#rua_rep');
let bairro_rep = document.querySelector('#bairro_rep');
let cidade_rep = document.querySelector('#cidade_rep');
let estado_rep = document.querySelector('#estado_rep');

cep_rep.value = '';

cep_rep.addEventListener('blur', function(e) {
    let cep = e.target.value;
    let script = document.createElement('script');
    script.src = 'https://viacep.com.br/ws/'+cep+'/json/?callback=popularForm2';
    document.body.appendChild(script);
});

function popularForm2(resposta) {
    if("erro" in resposta) {
        alert('CEP não encontrado');
        return;
    }

    console.log(resposta);
    rua_rep.value = resposta.logradouro;
    bairro_rep.value = resposta.bairro;
    cidade_rep.value = resposta.localidade;
    estado_rep.value = resposta.uf;
}


//FIM FUNÇÃO CEP

//FUNÇÃO UPLOAD IMAGEM 

// Agora você pode chamar a função para cada conjunto de elementos que deseja usar.
const input1 = document.getElementById("upload1");
const filewrapper1 = document.getElementById("filewrapper1");
fileUploader(input1, filewrapper1);

const input2 = document.getElementById("upload2");
const filewrapper2 = document.getElementById("filewrapper2");
fileUploader(input2, filewrapper2);

const input3 = document.getElementById("upload3");
const filewrapper3 = document.getElementById("filewrapper3");
fileUploader(input3, filewrapper3);

function fileUploader(inputElem, fileWrapperElem) {
const fileshow = (fileName, filetype) =>{
        const showfileboxElem = document.createElement("div");
        showfileboxElem.classList.add("showfilebox");
        const leftElem = document.createElement("div");
        leftElem.classList.add("left");
        const fileTypeElem = document.createElement("span");
        fileTypeElem.classList.add("filetype");
        fileTypeElem.innerHTML = filetype;
        leftElem.append(fileTypeElem);
        const filetitleElem = document.createElement("h3");
        filetitleElem.innerHTML = fileName;
        leftElem.append(filetitleElem);
        showfileboxElem.append(leftElem);
        const rightElem = document.createElement("div");
        rightElem.classList.add("right");
        showfileboxElem.append(rightElem);
        const crossElem = document.createElement("span");
        crossElem.innerHTML = "&#215;";
        rightElem.append(crossElem);
        fileWrapperElem.append(showfileboxElem);


    crossElem.addEventListener("click",()=>{
        fileWrapperElem.removeChild(showfileboxElem);
    })
}

inputElem.addEventListener("change", (e)=>{
    let fileName = e.target.files[0].name;
    let filetype = e.target.value.split(".").pop();
    fileshow(fileName, filetype);
})
}

//ESCOLHA REPRESENTANTE
function Mudarestado (divid) {
    var disp = document.getElementById (divid).style.display;
    if (disp == "none") {
    // se o elemento estiver escondido, exiba-o
    document.getElementById (divid).style.display = "block";
    } else {
    // se o elemento estiver exibido, esconda-o
    document.getElementById (divid).style.display = "none";
    }
}

var checkbox = document.getElementById("idoso");
function ativarCheckbox(el) {
    el.checked = true;

    ativarCheckbox(checkbox);
}

