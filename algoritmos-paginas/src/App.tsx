import { useState } from "react"
import Form from "./components/Form"
import { Algorithm } from "./types"
import Fcfs from "./components/Fcfs"
import Optimo from "./components/Optimo"
import Lru from "./components/Lru"


function App() {
  //const [count, setCount] = useState(0)
  const inicialState: Algorithm = {
    numberPages: 0,
    frames: 0,
    referencesTxt: "",
    references: [],
    typeAlgorithm: 1,
    calculate: false

  }
  const [algorithms, setAlgorithms] = useState<Algorithm>(inicialState);

  return (
    <>
      <header className='header'>
        <h1 className='header__title'>Práctica: Algoritmos de remplazo de páginas</h1>
        <h2 className='header__autor'>Jonnathan Saquicela</h2>
      </header>

      <main>
        <div className="background__camp">
          <Form
            algorithms={algorithms}
            setAlgorithms={setAlgorithms}
          />
        </div>

        {algorithms.calculate && (
          <div id="algorithms_id" className="algorithms__background algorithms__show">
            <div className="algorithms__content">
              {algorithms.typeAlgorithm === 1 && (
                <section className="algorithms background__camp">
                  {<Fcfs />}
                </section>
              )}

              {algorithms.typeAlgorithm === 2 && (
                <section className="algorithms background__camp">
                  {<Optimo />}
                </section>
              )}

              {algorithms.typeAlgorithm === 3 && (
                <section className="algorithms background__camp">
                  {<Lru 
                  algorithms={algorithms}
                  />}
                </section>
              )}

            </div>
          </div>
        )}


      </main >

      <footer>
        <div className="footer__content">
          <section className='footer__section'>
            <h5>Estudiante:</h5>
            <p>Jonnathan Saquicela</p>
          </section>
          <section className='footer__section'>
            <h5>Practica</h5>
            <p>Gestión de Memoria (Implementación de los Algoritmos de
              reemplazo de páginas)</p>
          </section>

        </div>
        <div className="footer__date">
          <p>6-26-2024</p>
        </div>
      </footer>
    </>
  )
}

export default App
