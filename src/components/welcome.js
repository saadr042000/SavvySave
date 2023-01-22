import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';
import './css/welcome.css';

// const element = <h1>bruh</h1>;

function start (){
    // render(){
    //     ShadowRoot.render(element);
    // }
}


export class Welcome extends Component {
    render(){

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
                    <button class="startB" onCLick={start}>Let's start your budgeting</button>
                </div>
                </hgroup>
            </div>
        )
    }

}
export default Welcome;