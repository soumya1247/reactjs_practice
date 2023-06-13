import { useEffect, useState } from "react"

export const useFetch = (url, options) => {

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const controller = new AbortController()
        const signal = controller.signal

        const fetchPosts = async () => {
            try {
                const res = await fetch(url, options, signal)
                const data = await res.json()
                setPosts(data)
                setLoading(false)
            } catch (e) {
                setLoading(false)
                if (e.name === 'AbortError') {
                    console.log('successfully aborted');
                } else {
                    console.error(e)
                    setError(e)
                }
            }
        }

        fetchPosts()

        return () => {
            controller.abort()
        }
    }, [url, options])

    // const isMounted = useRef(true)

    // useEffect(() => {
    //     if (isMounted) {
    //         const auth = getAuth()
    //         onAuthStateChanged(auth, (user) => {
    //             if (user) {
    //                 setLoggedIn(true)
    //             }
    //             setCheckingStatus(false)
    //         })
    //     }

    //     return () => {
    //         isMounted.current = false
    //     }
    // }, [isMounted])



    return { posts , loading, error }
}
