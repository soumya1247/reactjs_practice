import { useState, useEffect } from "react"
import axios from "axios"

import Posts from './Posts'
import Paginate from './Paginate'

function PaginatedPosts() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPosts, setCurrentPosts] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(10)

    useEffect(() => {

        const controller = new AbortController()
        const signal = controller.signal

        const fetchPosts = async () => {
            try {
                setLoading(true)
                const res = await axios.get('https://jsonplaceholder.typicode.com/posts', { signal })
                setPosts(res?.data)
                setLoading(false)
            } catch (e) {
                console.error(e.message())
            }
        }

        fetchPosts()

        return () => {
            controller.abort()
        }
    }, [])

    const lastPostIndex = currentPosts * postsPerPage
    const firstPostIndex = lastPostIndex - postsPerPage
    const renderPost = posts.slice(firstPostIndex, lastPostIndex)

    const paginate = (pageNumber) => setCurrentPosts(pageNumber)
    const prev = () => {
        if (currentPosts == 1) setCurrentPosts(10)
        else setCurrentPosts(currentPosts - 1)
    }
    const next = () => {
        if (currentPosts == 10) setCurrentPosts(1)
        else setCurrentPosts(currentPosts + 1)
    }

    return (
        <div>
            <Posts posts = {renderPost} loading = {loading}/>
            <Paginate totalPosts = {posts.length} paginate = {paginate}/>
            <p><button onClick={prev}>PREV</button> | <button onClick={next}>NEXT</button></p>
        </div>
    )
}

export default PaginatedPosts