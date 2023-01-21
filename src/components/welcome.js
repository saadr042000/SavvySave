import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';
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
                <div>
                    <a class="firstB">Let's start your budgeting</a>
                </div>
                </hgroup>
            </div>
        )
    }

}
export default Welcome;

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <div>
//     <hgroup>
//       <h1>Welcome to SavvySave</h1>
//       <h3>
//         In the next few steps, we will start to personalize your SavvySave
//         experience.
//       </h3>
//       <div>
//         <a class="firstB">Let's start your budgeting</a>
//       </div>
//     </hgroup>
//   </div>
  
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();