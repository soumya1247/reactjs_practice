import { useState } from 'react'
import PureComponentEmbed from './PureComponentEmbed'

function PureComponentRender() {

    const [name, setName] = useState('')
    const [add, setAdd] = useState('')

    return (
        <div>
            <div>
                PureComponentRender at : {Date.now()}
                <p>Name : <input type='text' value={name} onChange={e => setName(e.target.value)} />{name}</p>
                <p>Add : <input type='text' value={add} onChange={e => setAdd(e.target.value)} />{add}</p>
            </div>
            <div>
                <PureComponentEmbed name={name} />
            </div>
        </div>
    )
}

export default PureComponentRender