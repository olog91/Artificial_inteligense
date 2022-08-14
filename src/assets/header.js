import React from "react";
import logo from './img/images/Logo.svg';

export default function Slogan () {


    return (

        <>
            <header>

                <div class="logo">
                
                    <img  src={logo} alt="logo" />
                </div>

                <div class="sing-up">
                    <p class="header-docs"><a href="google.com">Documentation</a></p>
                    <button class="sing-up-b btn"><a href="google.com">Sign up</a></button>
                </div>

            </header>
        </>

    )


}

