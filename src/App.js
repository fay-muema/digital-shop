import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce'; 

import { Products, Navbar} from './components';

const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});

   const  fetchProducts = async () => {
        //const {data} = await commerce.products.list();
        
        setProducts(await commerce.products.list());

    }

const fetchCart = async () => {
   
    setCart( await commerce.cart.retrieve())
}

const handleAddCart= async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
}
    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);
    
    console.log(cart);
  return (
        <div>
            <h1>Digital online shop</h1>
            <Navbar />
            <Products products={products} onAddToCart={handleAddCart}/>

        </div>
    );
    }

export default App;
