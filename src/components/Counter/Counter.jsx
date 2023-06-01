import { useState, useRef, useEffect } from "react"

function Counter() {
    const [counter, setCounter] = useState(0)
    const counterRef = useRef()
    const renderRef = useRef(0)

    useEffect(() => {
        renderRef.current += 1
    })

    const increment = () => {
        counterRef.current.innerText = Number(counterRef.current.innerText) + 1
    }

    const decrement = () => {
        counterRef.current.innerText = Number(counterRef.current.innerText) - 1
    }

    return (
        <div>
            <div>
                <button onClick={() => setCounter(counter + 1)}>Increment useState</button>
                <div>{counter}</div>
                <button onClick={() => setCounter(counter - 1)}>Decrement useState</button>
            </div>
            <div>
                <button onClick={increment}>Increment useRef</button>
                <div ref={counterRef}>0</div>
                <button onClick={decrement}>Decrement useRef</button>
            </div>

            <p>{renderRef.current}</p>
        </div>
    )
}

export default Counter