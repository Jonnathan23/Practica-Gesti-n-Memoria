import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <title>Practica</title>
      </header>
      <main>
        <form action="">
          <fieldset>
            <legend>Datos Iniciales</legend>

            <div className="camp">
              <label htmlFor="number_pages">Número de referencias </label>
              <input type="text" name="number_pages" id="number_pages" placeholder='Números de referencias de páginas' />
            </div>

            <div className="campo">
              <label htmlFor="number_pages">Números de marcos de la RAM</label>
              <input type="text" name="number_pages" id="number_pages" placeholder='Números de marcos de la RAM' />
            </div>
            
            {
            /**
             * TODO: Colocar en un bulce para generar el número de referencias
             * @params numero de referencias
             */             
            }
            
            {
              /**
               * TODO: Metodo: FCFS (primera página en entrar, primera en salir)
               */
            }

            {
              /**
               * TODO: Metodo: OPTIMO (se reemplaza la página que no se utilizará en más tiempo)
               */
            }

            {
              /**
               * TODO: Metodo: LRU (se reemplaza la página menos recientemente utilizada)
               */
            }
          </fieldset>
        </form>
      </main>
    </>
  )
}

export default App
