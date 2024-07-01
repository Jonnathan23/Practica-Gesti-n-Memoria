type InicialData = {
    numberPages: number
    numberFrames: number
    references: number[]
}
type ReturnResult = {
    memory: number[][]
    pageFaults:number
}


/**
 * @description realiza el calculo del algoritmo de FCFS
 * @param InicialData 
 * @returns Object
 */
export function calculateFcfs({ numberPages, numberFrames, references }: InicialData):ReturnResult {
    let orderInput: number[] = []
    let pageFaults = 0;
    let memory = []

    for (let i = 0; i < numberFrames; i++) {
        memory[i] = new Array(numberPages).fill(0);
    }

    for (let i = 0; i < numberPages; i++) {
        let page = references[i];

        if (i > 0) {
            for (let row = 0; row < numberFrames; row++) {
                memory[row][i] = memory[row][i - 1];
            }
        }


        if (!orderInput.includes(page)) {
            pageFaults++;

            if (orderInput.length < numberFrames) {
                let index = orderInput.length;
                memory[index][i] = page;
                orderInput.push(page);

            } else {
                let pageReplace = orderInput.shift();
                let indexReplace = memory.findIndex(row => row[i] === pageReplace);
                memory[indexReplace][i] = page;
                orderInput.push(page);
            }
        }
    }

    const result = {
        memory,
        pageFaults
    }

    return result;
}

export function calculateOPTIMO({ numberPages, numberFrames, references }: InicialData) {
    let pageFaults = 0;
    let memory = []

    for (let i = 0; i < numberFrames; i++) {
        memory[i] = new Array(numberPages).fill(0);
    }

    // Implementación del algoritmo Óptimo
    for (let i = 0; i < numberPages; i++) {
        const page = references[i];

        if (i > 0) {
            for (let j = 0; j < numberFrames; j++) {
                memory[j][i] = memory[j][i - 1];
            }
        }

        if (!memory.some(row => row[i] === page)) {
            pageFaults++;

            if (memory.some(row => row[i] === 0)) {
                // Si hay un marco vacío, simplemente lo asignamos
                for (let j = 0; j < numberFrames; j++) {
                    if (memory[j][i] === 0) {
                        memory[j][i] = page;
                        break;
                    }
                }
            } else {
                // Buscar la página que no se referenciará por más tiempo
                let replace = -1;
                let maxDistance = -1;

                for (let j = 0; j < numberFrames; j++) {
                    let found = false;
                    for (let k = i + 1; k < numberPages; k++) {
                        if (memory[j][i] === references[k]) {
                            found = true;
                            if (k > maxDistance) {
                                maxDistance = k;
                                replace = j;
                            }
                            break;
                        }
                    }
                    if (!found) {
                        replace = j;
                        break;
                    }
                }
                memory[replace][i] = page;
            }
        }
    }


    const result = {
        memory,
        pageFaults
    }

    return result;
}

