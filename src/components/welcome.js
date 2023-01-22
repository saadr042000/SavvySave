import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';
import { useNavigate } from "react-router-dom";
import './css/welcome.css';


const Welcome = (props) => { 
    const navigate = useNavigate()
    //define use state here

    const route = () => {
        navigate('/question');
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
            <button className="startB" onClick={route}>Let's start your budgeting</button>
        </div>
        </hgroup>
    </div>
    );
}

export default Welcome;

