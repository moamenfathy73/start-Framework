
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css"
import './App.css'
import Layout from './component/Layout/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './component/Home/Home'
import About from './component/About/About';
import Portfolio from './component/Portfolio/Portfolio';
import Contact from './component/Contact/Contact';
import Error from './component/Error/Error';

function App() {

  const router = createBrowserRouter([
        {path: "", element: <Layout />, children: [
        { path: "home", element: <Home/> },
        { path: "about", element: < About /> },
        { path: "portfolio", element: <Portfolio /> },
        { path: "contact", element: <Contact /> },
        { path: "*", element: <Error /> }

      ]
    },
    {
      path: "*", element: <Error />
    }


  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
