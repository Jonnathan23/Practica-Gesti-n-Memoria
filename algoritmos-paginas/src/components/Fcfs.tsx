import { Algorithm } from "../types"
import { calculateFcfs } from "../algorithms/calculate.algorithms"

type FcfsProps = {
    algorithms: Algorithm
}

export default function Fcfs({ algorithms }: FcfsProps) {

    const evaluate = {
        numberPages: algorithms.numberPages,
        numberFrames: algorithms.frames,
        references: algorithms.references
    }
    const result = calculateFcfs(evaluate)
    const references = result.memory
    const pageFaults = result.pageFaults

    return (
        <>

            <h5 className="type__name">FCFS</h5>

            <table className="algorithm__table">
                <thead>
                    <tr>
                        {algorithms.references.map(col => (
                            <th>{col}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className="table__body">
                    {references.map((rowReference, i) => (
                        <tr key={i} className="table__row">
                            {rowReference.map((colReference, j) => (
                                <td key={j} className="table__col" >{colReference === -1 ? "X" : colReference}</td>

                            ))}
                        </tr>

                    ))}
                </tbody>
            </table>

            <p className="page__founts">Fallos de página: <span>{pageFaults}</span></p>

        </>
    );
}