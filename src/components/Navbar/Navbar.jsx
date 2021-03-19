import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
//import classes from '*.module.css';

import logo from '../../assets/digital.jpg';
import useStyles from './styles'; 
const Navbar = () => {
    const classes = useStyles();
    return (
        <div>
            <AppBar position="fixed" className= {classes.appBar} color="inherit"> 
            <Toolbar>
                <Typography variant="h6" className={classes.title} color="inherit">
                   <img src={logo} alt="Digital.js" height="25px" className={classes.image} /> 
                   Digital.js
                </Typography>
                <div className={classes.grow}/>
                <div className={classes.button}>
                    <IconButton aria-label="show cart items" color="inherit">
                        <Badge badgeContent={2} color= "secondary"></Badge>
                        <ShoppingCart/>

                    </IconButton>

                </div>
            </Toolbar>

            </AppBar>
            
        </div>
    )
}

export default Navbar
