import React from 'react'
import '../../App.css';
import { Route, Routes, Outlet } from 'react-router-dom';
import CollectionFilter from '../../Components/CollectionFilter';
import ElizaAll from './ElizaItems/ElizaAll';
import ElizaSofas from './ElizaItems/ElizaSofas';
import ElizaSofaBeds from './ElizaItems/ElizaSofaBeds';
import ElizaBeds from './ElizaItems/ElizaBeds';
import ElizaChairs from './ElizaItems/ElizaChairs';
import ElizaPuffs from './ElizaItems/ElizaPuffs';
import ElizaTahtas from './ElizaItems/ElizaTahtas';

const SophisticatedLiving_links = [
  { title: "Viss", link: "products" },
  { title: "Dīvāni", link: "sofas" },
  { title: "Dīvāni-gultas", link: "sofa-beds" },
  { title: "Gultas", link: "beds" },
  { title: "Krēsli", link: "chairs" },
  { title: "Pufi", link: "puffs" },
  { title: "Tahtas", link: "tahtas" },
];

export default function Eliza() {
  return (
    <>
      {/* <div>Sophisticated-living</div> */}
      <div className='products-container'>
        <CollectionFilter data={SophisticatedLiving_links} />
      </div>
      <Outlet />
      <Routes>
        <Route path="products" element={<ElizaAll />} />
        <Route path="sofas" element={<ElizaSofas />} />
        <Route path="sofa-beds" element={<ElizaSofaBeds />} />
        <Route path="beds" element={<ElizaBeds />} />
        <Route path="chairs" element={<ElizaChairs />} />
        <Route path="puffs" element={<ElizaPuffs />} />
        <Route path="tahtas" element={<ElizaTahtas />} />
        {/* <Route path="sofas" element={} /> */}
      </Routes>
    </>
  )
}
