import React from 'react'
import { Card, CardContent, Typography, Button, ListItem,CardHeader} from '@material-ui/core';

const Kart = ({items,remove,buyNow}) => {
    let amount=0;

    items.forEach(item => {
        amount=parseFloat(amount)+parseFloat(item.price);
    })

    return (
        <div>
            <h1>kart</h1>
            <ListItem>
            {
                items.map((item)=>(
                    <Card key={item.id}>
                         <img className="kartImg"
                        src={item.image}
                        alt={item.name} />
                         <CardContent>
                        <Typography gutterBottom variant="h5" component="h3" className="kartPrice">
                            {item.name}
                            <span >$ {item.price}</span>
                        </Typography>

                        <Button variant="outlined" color="primary" key={item.id}
                            onClick={() => (remove(item))} >
                            REMOVE
                        </Button>
                    </CardContent>
                    </Card>
                ))
            }
            </ListItem>

            {
                items.length >= 1 ?(
                    <Card>
                        <CardHeader>
                            Grand Total
                        </CardHeader>
                        <CardContent>
                        Your amount for {items.length} product is {amount}
                        </CardContent>
                        <Button variant="outlined" color="primary" 
                            onClick={() => (buyNow())} >
                            BUY NOW
                        </Button>
                    </Card>
                ):(
                    <h1 className="text-warning">Kart is empty</h1>
                )
            }

        </div>
    )
}

export default Kart
