import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core';
import CartItem from './CartItem/CartItem';
import { Link } from 'react-router-dom';

import useStyles from './styles';

const Cart = ({ cart, handleUpdateQty, handleEmptyCart, handleRemoveFromCart }) => {
    const classes = useStyles();

   
    const EmptyCart = () => (
        <Typography variant='subtitle1'>
            No items on cart
            <Link to="/" className={classes.link}>
            Start adding items!!
            </Link>
        </Typography>

    );
    const FilledCart = () => (
        <>
        <Grid container spacing={3}>
            {cart.line_items.map((item) =>(
                <Grid item xs={12} sm={4} key={item.id}>
                  <CartItem item={item} onUpdateCartQty= {handleUpdateQty} onRemoveFromCart={handleRemoveFromCart}/>

                </Grid>
            ))}
        </Grid>
        <div className= {classes.cardDetails}>
            <Typography variant="h6">
                SubTotal: {cart.subtotal.formatted_with_symbol}
                </Typography>
                <div>
                    <Button className={classes.emptyButton} size="large" variant="contained" type="button" color="secondary" onClick={handleEmptyCart}>
                    Empty Cart
                    </Button>
              
                <Button component={Link} to= "/checkout" className={classes.checkoutButton} size="large" variant="contained" type="button" color="primary">
                    Check Out
                </Button>
            </div>

        </div>
        </>
    );
    if(!cart.line_items) return 'LOADING...';

    return (
        
            <Container>
                <div className ={classes.toolbar}/>
                <Typography className={classes.title} variant="h6" gutterBottom>
                    My ShoppingCart
                </Typography>
                { !cart.line_items.length ? <EmptyCart/> : <FilledCart/> }

            </Container>
            
    )
} 

export default Cart
