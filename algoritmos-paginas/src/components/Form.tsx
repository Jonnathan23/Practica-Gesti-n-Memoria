import { useState, ChangeEvent, FormEvent, Dispatch } from "react";
import { Algorithm} from "../types";
import { AlgorithmsActions } from "../reducers/algorithms-reducer";
import { ConverError } from "../Errors/errors";
import { errorConvert, errorUnknow } from "../Errors/alerts";
import { typesAlgorithms } from "../assets/data/data";

type FormProps = {
    dispatch: Dispatch<AlgorithmsActions>
    inicialState: Algorithm    

}


export default function Form({ dispatch, inicialState }: FormProps) {

    const [algorithms, setAlgorithms] = useState<Algorithm>(inicialState);

    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        const isNumerField = ['numberPages', 'frames'].includes(e.target.id);        
        setAlgorithms({
            ...algorithms,
            [e.target.id]: isNumerField ? +e.target.value : e.target.value
        })

    }
    const removeSpaces = (text: string) => {
        try {
            const newText = text.split(',').map(text => text.replace(/ /g, ''));

            const converReferences = newText.map(refer => {
                const number = +refer                
                if (isNaN(number)) {
                    throw new ConverError("No conversión")
                }
                return number
            })
            console.log(converReferences);
            return converReferences
        } catch (error) {

            if (error instanceof ConverError) {
                errorConvert()
            } else {
                errorUnknow()
            }

            return null;
        }
    };

    const isValidAlgorithms = () => {
        const { numberPages, frames } = algorithms;
        return numberPages > 0 && frames > 0
            && Number.isInteger(numberPages) && Number.isInteger(frames)
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Submit ....')

        const refereences = removeSpaces(algorithms.referencesTxt)
        if (refereences) {
            dispatch({ type: "save-activity", payload: { newAlgorithm: algorithms } })
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <div className="cont__camp">
                    <div className="camp__cont__img">
                        <svg className="camp__img" xmlns="http://www.w3.org/2000/svg" width="274" height="568" fill="none" viewBox="0 0 274 568">
                            <rect width="274" height="568" fill="#483EFF" rx="10" />
                            <mask id="a" width="274" height="568" x="0" y="0" maskUnits="userSpaceOnUse">
                                <rect width="274" height="568" fill="#fff" rx="10" />

                            </mask>
                            <g mask="url(#a)">
                                <path fill="#6259FF" fill-rule="evenodd" d="M-34.692 543.101C3.247 632.538 168.767 685.017 211.96 612.52c43.194-72.497-66.099-85.653-104.735-160.569-38.635-74.916-68.657-121.674-124.482-104.607-55.824 17.068-55.375 106.32-17.436 195.757Z" clip-rule="evenodd" />
                                <path fill="#F9818E" fill-rule="evenodd" d="M233.095 601.153c60.679-28.278 92.839-143.526 41.875-171.528-50.965-28.003-57.397 47.579-108.059 75.987-50.662 28.408-82.14 50.207-69.044 88.241 13.096 38.034 74.549 35.578 135.228 7.3Z" clip-rule="evenodd" />
                                <path stroke="#fff" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="5" d="m165.305 469.097 10.607-10.806M209.461 474.581l-12.506-10.503M187.56 488.991l-6.908 14.798" />
                                <path fill="#FFAF7E" d="M.305 546.891c37.003 0 67-29.997 67-67s-29.997-67-67-67-67 29.997-67 67 29.997 67 67 67Z" />
                            </g>
                        </svg>
                    </div>

                    <div className="camp__inputs">

                        <section className="camp__text">
                            <h3 className="camp__title">Datos de entrada</h3>
                            <p className="camp__p">Ingrese los datos necesarios para realizar el cálculo de los algoritmos por favor</p>
                        </section>
                        <div className="camp">
                            <label htmlFor="number_pages">Número de referencias </label>
                            <input className="camp__txt" type="number" name="numberPages" id="numberPages" placeholder='Ej: 7'
                                value={algorithms.numberPages}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="camp">
                            <label htmlFor="number_frames">Números de marcos de la RAM</label>
                            <input className="camp__txt" type="number" name="frames" id="frames" placeholder='Ej: 3'
                                value={algorithms.frames}
                                onChange={handleChange} />
                        </div>

                        <div className="camp references">
                            <label htmlFor="referencesTxt">Referencias</label>
                            <textarea className="camp__txtarea" name="referencesTxt" id="referencesTxt" rows={1} cols={10}
                                placeholder="Ej: 2, 4, 6, ..."
                                onChange={handleChange}
                            >
                                {algorithms.referencesTxt}
                            </textarea>
                        </div>

                        <div className="camp camp__cont__cb" >
                            <label htmlFor="typeAlgorithm">Tipo de algoritmo</label>
                            <select className="camp__cb"  name="typeAlgorithm" id="typeAlgorithm" >
                                {
                                typesAlgorithms.map((type) => (
                                    <option value={type.id}> {type.name}</option>
                                ))
                                }
                            </select>
                        </div>

                        <div className="camp camp__button">
                            <button className="button" type="submit" disabled={!isValidAlgorithms()}>Calcular</button>
                        </div>

                    </div>
                </div>
            </fieldset>
        </form>
    );
}