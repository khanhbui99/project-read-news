import React from 'react'
import "./style.scss";
import { useHistory } from "react-router-dom";



const ItemShow = ({
    item = {},
}) => {
    const history = useHistory();


    return (
        <div className="carousel-items" onClick={() => history.push(`/chi-tiet/${item.id}`)}>
            <div style={{ width: '100%', }} className="pr-2">
                <img src={item.image || ''} alt="carousel items" />
                <span className='pl-1 pr-1 text-justify line-clamp-4 f-14 mt-2 mb-3 '>
                    {item.title || ''}
                </span>
            </div>

        </div>
    )
}

export default ItemShow;
