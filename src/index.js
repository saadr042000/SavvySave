import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Welcome from './components/welcome';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Question from './components/question';


const router = createBrowserRouter([
    {
      path: "/",
      element: <Welcome/>,
    },
    {
        path: "/question",
        element: <Question/>
    }
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
<<<<<<< HEAD
root.render(
<RouterProvider router={router} />
);
=======
root.render(<App />);
>>>>>>> 7e8317127a1e384cbd0416c5daaf1b6aa5dbefa8
