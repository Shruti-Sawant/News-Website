import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Us from './components/CtryNews/Us';
import France from './components/CtryNews/France';
import Argentina from './components/CtryNews/Argentina';
import India from './components/CtryNews/India';
import Europe from './components/CtryNews/Europe';
import Ukraine from './components/CtryNews/Ukraine';
import News from './components/News'
const router = createBrowserRouter([
  {
    path: "/", element: <App />, children: [
      {path:'/', element:<News />},
      { path:'/us-news', element:<Us /> },
      { path: '/france-news', element: <France /> },
      { path:'/ukraine-news', element: <Ukraine /> },
      { path: '/argentina-news', element: <Argentina/> },
      { path: '/india-news', element: <India/> },
      { path: '/europe-news', element: <Europe /> }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
