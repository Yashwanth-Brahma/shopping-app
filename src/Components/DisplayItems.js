import { Card, CardContent, CardMedia, Typography, Button} from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { v4 } from 'uuid';

const DisplayItems = ({addToKart}) => {

    const [details, setDetails] = useState([]);

    const fetchItems = async () => {
        const { data } = await axios.get("https://fakestoreapi.com/products?limit=9");
        console.log(data);
        const details1 = data.map(item => (
            {
                name: item.title,
                price: item.price,
                image: item.image,
                id: v4()
            }
        ));
        setDetails(details1);
    }

    useEffect(() => {
        fetchItems();
    }, [])



    return (
        <div className="cardContainer">
            {details.map(item => (
                <Card className="card"  key={item.id}>
                    <CardMedia className="img"
                        image={item.image}
                        title={item.name} />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h3" className="price">
                            {item.name}
                            <span >$ {item.price}</span>
                        </Typography>

                        <Button variant="outlined" color="primary" key={item.id}
                            onClick={() => (addToKart(item))} >
                            Add to Kart
                        </Button>
                    </CardContent>
                </Card>
            ))}
        </div>

    )
}

export default DisplayItems
