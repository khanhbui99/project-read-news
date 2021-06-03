import React from "react"
import {
    useParams
} from "react-router-dom";


const DetailsNews = () => {
    let { id } = useParams();
    return (
        <div>
            this is page details news {id}
        </div>
    )
}

export default DetailsNews