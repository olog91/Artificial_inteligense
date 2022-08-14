import React from "react";
import Stars from './img/images/build_stars_icon.svg';
import chat from './img/images/build_chat_icon.svg';
import docs from './img/images/build_docs_icon.svg';
import head from './img/images/build_head_icon.svg';
import like from './img/images/build_like_icon.svg';
import planet from './img/images/build_planet_icon.svg';


export default function Inner () {


    return (

        <>
        
        <div class="osnova">

            <h2>Build up the whole picture</h2>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt <br /> mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.</p>

            <div class="osnova__buuton">
                <div class="osnova__top">
                    <button>
                        <img src={Stars} alt="build_stars_icon" />
                        <h3>Instant Features</h3>
                        <p>Duis aute irure dolor in reprehenderit in <br /> voluptate velit esse cillum dolore eu <br /> fugiat nulla pariatur. Excepteur sint <br /> occaecat cupidatat.</p>
                    </button>

                    <button>
                        <img src={docs} alt="build_docs_icon" />
                        <h3>Instant Features</h3>
                        <p>Duis aute irure dolor in reprehenderit in <br /> voluptate velit esse cillum dolore eu <br /> fugiat nulla pariatur. Excepteur sint <br /> occaecat cupidatat.</p>
                    </button>

                    <button>
                        <img src={planet} alt="build_planet_icon" />
                        <h3>Instant Features</h3>
                        <p>Duis aute irure dolor in reprehenderit in <br /> voluptate velit esse cillum dolore eu <br /> fugiat nulla pariatur. Excepteur sint <br /> occaecat cupidatat.</p>
                    </button>
                </div>

                <div class="osnova__down">
                    <button>
                        <img src={head} alt="build_head_icon" />
                        <h3>Instant Features</h3>
                        <p>Duis aute irure dolor in reprehenderit in <br /> voluptate velit esse cillum dolore eu <br /> fugiat nulla pariatur. Excepteur sint <br /> occaecat cupidatat.</p>
                    </button>

                    <button>
                        <img src={like} alt="build_like_icon" />
                        <h3>Instant Features</h3>
                        <p>Duis aute irure dolor in reprehenderit in <br /> voluptate velit esse cillum dolore eu <br /> fugiat nulla pariatur. Excepteur sint <br /> occaecat cupidatat.</p>
                    </button>
                    
                    <button>
                        <img src={chat} alt="build_chat_icon" />
                        <h3>Instant Features</h3>
                        <p>Duis aute irure dolor in reprehenderit in <br /> voluptate velit esse cillum dolore eu <br /> fugiat nulla pariatur. Excepteur sint <br /> occaecat cupidatat.</p>
                    </button>
                </div>
                <hr />
            </div>
    
        </div>

        </>

        )
    
    
    }