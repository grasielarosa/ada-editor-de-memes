// ---------------- UPLOAD DEL IMAGE PARA EL MEME ---------------- 
const link = document.getElementById('url');
const image = " "
const insertImage = (event) =>{
    const insertImage = document.getElementById('imageMeme');
    insertImage.innerHTML = `<img src="${link.value}" alt="imagen">`
}
link.addEventListener('change', insertImage);

// ---------------- FIN DEL UPLOAD DEL IMAGE PARA EL MEME ---------------- 
