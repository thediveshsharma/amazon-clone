import { ShoppingBasketRounded } from '@material-ui/icons';
import React from 'react'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import {useStateValue} from "./StateProvider";

function Checkout() {
    const [{basket}, dispatch] = useStateValue();

    return (
        <div className="checkout">
        
            <div className = "checkout__left">
            
            <img className="checkout__ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/img16/GiftCards/CorpGCPages/InterMiles_Banner_PC.jpg" alt = ""></img>
        
            <div>
            <h2 className= "checkout__title"> Your Checkout Basket</h2>
            {basket.map (item =>(
                <CheckoutProduct
                id = {item.id}
                title = {item.title}
                image = {item.image}
                price = {item.price}
                rating = {item.rating}
                />
            ))}
            
            {/* {CheckoutProduct} */}
            {/* {CheckoutProduct} */}
            {/* {CheckoutProduct} */}
             </div>
            </div>

            <div className="checkout__right">
                <Subtotal/>

            </div>
        </div>
    )
}

export default Checkout