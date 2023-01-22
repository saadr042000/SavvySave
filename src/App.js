
import './App.css';
import './index.css';
import React,{useState} from 'react';
import MEthod1 from './components/method1';
import Welcome from './components/welcome';
import Question from './components/question';


function App() {
  const pages = [Welcome, Question, MEthod1];
  const [pointer, setpointer] = useState(0);

  function changepage(mypointer) {
    setpointer(mypointer);
  } 

  const currentpage = pages[pointer];


  

  return (
  <div className="App">
<<<<<<< HEAD

    <currentpage setpage={changepage}/>;
=======
    <Welcome />
>>>>>>> 7e8317127a1e384cbd0416c5daaf1b6aa5dbefa8
  </div>
  );
}

export default App;
