import React from 'react'
import { Link } from 'react-router-dom'
import './Dashboard.css'

function Dashboard() {
  return (
    <>
        <nav classname='Dashboard'>
          <div classname='Dashboard-container'>
              <button to="/" classname='dash-logo'>
                  BIMS <i className="fa-sharp fa-solid fa-house"></i>
              </button>
              <button className='addresident-icon'>
                 <i class="fa-sharp fa-solid fa-user-plus"></i>
              </button>
              <button className='household-icon'>
                  <i class="fa-sharp fa-solid fa-users"></i>
              </button>
              <button className='graph-icon'>
                 <i class="fa-sharp fa-solid fa-chart-simple"></i>
              </button>
              <button className='maps-icon'>
                 <i class="fa-sharp fa-solid fa-map"></i>
              </button>
              <button className='user-icon'>
                  <i class="fa-sharp fa-solid fa-user"></i>
              </button>
          </div>
        </nav>
    </>
  )
}

export default Dashboard