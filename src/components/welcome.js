import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';
import './css/welcome.css';


const Welcome = (props) => {
    //define use state here
    function start (){
        // render(){
        //     ShadowRoot.render(element);
        // }
        console.log("Hello");
    }
    
    return (
        <div>
        <hgroup>
        <h1>Welcome to SavvySave</h1>
        <h3>
            In the next few steps, we will start to personalize your SavvySave
            experience.
        </h3>
        <br />
        <div>
            <button class="startB">Let's start your budgeting</button>
        </div>
        </hgroup>
    </div>
    );
}

export default Welcome;

