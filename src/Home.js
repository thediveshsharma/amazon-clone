import React from 'react'
import "./Home.css";
import Product from './Product';

export default function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonDevices/GW/Akai-GW-Banner_PC_1X._CB414374623_.jpg"></img>
            
                <div className="home__row">
                <Product 
                id = {164853179}
                title= "The Amazon Management System"
                image = "https://m.media-amazon.com/images/I/51Dfu6ijByL._SY346_.jpg"
                price = {450}
                rating = {5}/>

                <Product
                id = {263786235}
                title = "One Arranged Murder By Chetan Bhagat"
                image = "data:image/webp;base64,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"
                price = {225}
                rating = {3}
                />
                </div>
                <div className="home__row">
                <Product
                id = {492157618}
                title = "Kenwood kMix 051 500-Watt Stand Mixer (Raspberry Red)"
                image = "https://images-na.ssl-images-amazon.com/images/I/51ae8jtSakL._SL1200_.jpg"
                price = {1750}
                rating = {4}
                />
                <Product
                id = {944576195}
                title = "Amazon Echo (3rd Gen) – Improved sound, powered by Dolby (White)"
                image = "https://images-na.ssl-images-amazon.com/images/I/71L%2B9BicFNL._SL1100_.jpg"
                price = {5999}
                rating = {5}
                />
                <Product
                id = {100463522}
                title = "SHOPTOSHOP Sport Fitness Band Tracker Watch Heart Rate with Activity Tracker Waterproof Body Functions Like Steps Counter, Calorie Counter, Blood Pressure, Heart Rate Monitor LED Touchscreen Black"
                image = "https://images-na.ssl-images-amazon.com/images/I/51Z0dq461iL._SL1000_.jpg"
                price = {474}
                rating = {2}
                />
                </div>
                <div className="home__row">
                <Product
                 id = {356823578}
                 title = "LG UltraWide 34 Inch WFHD (2560 x 1080) IPS Display - HDR 10, AMD Free sync, sRGB 99%, Multitasking and Gaming Monitor - 34WL500"
                 image = "https://images-na.ssl-images-amazon.com/images/I/71xMxbdxrsL._SL1500_.jpg"
                 price = {25999}
                 rating = {5}
                />
                
                </div>
            
            </div>


           
        </div>
    )
}
