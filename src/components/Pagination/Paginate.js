

function Paginate({ paginate, totalPosts }) {
    const numberPage = []

    for (let i = 1; i <= Math.ceil(totalPosts / 10); i++) {
        numberPage.push(i)
    }

    return (
        <div>
            {numberPage.map((number, idx) => (
                <a onClick = {() => paginate(number)} href = '!#' key = {idx}>{number} |</a>
            ))}
        </div>
    )
}

export default Paginate