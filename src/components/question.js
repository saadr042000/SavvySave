import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import './css/question.css';
import { useNavigate } from "react-router-dom";

const Question = (props) =>  {
    const [name, setName] = useState("");
    const [headingText, setHeading] = useState("");
  
    function handleChange(event) {
      console.log(event.target.value);
      setName(event.target.value);
    }
  
    function handleClick(event) {
      setHeading(name);
  
      event.preventDefault();
    }
  
    return (
      <div className="container">
        <h1>Hello {headingText}</h1>
        <form onSubmit={handleClick}>
          <input
            onChange={handleChange}
            type="text"
            placeholder="What's your name?"
            value={name}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
}


export default Question;