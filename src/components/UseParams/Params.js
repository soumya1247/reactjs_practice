import { useParams } from 'react-router-dom'

function Params() {
    const params = useParams()
    const { id } = params

    return (
        <div>Params ID : {id}</div>
    )
}

export default Params