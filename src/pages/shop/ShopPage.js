import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ShopPage = () => {

    const [ items, setItems ] = useState([]);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        const data = await fetch('https://fortnite-api.theapinetwork.com/store/get');
        const asJson = await data.json();
        const list = asJson.data.map(d => {
            return { 'name': d.item.name, 'id': d.itemId, 'imageURL': d.item.images.featured  }   
        });
        setItems( list );
    }

    return (
        <div>
            <h1>Shop page</h1>
            <div>
                {
                    items.map( item => (
                        <Link key={ item.id} to={ `/shop/${ item.id }` } >
                            <h6>{ item.name }</h6>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default ShopPage;
