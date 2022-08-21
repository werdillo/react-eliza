import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Home from "./Pages/Home";
import Layout from './Components/Layout';
// Production root page
import Contacts from './Pages/Contacts';
import Gallery from './Pages/Gallery';
import Catalogs from './Pages/Catalogs';
import Horeca from './Pages/Horeca';
import FurnitureComponents from './Pages/FurnitureComponents';
import NotFound from './Pages/NotFound';
import AboutUs from './Pages/AboutUs';
// Production-types pages
import Production from './Pages/Production';

import ProductionSofa from './Pages/Production-types/Production_sofa';
import SofaDetails from './Pages/Production-types/SofaDetails';
import ProductionChairs from './Pages/Production-types/Production_chairs';
import ChairsDetails from './Pages/Production-types/ChairsDetails';
import ProductionBeds from './Pages/Production-types/Production_beds';
import BedsDetails from './Pages/Production-types/BedsDetails';
import ProductionTahtas from './Pages/Production-types/Production_tahtas';
import TahtasDetails from './Pages/Production-types/TahtasDetails';
import ProductionSofaBeds from './Pages/Production-types/Production_sofa_beds';
import SofaBedsDetails from './Pages/Production-types/SofaBedsDetails';
import ProductionPufs from './Pages/Production-types/Production_puffs';
import PuffsDetails from './Pages/Production-types/PuffsDetails';

// Collection-types
import Collection from './Pages/Collection';
import Eliza from './Pages/Collections/Eliza';
import SophisticatedLiving from './Pages/Collections/SophisticatedLiving';

import { Routes, Route, Navigate } from "react-router-dom";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home /> }/>
          <Route path="/Horeca" element={<Horeca /> }/>
          <Route path="/Components" element={<FurnitureComponents /> }/>
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/Catalogs" element={<Catalogs />} />
          <Route path="/about-us" element={<AboutUs />} />

          <Route path="/collection" element={<Collection />} />
          <Route path="/collection/eliza/*" element={<Eliza />} />
          <Route path="/collection/eliza/" element={<Navigate to="/collection/eliza/products" replace />} />
          {/* <Route path="/collection/bebold/" element={<Navigate to="/collection/bebold/products" replace />} /> */}
          <Route path="/collection/sophisticated-living/*" element={<SophisticatedLiving />} />
          <Route path="/collection/sophisticated-living/" element={<Navigate to="/collection/sophisticated-living/products" replace />} />


          <Route path="/Production" element={<Production /> } />

          <Route path="/Production/sofa/" element={<ProductionSofa />} />
          <Route path="/Production/sofa/details/*" element={<SofaDetails /> } />
          <Route path="/Production/sofa/details/" element={<Navigate to="/Production/sofa" replace />} />

          <Route path="/Production/chairs" element={<ProductionChairs />} />
          <Route path="/Production/chairs/details/*" element={<ChairsDetails />} />  
          <Route path="/Production/chairs/details/" element={<Navigate to="/Production/chairs" replace />} />

          <Route path="/Production/beds" element={<ProductionBeds /> }/>   
          <Route path="/Production/beds/details/*" element={<BedsDetails />} />
          <Route path="/Production/beds/details/" element={<Navigate to="/Production/tahtas" replace />} />

          <Route path="/Production/tahtas" element={<ProductionTahtas />} />
          <Route path="/Production/tahtas/details/*" element={<TahtasDetails />} />
          <Route path="/Production/tahtas/details/" element={<Navigate to="/Production/tahtas" replace />} />

          <Route path="/Production/sofa_beds" element={<ProductionSofaBeds /> }/>
          <Route path="/Production/sofa_beds/details/*" element={<SofaBedsDetails /> }/>
          <Route path="/Production/sofa_beds/details/" element={<Navigate to="/Production/sofa_beds" replace />} />

          <Route path="/Production/puffs" element={<ProductionPufs />}/>
          <Route path="/Production/puffs/details/*" element={<PuffsDetails />} />
          <Route path="/Production/puffs/details/" element={<Navigate to="/Production/puffs" replace />} />


          <Route path="*" element={<NotFound /> }/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
