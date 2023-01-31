import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Spinner from 'react-bootstrap/Spinner';
import Layout from './Components/Layout';
import { Routes, Route } from "react-router-dom";
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
import Collections from './Pages/Collections';
import Basic from './Pages/Collections/Basic';
import Bbold from './Pages/Collections/Bbold';
// import SophisticatedLiving from './Pages/Collections/SophisticatedLiving';

function App() {
  return (
    <Suspense fallback={<Spinner animation="border" />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home /> }/>
          <Route path="/horeca" element={<Horeca /> }/>
          <Route path="/components" element={<FurnitureComponents /> }/>
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/catalogue" element={<Catalogs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="/textile" element={<Textile />} />

          <Route path="/collection" element={<Collections />} />
          <Route path="/collection/bbold/*" element={<Bbold />} />
          <Route path="/collection/basic/*" element={<Basic />} />
          {/* <Route path="/collection/sophisticated-living/*" element={<SophisticatedLiving />} /> */}

          <Route path="*" element={<NotFound /> }/>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
