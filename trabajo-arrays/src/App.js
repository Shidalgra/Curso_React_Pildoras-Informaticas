import logo from './logo.svg';
import './App.css';

function App() {

  const miArrayEstatico = () => {
    const numerosArraytatico = [15, 37, 26, 95, 81]
    return (
      <p>{numerosArraytatico.map((numero, index) => {
        return <span key={index}>Indice Estatico:&nbsp;{index}={numero}&nbsp;&nbsp;&nbsp;</span>
      })}
      </p>
    )
  }

  const miArrayIDUnico = () => {
    const numerosArrayIDUnico = [
      { id: 10, numero: 15 },
      { id: 20, numero: 37 },
      { id: 30, numero: 26 },
      { id: 40, numero: 95 },
      { id: 50, numero: 81 }
    ];
    return (
      <p>{numerosArrayIDUnico.map((item) => {
        return <span key={item.id}>Indice ID Unico:&nbsp;{item.id}={item.numero}&nbsp;&nbsp;&nbsp;</span>
      })}
      </p>
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h2>Números del array dependiendo si es un array estatico o array de id unico</h2>
          <h4>Ver el código para saber de que esta hablando y como funciona</h4>
        </div>
        {miArrayEstatico()}
        {miArrayIDUnico()}
      </header>
    </div>
  );
}

export default App;


