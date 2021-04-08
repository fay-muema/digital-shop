import React from 'react'
import { Typography, CardAction, Card, Button, CardContent, CardMedia, CardActions } from '@material-ui/core';

import useStyles from './styles';

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
    const classes = useStyles();
    return (
        <Card>
            <CardMedia image={item.media.source} alt={item.name} className={classes.media} />
            <CardContent className ={classes.CardContent}>
                <Typography variant="h6">
                {item.name}
                </Typography>
                <Typography variant="h7">
                {item.line_total.formatted_with_stymbol}
                </Typography>

            </CardContent>
            <CardActions className={classes.CartActions}> 
            <div className={classes.buttons}>
                <Button type="button" size="small" onClick ={() => onUpdateCartQty(item.id, item.quantity - 1)}>-</Button>
                <Typography>{item.quantity}</Typography>
                <Button type="button" size="small" onClick= {() => onUpdateCartQty(item.id, item.quanty + 1) }>+</Button>

            </div>
            <Button variant="contained" type="button" color="Secondary" onClick={() => onRemoveFromCart(item.id) }>Remove</Button>

            </CardActions>
        </Card>
    )
}

export default CartItem
