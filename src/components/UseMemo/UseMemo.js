import { useState, useMemo } from 'react'

function UseMemo() {
    const [num, setNum] = useState(0)
    const [inc, setInc] = useState(0)
    // const f =  long(num) //Normal Case
    const f = useMemo(() => long(num), [num]) //After caching done with useMemo

    const handleClick = (e) => {
        e.preventDefault()
        setInc(inc + 1)
        console.log(inc)
    }   

    return (
        <div>
            <div>
                <input type='text' value={num} onChange={e => setNum(e.target.value)}/>
                <div>{num}</div>
            </div> 
            <div>
                <button onClick = {handleClick}>Inc</button>
                <div>{inc}</div>
            </div>
        </div>
    )
}

function long(i) {
    for (let i = 0; i < 10000; i++) {
        console.log(i)
    }
}

export default UseMemo

