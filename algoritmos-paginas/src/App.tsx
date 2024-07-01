import { useReducer } from "react"
import Form from "./components/Form"
import { algorithmReducer, initialState } from "./reducers/algorithms-reducer"
import Fcfs from "./components/Fcfs"
import References from "./components/References"

function App() {
  //const [count, setCount] = useState(0)
  const inicialState = { numberPages: 0, frames: 0, referencesTxt: '', references: [] }
  const [state, dispatch] = useReducer(algorithmReducer, initialState)
  return (
    <>
      <header className='header'>
        <h1 className='header__title'>Práctica: Algoritmos de remplazo de páginas</h1>
        <h2 className='header__autor'>Jonnathan Saquicela</h2>
      </header>

      <main>
        <div className="background__camp">
          <Form
            dispatch={dispatch}
            inicialState={inicialState}
          />
        </div>


        {
        state.algorithm.numberPages !== 0 &&
          <div id="algorithms_id" className="algorithms__background algorithms__show">
            <div className="algorithms__content">
              <section className="algorithms background__camp">
                {
                  /**
                   * TODO: Metodo: FCFS (primera página en entrar, primera en salir)
                   */
                  <Fcfs />
                }

              </section>

              <section className="algorithms background__camp">
                {
                  /**
                   * TODO: Metodo: OPTIMO (se reemplaza la página que no se utilizará en más tiempo)
                   */
                }

              </section>

              <section className="algorithms background__camp">
                {
                  /**
                   * TODO: Metodo: LRU (se reemplaza la página menos recientemente utilizada)
                   */
                }
              </section>

            </div>
          </div>
        }


      </main>

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
