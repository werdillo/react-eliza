import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Spinner from 'react-bootstrap/Spinner';
import Layout from './Components/Layout';
import { Routes, Route, Navigate } from "react-router-dom";
import { Suspense } from 'react';

import Home from "./Pages/Home";
import Contacts from './Pages/Contacts';
import Gallery from './Pages/Gallery';
import Catalogs from './Pages/Catalogs';
import Horeca from './Pages/Horeca';
import FurnitureComponents from './Pages/FurnitureComponents';
import AboutUs from './Pages/AboutUs';
import Textile from './Pages/Textile';
import NotFound from './Pages/NotFound';
import ComingSoon from './Pages/ComingSoon';
// Collection-types
import Collection from './Pages/Collection';
import Eliza from './Pages/Collections/Eliza';
import SophisticatedLiving from './Pages/Collections/SophisticatedLiving';

function App() {
  return (
    <Suspense fallback={<Spinner animation="border" />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home /> }/>
          <Route path="/Horeca" element={<Horeca /> }/>
          <Route path="/Components" element={<FurnitureComponents /> }/>
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/Catalogs" element={<Catalogs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="/textile" element={<Textile />} />

          <Route path="/collection" element={<Collection />} />
          <Route path="/collection/eliza/*" element={<Eliza />} />
          <Route path="/collection/sophisticated-living/*" element={<SophisticatedLiving />} />
          {/* <Route path="/collection/sophisticated-living/" element={<Navigate to="/collection/sophisticated-living/products" replace />} /> */}


          <Route path="*" element={<NotFound /> }/>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
