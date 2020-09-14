import React,{useState, useEffect} from 'react';
import axios from 'axios'

function FetchingDataId() {
    const [post, setPost] = useState([])
    const [id, setId] = useState()
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    useEffect(() => {
        axios.get(`http://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => {
            console.log(res);
            setPost(res.data)
        })
        .catch(err => {
            console.log(err);
        })
    }, [idFromButtonClick])

    const handleClick = () => {
        setIdFromButtonClick(id)
    }


    return (
        <div>
            <input type="text"
                   value={id}
                   onChange={e => setId(e.target.value)}/>
            <button onClick={handleClick}>
                Fetch post by id
            </button>
            
            <h1>{post.title}</h1>
            
        </div>
    )
}

export default FetchingDataId
