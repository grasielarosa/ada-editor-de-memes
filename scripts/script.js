// ################## BOTONES SIDEBAR ###################
const textButton = document.getElementById('textButton');
const imageButton = document.getElementById('imageButton');
const imageEditor = document.getElementById('imageEditor');
const textEditor = document.getElementById('textEditor');
const sidebar = document.getElementById('sidebar');
const openSidebar = (event) => {
    if(event.target===textButton){
        sidebar.classList.remove('sidebar-noshow');
        imageEditor.classList.add('hidden-sidebar');
        textEditor.classList.remove('hidden-sidebar');
    } else if(event.target===imageButton){
        sidebar.classList.remove('sidebar-noshow');
        imageEditor.classList.remove('hidden-sidebar');
        textEditor.classList.add('hidden-sidebar');
    }
}
textButton.addEventListener("click", openSidebar)
imageButton.addEventListener("click", openSidebar)


// ---------------- CLARO / OSCURO ----------------
const lightMode = document.getElementById('lightButton')
const body = document.querySelector('body')
const changeMode = () => {
    body.classList.toggle('light-theme');
    body.classList.toggle('dark-theme');
}

lightMode.addEventListener('click', changeMode)





// ################## UPLOAD DEL IMAGE PARA EL MEME ###################
const link = document.getElementById('url');
const insertImage = () => {
    const insertImage = document.getElementById('imageMeme');
    insertImage.style.backgroundImage = `url("${link.value}")`;
}
link.addEventListener('change', insertImage);



// ################## BOTON CERRAR ASIDE ###################
const btnCloseSidebar = document.getElementById('btnCloseSidebar');
const closeSidebar = () => {

    sidebar.classList.add('sidebar-noshow');

}
btnCloseSidebar.addEventListener('click', closeSidebar);




// ################## FILTROS DE IMAGE ###################


// ---------------- CAMBIO DEL COLOR DE FONDO IMAGE PARA EL MEME ----------------
const pickUpColor = document.getElementById('colorPickerImage');
const changeColor = () => {
    const colorMeme = document.getElementById('imageMeme');
    colorMeme.style.backgroundColor = pickUpColor.value;

    const colorName1 = document.getElementById('colorBackground');
    colorName1.innerText = pickUpColor.value.toUpperCase();
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
const brightness = document.getElementById('brightnessSlider');
const opacity = document.getElementById('opacitySlider');
const contrast = document.getElementById('contrastSlider');
const blur = document.getElementById('blurSlider');
const grayscale = document.getElementById('grayScaleSlider');
const sepia = document.getElementById('sepiaSlider');
const hueRotation = document.getElementById('hueRotateSlider');
const saturation = document.getElementById('saturateSlider');
const invert = document.getElementById('invertSlider');

const changeFilter = () => {
    let brightnessValue = brightness.value;
    let opacityValue = opacity.value;
    let contrastValue = contrast.value;
    let blurValue = blur.value;
    let grayscaleValue = grayscale.value;
    let sepiaValue = sepia.value;
    let hueRotationValue = hueRotation.value;
    let saturationValue = saturation.value;
    let invertValue = invert.value;
    colorMeme.style.filter = `brightness(${brightnessValue}) opacity(${opacityValue}) blur(${blurValue}px) contrast(${contrastValue}%) grayscale(${grayscaleValue}%) hue-rotate(${hueRotationValue}deg) sepia(${sepiaValue}%) saturate(${saturationValue}%) invert(${invertValue})`;
}

for (i = 0; i < filterBlend.length; i++) {

    filterBlend[i].addEventListener('input', changeFilter);
}

// ################## RESET FILTROS ###################
const resetFiltersButton = document.getElementById('resetFiltersButton');
const resetFilter = () => {
    brightness.value = 1;
    opacity.value = 1;
    contrast.value = 100;
    blur.value = 0;
    grayscale.value = 0;
    sepia.value = 0;
    hueRotation.value = 0;
    saturation.value = 100;
    invert.value = 0;

    changeFilter();
}
resetFiltersButton.addEventListener('click', resetFilter);




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
const bottomText = document.getElementById('bottomText');
const changeText2 = () => {
    bottomText.innerText = write2.value;
}
write2.addEventListener('input', changeText2);

//---------------- CAMBIAR FONTES ----------------
const letterFonts = document.getElementById('letterFonts');
const changeFont = () => {
    topText.style.fontFamily = letterFonts.value
    bottomText.style.fontFamily = letterFonts.value
}
letterFonts.addEventListener('change', changeFont);

//-------- SIN TEXTO TOP / BOTTOM -----------------------
const hideTopText = document.getElementById('hideTopText');
const hideBottomText = document.getElementById('hideBottomText');
const hiddenText = (event) => {
    if (event.target === hideTopText) {
        topText.classList.toggle('hidden-text');

    } else if (event.target === hideBottomText) {
        bottomText.classList.toggle('hidden-text');
    }
}
hideTopText.addEventListener("click", hiddenText)
hideBottomText.addEventListener("click", hiddenText)

//--------- TAMAÑO DE LETRA  -------------------
const letterSize = document.getElementById('fontSize');
const changeFontSize = () => {
    topText.style.fontSize = letterSize.value + "px";
    bottomText.style.fontSize = letterSize.value + "px";
}
letterSize.addEventListener('change', changeFontSize);

//------- ALINEACION DE TEXTO ------
const btnLeft = document.getElementById('btnLeft');
const changeLeft = () => {
    topText.style.justifyContent = 'flex-start';
    bottomText.style.justifyContent = 'flex-start';
}
btnLeft.addEventListener('click', changeLeft);

const btnCenter = document.getElementById('btnCenter');
const changeCenter = () => {
    topText.style.justifyContent = 'center';
    bottomText.style.justifyContent = 'center';
}
btnCenter.addEventListener('click', changeCenter)

const btnRight = document.getElementById('btnRight');
const changeRight = () => {
    topText.style.justifyContent = 'flex-end';
    bottomText.style.justifyContent = 'flex-end';
}
btnRight.addEventListener('click', changeRight)

//---------------- CAMBIAR COLOR TEXTO ----------------
const colorPickerText = document.getElementById('colorPickerText');
const changeTextColor = () => {
    const colorTopText = document.getElementById('topText');
    colorTopText.style.color = colorPickerText.value;

    const colorBottomText = document.getElementById('bottomText');
    colorBottomText.style.color = colorPickerText.value;

    const colorName2 = document.getElementById('colorNameText');
    colorName2.innerText = colorPickerText.value.toUpperCase();
}
colorPickerText.addEventListener('input', changeTextColor);

//---------------- CAMBIAR COLOR FONDO DEL TEXTO ----------------

const colorPickerBackgroundText = document.getElementById('colorPickerBackground');
const changeBackgroundColor = () => {
    const backgroundTopText = document.getElementById('topText');
    backgroundTopText.style.backgroundColor = colorPickerBackgroundText.value;
    
    const backgroundBottomText = document.getElementById('bottomText');
    backgroundBottomText.style.backgroundColor = colorPickerBackgroundText.value;

    const colorName3 = document.getElementById('colorNameBackground');
    colorName3.innerText = colorPickerBackgroundText.value.toUpperCase();
}
colorPickerBackgroundText.addEventListener('input', changeBackgroundColor);


//---------------- CONTORNO DEL TEXTO ----------------
const none = document.getElementById('outlineNone');
const light = document.getElementById('outlineLight');
const dark = document.getElementById('outlineDark');
const changeStroke = (event) =>{
    const outlineTop = document.getElementById('topText');
    const outlineBottom = document.getElementById('bottomText');
    
    if(event.target === none){
        outlineTop.classList.remove('dark-stroke', 'light-stroke');
        outlineBottom.classList.remove('dark-stroke', 'light-stroke');
    } else if (event.target === light){
        outlineTop.classList.remove('dark-stroke', 'stroke-none');
        outlineBottom.classList.remove('dark-stroke', 'stroke-none');
        outlineTop.classList.add('light-stroke');
        outlineBottom.classList.add('light-stroke');

    } else if (event.target === dark){
        outlineTop.classList.remove('light-stroke', 'stroke-none');
        outlineBottom.classList.remove('light-stroke', 'stroke-none');
        outlineTop.classList.add('dark-stroke');
        outlineBottom.classList.add('dark-stroke');
}
}

none.addEventListener("click", changeStroke)
light.addEventListener("click", changeStroke)
dark.addEventListener("click", changeStroke)

//---------------- ESPACIADO ----------------
const paddingText = document.getElementById("paddingText");
const changePadding = () => {
    const paddingValue = paddingText.value;
    topText.style.padding = `${paddingValue}px 50px`
    bottomText.style.padding = `${paddingValue}px 50px`
}

paddingText.addEventListener("input", changePadding)

//---------------- INTERLINEADO ----------------
const lineHeight = document.getElementById('lineHeight');
const changeLineHeight = () => {
    const lineHeightValue = lineHeight.value;
    topText.style.lineHeight = lineHeightValue;
    bottomText.style.lineHeight= lineHeightValue;
}

lineHeight.addEventListener("input", changeLineHeight)