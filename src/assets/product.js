import React from "react";
import product_shama from './img/images/product_shama.png';
import product_mobile from './img/images/product_mobile.png';
import product_shedul from './img/images/product_shedul.png';


export default function Product () {


    return (

        <>

        <div class="one-product">
            <button>Reach goals that matter</button>

            <h2>One product, unlimited solutions</h2>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia <br /> deserunt mollit laborum — semper quis lectus nulla.</p>

            <div class="one-product__projects">

                <div class="one-product__projects-top">
                    <div class="one-product__projects-text">
                        <h4>More speed. Less spend</h4>
                        <h2>Keep projects on schedule</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed do eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua.</p>
                        <ul>
                            <li>Duis aute irure dolor in reprehenderit</li>
                            <li>Excepteur sint occaecat </li>
                            <li>Amet consectetur adipiscing elit</li>
                        </ul>
                    </div>
                    <div class="one-product__projects-img">
                        <img src={product_shedul} alt="product_shedul" />
                    </div>
                </div>

                <div class="one-product__projects-top">
                    <div class="one-product__projects-img">
                    <img src={product_shama} alt="product_shama" />
                    </div>
                    
                    <div class="one-product__projects-text">
                        <h4>More speed. Less spend</h4>
                        <h2>Keep projects on schedule</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed do eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua.</p>
                        <ul>
                            <li>Duis aute irure dolor in reprehenderit</li>
                            <li>Excepteur sint occaecat </li>
                            <li>Amet consectetur adipiscing elit</li>
                        </ul>
                    </div>
                </div>

                <div class="one-product__projects-top">
                    <div class="one-product__projects-text">
                        <h4>More speed. Less spend</h4>
                        <h2>Keep projects on schedule</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed do eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua.</p>
                        <ul>
                            <li>Duis aute irure dolor in reprehenderit</li>
                            <li>Excepteur sint occaecat </li>
                            <li>Amet consectetur adipiscing elit</li>
                        </ul>
                    </div>
                    <div class="one-product__projects-img">
                        <img src={product_mobile} alt="product_mobile" />
                    </div>
                </div>

            </div>
            <hr />
        </div>

        </>

    )


}