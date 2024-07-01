import { Algorithm } from "../types"
import { calculateLRU } from "../algorithms/calculate.algorithms"
import { errorUnknow } from "../Errors/alerts"

type LruProps = {
    algorithms: Algorithm
}

export default function Lru({ algorithms }: LruProps) {
    const evaluate = {
        numberPages: algorithms.numberPages,
        numberFrames: algorithms.frames,
        references: algorithms.references
    }
    const result = calculateLRU(evaluate)
    const references = result.memory
    const pageFaults = result.pageFaults
    return (
        <>
            <h5>LRU</h5>
            <p>Referencias: {algorithms.referencesTxt};</p>
            <div>
                <table>
                    <tbody>
                        {references.map((rowReference, i) => (
                            <tr key={i}>
                                {rowReference.map((colReference, j) => (
                                    <td key={j}>{colReference}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


            <p>Fallos de página: <span>{pageFaults}</span></p>


        </>
    )
}