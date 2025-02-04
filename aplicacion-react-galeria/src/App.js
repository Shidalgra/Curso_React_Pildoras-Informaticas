
import React, { useState } from 'react';

function GaleriaDeImagenes() {  //funcion (Componente que nos podríamos llevar para reutilizar en otro lugar del código)
  const [imagenes, setImagenes] = useState([ 
    { src: 'imgs/paisaje1.jpg', alt: 'Imagen 1', caption: 'Pie de foto Imagen 1' },
    { src: 'imgs/paisaje2.jpg', alt: 'Imagen 2', caption: 'Pie de foto Imagen 2' },
    { src: 'imgs/paisaje3.jpg', alt: 'Imagen 3', caption: 'Pie de foto Imagen 3' },
    { src: 'imgs/paisaje4.jpg', alt: 'Imagen 4', caption: 'Pie de foto Imagen 4' }
  ]);
  const [url, setUrl] = useState('');
  const [caption, setCaption] = useState('');

  const agregarImagen = () => {
    if (url && caption) {
      setImagenes([...imagenes, { src: url, alt: `Imagen ${imagenes.length + 1}`, caption }]);
      setUrl('');
      setCaption('');
    } else {
      alert('Por favor introduce imagen y pie');
    }
  };

  return (
    <div>
      
      <h1 style={{ textAlign: 'center' }}>Galería de imágenes</h1>
      <div style={{ textAlign: 'center', marginBottom: '20px'}}>
        <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="URL de la imagen" />
        <input type="text" value={caption} onChange={(e) => setCaption(e.target.value)} placeholder="Pie de foto" />
        <button onClick={agregarImagen}>Agregar Imagen</button>
      </div>
      <div className="galeria" style={{ display: 'flex', gap: '10px', justifyContent: 'center', margin: '0 auto', maxWidth: '80%' }}>
        {imagenes.map((img, index) => (
          <div key={index} style={{textAlign: 'center'}}>
            <img src={img.src} alt={img.alt} width="300" height="250" style={{display: 'block', margin: 'auto'}} />
            <p>{img.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GaleriaDeImagenes;



