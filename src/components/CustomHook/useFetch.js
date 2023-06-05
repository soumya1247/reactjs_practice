import { useEffect, useState } from "react"

export const useFetch = (url, options) => {

    const [data, setData] = useState(null)

    useEffect(() => {
        const controller = new AbortController()
        const signal = controller.signal

        const fetchData = async () => {
            try {
                const res = await fetch(url, options, { signal })
                const data = await res.json()
                setData(data)
            } catch (e) {
                if (e.name === 'AbortError') {
                    console.log('successfully aborted');
                } else {
                    console.error(e.message())
                }
            }
        }

        fetchData()

        return () => {
            controller.abort()
        }
    }, [url, options])

    return data
}