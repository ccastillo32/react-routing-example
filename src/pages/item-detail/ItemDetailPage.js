import { useEffect, useState } from "react";

const ItemDetailPage = ({ match }) => {

    const [item, setItem] = useState({});

    useEffect(() => {
        fetchItem();
    }, []);

    const fetchItem = async () => {
        const id = match.params.id;
        const fecthItem = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${id}`);
        const json = await fecthItem.json();
        const { data } = json;
        const result = {
            id: data.itemId,
            name: data.item.name,
            imageURL: data.item.images.background
        }
        setItem( result );
    }

    

    return (
        <div>
            <div>{ item.name }</div>
            <img src={ item.imageURL } />
        </div>

    )
}

export default ItemDetailPage;
