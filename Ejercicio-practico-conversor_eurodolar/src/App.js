//Acá lo que hacemos es convertir el dolar en colones

import './App.css';
import { useRef, useState, useEffect } from 'react';

function App() {
  const [valorCambio, setValorCambio] = useState(null);

  const colonesRef = useRef();
  const resultadoRef = useRef();

  useEffect(() => {
    const llamaApiCambio = async () => {
      try {
        const respuesta = await fetch("https://v6.exchangerate-api.com/v6/7de7316b5d7211e52c02e0e3/latest/USD");
        // TOKEN 7de7316b5d7211e52c02e0e3
        const datos = await respuesta.json();
        console.log(datos);
        setValorCambio(datos.conversion_rates.CRC);

      } catch (error) {
        console.error("Error al acceder a la API: ", error);
      }
    };

    llamaApiCambio();

  }, []);

  const calcular = () => {
    const eurosValor = parseFloat(colonesRef.current.value);
    const dolares = eurosValor * valorCambio;
    resultadoRef.current.innerHTML = "Colones: ₡" + dolares.toFixed(2);
  }
  return <div>
    <h1>Conversor Euro-Dolar</h1>
    <input className='centrarELementos' type='text' ref={colonesRef} placeholder='Dolares'/><br />
    <button className='centrarELementos' onClick={calcular}>Convertir</button><br />
    <div className='centrarELementos resultado' ref={resultadoRef} />
  </div>
}

export default App;
