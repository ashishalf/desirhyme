import React from 'react'
import ReactDOM from 'react-dom/client'
import ObjectRenderer from "./component/ObjectRenderer";
import ObjectRendererMobile from "./component/ObjectRendererMobile";
import "./App.css";
import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout.jsx';
import Indian from "./component/Indian";
import IndianMobile from "./component/IndianMobile";
import International from "./component/International.jsx";
import InternationalMobile from "./component/InternationalMobile.jsx";


const isMobile = window.innerWidth <= 768;

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={isMobile ? <ObjectRendererMobile /> : <ObjectRenderer />} />
      <Route path='indian' element={isMobile ?  <IndianMobile /> : <Indian />} />
      <Route path='international' element={isMobile ?  <InternationalMobile /> : <International />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}/>
  </React.StrictMode>,
)
