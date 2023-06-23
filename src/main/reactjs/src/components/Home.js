import React from 'react';
import img from "../image/sickhominunbg.gif";
import "../App.css"
function Home(props) {
    return (
        <div>
            <h1>Home</h1>
            <img alt="" src={img} className="sickhomin"/>
        </div>
    );
}

export default Home;