const body = document.querySelector('body');

const button1 = document.getElementById('in-order');

const div = document.getElementById('div-h1');

const h1 = document.getElementById('h1');

const divButtons = document.getElementById ('div-buttons');


const bodyColor = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'black'];
const divColor = ['#94B49F', '#6E85B7', '#F65A83', '#06FF00', '#FFE61B', '#65C18C', '#FBF8F1'];
const h1Color = ['#FFF9CA', '#FF0075', '#247881', '#FFF2F2', '#590696', '#FFB72B', '#FF5403'];
const divBorderColor = ['purple', 'blue', 'black', 'red', '#AD8B73', '#5800FF', '#D77FA1'];
// const divButtonsBorderColor = ['purple', 'blue', 'black', 'red', '#AD8B73', '#5800FF', '#D77FA1'];

button1.addEventListener('click' , changeBackground);

let bodySıra = 0;
let divSıra = 0;
let h1Sıra = 0;
let divBorderColorSıra = 0;
// let divButtonsBorderColorSıra = 0;

function changeBackground() {

    console.log(bodySıra, divSıra, h1Sıra, divBorderColorSıra);

    if (bodySıra == 7, divSıra == 7, h1Sıra == 7, divBorderColorSıra == 7 ) {
        bodySıra = 0;
        divSıra = 0;
        h1Sıra = 0;
        divBorderColorSıra = 0;

    }


    const seçilenBodyRenk = bodyColor[bodySıra];
    const seçilenDivRenk = divColor[divSıra];
    const seçilenH1Renk = h1Color[h1Sıra];
    const seçilenBorderRenk = divBorderColor[divBorderColorSıra];


    bodySıra++;
    divSıra++;
    h1Sıra++;
    divBorderColorSıra++;

    body.style.backgroundColor = (seçilenBodyRenk);
    div.style.borderColor = (seçilenBorderRenk);
    div.style.backgroundColor = (seçilenDivRenk);
    h1.style.color = (seçilenH1Renk);
    button1.style.backgroundColor = (seçilenBodyRenk);
    button1.style.color = ('white');
    button1.style.borderColor = (seçilenBorderRenk);
    buttonRandomly.style.backgroundColor = (seçilenBodyRenk);
}

const buttonRandomly = document.querySelector('#randomly');

buttonRandomly.addEventListener('click', changeBackground1);

function changeBackground1() {

    // rastgele arkaplan seçme 

    const rastgeleSayi = Math.floor(Math.random() * bodyColor.length);

    const secilenRenk = bodyColor[rastgeleSayi];

    if (divBorderColorSıra == 7 ) {
        
        divBorderColorSıra = 0;

    }

    const secilenBorderRenk = divBorderColor [divBorderColorSıra];

    divBorderColorSıra++;

    console.log(rastgeleSayi, secilenRenk, secilenBorderRenk);

    body.style.backgroundColor = secilenRenk;
    buttonRandomly.style.backgroundColor = (secilenRenk);
    buttonRandomly.style.color = ('white');
    buttonRandomly.style.borderColor = (secilenBorderRenk);
    button1.style.backgroundColor = (secilenRenk);
}


