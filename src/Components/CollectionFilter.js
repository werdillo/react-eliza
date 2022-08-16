import React from 'react'
import { NavLink } from 'react-router-dom';
import '../App.css';



export default function CollectionFilter(props) {
  return (
    <div className='filter-wrapper'>
      {
        props.data.map((item) => {
          return (
              <NavLink to={item.link} className='filter-link' style={({ isActive }) => ({ color: isActive ? '#fff' : '#000', background: isActive ? '#333333' : '#ffffff' })}>            
                {item.title}
              </NavLink>
          );
        })
      }			
    </div>
  )
}
