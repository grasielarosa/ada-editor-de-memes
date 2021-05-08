// ################## BOTONES SIDEBAR ###################
const textButton = document.getElementById('textButton');
const imageButton = document.getElementById('imageButton');
const imageEditor = document.getElementById('imageEditor');
const textEditor = document.getElementById('textEditor');
const openSidebar = (event) => {
    if(event.target===textButton){
        imageEditor.classList.add('hidden-sidebar');
        textEditor.classList.remove('hidden-sidebar');
    } else if(event.target===imageButton){
        imageEditor.classList.remove('hidden-sidebar');
        textEditor.classList.add('hidden-sidebar');
    }
}
textButton.addEventListener("click", openSidebar)
imageButton.addEventListener("click", openSidebar)

const lightMode = document.getElementById('lightButton')
const body = document.querySelector('body')
const changeMode = ()=>{
    body.classList.toggle('light-theme')
    body.classList.toggle('dark-theme')
}

lightMode.addEventListener('click', changeMode)

// ################## UPLOAD DEL IMAGE PARA EL MEME ###################
const link = document.getElementById('url');
const insertImage = () => {
    const insertImage = document.getElementById('imageMeme');
    insertImage.style.backgroundImage = `url("${link.value}")`;
}
link.addEventListener('change', insertImage);


// ################## FILTROS DE IMAGE ###################
// ---------------- CAMBIO DEL COLOR DE FONDO IMAGE PARA EL MEME ----------------
const pickUpColor = document.getElementById('colorPickerImage');
const changeColor = () => {
    const colorMeme = document.getElementById('imageMeme');
    colorMeme.style.backgroundColor = pickUpColor.value;
}
pickUpColor.addEventListener('input', changeColor);

// ---------------- CAMBIO DE LA MEZCLA DEL COLOR DE FONDO IMAGE PARA EL MEME ----------------
const colorBlend = document.getElementById('colorBlend');
const changeBlend = () => {
    const colorMeme = document.getElementById('imageMeme');
    colorMeme.style.backgroundBlendMode = colorBlend.value;
}
colorBlend.addEventListener('input', changeBlend);

//---------------- CAMBIO DE FILTRO IMAGE PARA EL MEME ----------------
const filterBlend = document.getElementsByClassName('input-filter');
const colorMeme = document.getElementById('imageMeme');
const brightness=document.getElementById('brightnessSlider');
const opacity=document.getElementById('opacitySlider');
const contrast=document.getElementById('contrastSlider');
const blur=document.getElementById('blurSlider');
const grayscale=document.getElementById('grayScaleSlider');
const sepia=document.getElementById('sepiaSlider');
const hueRotation=document.getElementById('hueRotateSlider');
const saturation=document.getElementById('saturateSlider');
const invert=document.getElementById('invertSlider');

const changeFilter = () => {
    let brightnessValue= brightness.value;
    let opacityValue= opacity.value;
    let contrastValue= contrast.value;
    let blurValue= blur.value;
    let grayscaleValue= grayscale.value;
    let sepiaValue= sepia.value;
    let hueRotationValue= hueRotation.value;
    let saturationValue= saturation.value;
    let invertValue= invert.value;
    colorMeme.style.filter = `brightness(${brightnessValue}) opacity(${opacityValue}) blur(${blurValue}px) contrast(${contrastValue}%) grayscale(${grayscaleValue}%) hue-rotate(${hueRotationValue}deg) sepia(${sepiaValue}%) saturate(${saturationValue}%) invert(${invertValue})`;
}

for(i=0; i<filterBlend.length; i++ ){
    
filterBlend[i].addEventListener('input', changeFilter);
}

// ################## FILTROS DE TEXTO ###################
//---------------- TEXTO ARRIBA ----------------
const write = document.getElementById('textArea');
const topText = document.getElementById('topText');
const changeText = () => {
    topText.innerText = write.value;
}
write.addEventListener('input', changeText);

//---------------- TEXTO ABAJO ----------------
const write2 = document.getElementById('textArea2');
const bottonText = document.getElementById('bottonText');
const changeText2 = () => {
    bottonText.innerText = write2.value;
}
write2.addEventListener('input', changeText2);

