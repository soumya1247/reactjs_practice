import { useFetch } from './useFetch'

function CustomOutput() {

    const { posts, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts/1', { method: 'GET' })

    if (loading) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    if (error) {
        return (
            <div>
                Error...
            </div>
        )

    }

    return (
        <div>
            UserID: {posts?.userId} <br />
            Title: {posts?.title}
        </div>
    )
}

export default CustomOutput