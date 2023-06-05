import { useState } from "react"

function Folders({ explorer }) {
    const [expand, setExpand] = useState(false)

    if (explorer.isFolder) {
        return (
            <div>
                <span onClick={() => setExpand(!expand)}>
                    {explorer.name}
                    <br />
                </span>

                <div style = {{ display: expand ? 'block': 'none', paddingLeft: '10px'}}>
                    {explorer.subFolders.map((exp) => {
                        return <Folders key = {exp.name} explorer = {exp}/>
                    })}
                </div>
            </div>
        )

    } else {
        return (
            <span>
                {explorer.name}
                <br />
            </span>
        )
    }
}

export default Folders