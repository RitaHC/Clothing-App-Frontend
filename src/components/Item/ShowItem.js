import React from 'react'
import { useState, useEffect } from 'react'
import { showItem } from '../../api/item'
import { useParams } from 'react-router-dom'



function ShowItem(props) {
    const [item, setItem] = useState([])
    const { itemId } = useParams()

    useEffect(() => {
        showItem(itemId)
            .then(res => setItem(res.data.item))
    }, [itemId])

    return (
        <div>
            <h1>Show Item Page</h1>
            {item.price}
        </div>
    )
}


export default ShowItem

