// ---------------- UPLOAD DEL IMAGE PARA EL MEME ---------------- 
const link = document.getElementById('url');
const image = " "
const insertImage = () => {
    const insertImage = document.getElementById('imageMeme');
    insertImage.style.backgroundImage = `url("${link.value}")`;
}
link.addEventListener('change', insertImage);
// ---------------- FIN DEL UPLOAD DEL IMAGE PARA EL MEME ---------------- 
const pickUpColor = document.getElementById('colorPickerImage');
const changeColor = () => {
    const colorMeme = document.getElementById('imageMeme')
    colorMeme.style.backgroundColor = pickUpColor.value
}
pickUpColor.addEventListener('input', changeColor);
// ---------------- CAMBIO DEL COLOR DE FONDO IMAGE PARA EL MEME ----------------