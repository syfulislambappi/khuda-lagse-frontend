import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router'

const ItemsItem = () => {
    const {itemId} = useParams()
    const [item, setItem] = useState(null)
    useEffect(() => {
        fetch(`https://khuda-lagse-backend.herokuapp.com/item/${itemId}`)
            .then(res => res.json())
            .then(data => setItem(data[0]))
    }, [itemId])
    
    return (
        <Container className="py-5">
            <div className="w-50 rounded-3 border overflow-hidden p-2">
                <img className="mw-100" src={item?.image} alt={item?.title} />
            </div>
            <h2 className="my-3">{item?.title}</h2>
            <p>{item?.description}</p>
        </Container>
    )
}

export default ItemsItem
