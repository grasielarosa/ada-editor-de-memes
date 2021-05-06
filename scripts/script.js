// ---------------- UPLOAD DEL IMAGE PARA EL MEME ---------------- 
const link = document.getElementById('url');
const image = " "
const insertImage = (event) =>{
    const insertImage = document.getElementById('imageMeme');
    insertImage.style.backgroundImage = `url("${link.value}")`;
}
link.addEventListener('change', insertImage);
// ---------------- FIN DEL UPLOAD DEL IMAGE PARA EL MEME ---------------- 


