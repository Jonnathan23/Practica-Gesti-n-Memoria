import { ChangeEvent, FormEvent, useState } from "react";
import { ConverError, DiferentLong } from "../Errors/errors";
import { errorConvert, errorDiferentLongs, errorUnknow } from "../Errors/alerts";
import { Algorithm } from "../types";

export const useAlgorithms = () => {

    const inicialState: Algorithm = {
        numberPages: 0,
        frames: 0,
        referencesTxt: "",
        references: [],
        typeAlgorithm: 1,
        calculate: false

    }
    const [algorithms, setAlgorithms] = useState<Algorithm>(inicialState);

    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLSelectElement>) => {
        const isNumerField = ['numberPages', 'frames', 'typeAlgorithm'].includes(e.target.id);
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

        const refereences = removeSpaces(algorithms.referencesTxt)
        if (refereences) {
            try {
                if (refereences.length !== algorithms.numberPages)
                    throw new DiferentLong("Error Diferentes longitudes")
                setAlgorithms({
                    ...algorithms,
                    'references': refereences,
                    'calculate': true
                })
            } catch (error) {
                if (error instanceof DiferentLong) {
                    errorDiferentLongs()
                }
            }
        }
    }

    return {
        algorithms,
        setAlgorithms,
        handleChange,
        removeSpaces,
        isValidAlgorithms,
        handleSubmit
    }


}