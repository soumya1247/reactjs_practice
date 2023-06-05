function Posts({ posts, loading }) {
    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <div>
            {posts.map((post, idx) => (
                <div key = {post.id}>{post.id} : {post.title}</div>
            ))}
        </div>
    )
}

export default Posts