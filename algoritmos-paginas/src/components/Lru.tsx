import { Algorithm } from "../types"
import { calculateLRU } from "../algorithms/calculate.algorithms"

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
            <div className="cont__table">
                <table className="algorithm__table">
                    <thead>
                        <tr>

                        </tr>
                    </thead>
                    <tbody className="table__body">
                        {references.map((rowReference, i) => (
                            <tr key={i} className="table__row">
                                {rowReference.map((colReference, j) => (
                                    <td key={j} className="table__col" >{colReference}</td>

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