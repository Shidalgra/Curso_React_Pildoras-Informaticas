function agregaImagen() {
    var url = document.getElementById("imagenURL").value;
    var pie = document.getElementById("pieFoto").value;

    if(url && pie){
        var galeria = document.getElementById("galeriaImagenes");
        var div = document.createElement("div");
        var img = document.createElement("img");
        img.src = url;
        img.width=300;
        img.height=250;
        var p = document.createElement("p");
        p.textContent = pie;
        div.appendChild(img); //aca lo que le estamos diciendo es que el div que estamos creando meta la img y la p
        div.appendChild(p); //hacemos lo mismo de meter el parrafo
        galeria.appendChild(div);
        document.getElementById("imagenURL").value="";
        document.getElementById("pieFoto").value="";
    } else alert ("Por favor introduce una direccion de imagen y un pie de foto.")
};