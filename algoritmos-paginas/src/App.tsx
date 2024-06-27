import { useState } from "react";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <header className='header'>
        <h1 className='header__title'>Práctica: Algoritmos de remplazo de páginas</h1>
        <h2 className='header__autor'>Jonnathan Saquicela</h2>
      </header>

      <main>
        <form action="">
          <fieldset>                       
            <div className="cont__camp">
              <div className="camp">
                <svg xmlns="http://www.w3.org/2000/svg" width="274" height="568" fill="none" viewBox="0 0 274 568">
                  <rect width="274" height="568" fill="#483EFF" rx="10" />                  
                  <mask id="a" width="274" height="568" x="0" y="0" maskUnits="userSpaceOnUse">
                    <rect width="274" height="568" fill="#fff" rx="10" />
                    
                  </mask>
                  <g mask="url(#a)">
                    <path fill="#6259FF" fill-rule="evenodd" d="M-34.692 543.101C3.247 632.538 168.767 685.017 211.96 612.52c43.194-72.497-66.099-85.653-104.735-160.569-38.635-74.916-68.657-121.674-124.482-104.607-55.824 17.068-55.375 106.32-17.436 195.757Z" clip-rule="evenodd" /><path fill="#F9818E" fill-rule="evenodd" d="M233.095 601.153c60.679-28.278 92.839-143.526 41.875-171.528-50.965-28.003-57.397 47.579-108.059 75.987-50.662 28.408-82.14 50.207-69.044 88.241 13.096 38.034 74.549 35.578 135.228 7.3Z" clip-rule="evenodd" /><path stroke="#fff" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="5" d="m165.305 469.097 10.607-10.806M209.461 474.581l-12.506-10.503M187.56 488.991l-6.908 14.798" /><path fill="#FFAF7E" d="M.305 546.891c37.003 0 67-29.997 67-67s-29.997-67-67-67-67 29.997-67 67 29.997 67 67 67Z" />
                  </g>
                </svg>

              </div>

              <div className="camp__inputs">

                <section className="camp__title">
                  <h3>Datos de entrada</h3>
                  <p>Ingrese los datos necesarios para realizar el cálculo de los algoritmos por favor</p>
                </section>
                <div className="camp">
                  <label htmlFor="number_pages">Número de referencias </label>
                  <input type="text" name="number_pages" id="number_pages" placeholder='Números de referencias de páginas' />
                </div>

                <div className="camp">
                  <label htmlFor="number_frames">Números de marcos de la RAM</label>
                  <input type="text" name="number_frames" id="number_frames" placeholder='Números de marcos de la RAM' />
                </div>

                <div className="camp">
                  {
                    /**
                     * TODO: Colocar en un bulce para generar el número de referencias
                     * @params numero de referencias
                     */
                  }
                </div>
              </div>
            </div>



          </fieldset>
        </form>

        <div className="algoritms__background">
          <div className="algoritms__content">
            <section className="algoritms">
              {
                /**
                 * TODO: Metodo: FCFS (primera página en entrar, primera en salir)
                 */
              }

            </section>

            <section className="algoritms">
              {
                /**
                 * TODO: Metodo: OPTIMO (se reemplaza la página que no se utilizará en más tiempo)
                 */
              }

            </section>

            <section className="algoritms">
              {
                /**
                 * TODO: Metodo: LRU (se reemplaza la página menos recientemente utilizada)
                 */
              }
            </section>

          </div>
        </div>

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
