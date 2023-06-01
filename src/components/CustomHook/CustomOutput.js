import { useFetch } from './useFetch'

function CustomOutput() {

    const posts = useFetch('https://jsonplaceholder.typicode.com/posts/1', { method: 'GET'})  

    return (
        <div>
            UserID: {posts?.userId} <br />
            Title: {posts?.title} 
        </div>
    )
}

export default CustomOutput