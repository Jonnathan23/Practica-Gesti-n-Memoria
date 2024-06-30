import { Algorithm } from "../types"

export type AlgorithmsActions =
    { type: 'save-activity', payload: { newAlgorithm: Algorithm } }

type AlgorithmsState = {
    algorithm: Algorithm
}

 


export const initialState: AlgorithmsState = {
    algorithm: { numberPages: 0, frames: 0, referencesTxt: '', references:[]}
}

export const algorithmReducer = (state: AlgorithmsState = initialState, algorithmAction: AlgorithmsActions) => {
    if (algorithmAction.type === 'save-activity') {
        //console.log(algorithm.payloead.newAlgorithm)
        
        return {
            ...state,
            algorithm: algorithmAction.payload.newAlgorithm,
           
        }
    }

    return state;
}


