import React from 'react'
import '../../App.css';
import { Route, Routes, Outlet } from 'react-router-dom';
import SophisticatedLivingBeds from './SophisticatedLivingItems/SophisticatedLivingBeds';
import SophisticatedLivingChairs from './SophisticatedLivingItems/SophisticatedLivingChairs';
import SophisticatedLivingAll from './SophisticatedLivingItems/SophisticatedLivingAll';
import SophisticatedLivingSofas from './SophisticatedLivingItems/SophisticatedLivingSofas';
import CollectionFilter from '../../Components/CollectionFilter';

const SophisticatedLiving_links = [
  { title: "Viss", link: "products" },
  { title: "Gultas", link: "beds" },
  { title: "Krēsli", link: "chairs" },
  { title: "Dīvāni", link: "sofas" },
];

export default function SophisticatedLiving() {
  return (
    <>
      {/* <div>Sophisticated-living</div> */}
      <div className='products-container'>
        <CollectionFilter data={SophisticatedLiving_links}/>
      </div>
      <Outlet />
      <Routes>
        <Route index element={<SophisticatedLivingAll />} />
        <Route path="beds" element={<SophisticatedLivingBeds />} />
        <Route path="chairs" element={<SophisticatedLivingChairs />} />
        <Route path="sofas" element={<SophisticatedLivingSofas />} />
        {/* <Route path="sofas" element={} /> */}
      </Routes>
    </>

  )
}
