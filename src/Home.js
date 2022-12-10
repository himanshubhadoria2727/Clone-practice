import React from 'react';
import "./Home.css";
import Product from "./Product";
function Home() {
    return (
    <div className="home">
       <div className = "home_conatiner">
       <img 
       className = "home_image"
       src ="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg" alt =""/>
       
       <div className="home_row">
          <Product 
          id= "12321341"
          title=" The Lean Startup: How Constant Innovation Creates Radically Successful Bussinesses Paperback" 
          price= {20.99}
          image = "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          rating= {5}
          />

          <Product
          id= "49538094"
          title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixed with K-beater, Dough Hook and Whish, 5 Litre Glass Bowl"
          price={239.0}
          rating={4}
          image= "https://m.media-amazon.com/images/I/716kTJI4jtL._SL1500_.jpg"
          />
          
          
        </div>

        <div className="home_row">
        <Product
        id="4903850"
        title="Amazfit GTS2 Mini Smart Watch with 1.55 AMOLED Display, SpO2 Level Measurement, Sleep&Stress Monitoring(Midnight Black)"
        price= {102.99}
        rating={4}
        image= "https://m.media-amazon.com/images/I/618MEYCaUQL._SL1500_.jpg"
        />
        <Product
        id="2344590"
        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
        price={98.99}
        rating={5}
        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
        />
        <Product
        title="New Apple iPad Pro (12.9-inch,Wi-Fi, 128GB) - Silver (4th Generation)"
        price={598.99}
        rating={4}
        image= "https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._ACSX385_.jpg"/>
         </div>

         <div className="home_row">
         
        <Product
        id= "12948746"
        title="2021 Apple MacBook Pro (14-inch/35.97 cm, Apple M1 Pro chip with 8‑core CPU and 14‑core GPU, 16GB RAM, 512GB SSD) - Silver"
        price={4999.0}
        rating={5}
        image= "https://m.media-amazon.com/images/I/61vFO3R5UNL._SX679_.jpg"
        />

        <Product
        id= "45728421"
        title="OnePlus Nord CE 2 5G (Gray Mirror, 6GB RAM, 128GB Storage)"
        price={350.0}
        rating={4}
        image= "https://m.media-amazon.com/images/I/619n6kxuGsL._SX679_.jpg"
        />
        </div>

        
        <div className="home_row">
        <Product
         id="4903850"
        title="Samsung LC4RG0SSUXEN 49' Curved LED Gaming Monitor Super Ultra Wide Dual WQHD 5120  x 1440"
        price= {1094.99}
        rating={4}
        image= "https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"/>

       </div>
       </div>
    </div>
       
    );
}

export default Home;