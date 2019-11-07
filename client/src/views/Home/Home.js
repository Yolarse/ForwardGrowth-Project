import React from 'react';
import './Home.css'
import app from '../../assets/AppStore.svg';
import og from '../../assets/OrchardGrove(1).png';
import demo from '../../assets/ForwardGrowthDemo.png';
import demo1 from '../../assets/ForwardGrowthDemo-1.png';
//import Image from 'react-bootstrap/Image'

//Home Page: Sofia & Mark
//Mark: Static
//Sofia: Boostrap and CSS

function Home() {
    const getUser = (_name,_email) => {
        
    };
  
    return (
        <div className="App">
            <h1>Home Page</h1>
            <div className="bg">
            <img src={og} alt="Backpack Adventures Gaming App"></img>
            </div>
            <div className="bg">
            <img src={demo} alt="Backpack Adventures Gaming App"></img>
            </div>
            <div className="bg">
            <img src={demo1} alt="Backpack Adventures Gaming App"></img>
            </div>
            <div className="row">
            <a target="_blank" rel="noopener noreferrer" href="https://apps.apple.com/us/app/temple-run/id420009108?mt=8"><img src ={app} width={'120 px'} height={'405 px'} alt = "App Store"></img></a>
            </div>
        </div>
    );
}

export default Home;
