import { useEffect, useState } from "react"

export const useFetch = (url, options) => {

    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url, options)
                const data = await res.json()
                setData(data)
            } catch (e) {
                console.error(e.message())
            }
        }

        fetchData()
    }, [])

    return data
}