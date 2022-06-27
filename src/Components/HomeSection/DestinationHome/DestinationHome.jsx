import React from 'react'
import AllItem from '../../Destinations/AllItem'

export default function DestinationHome() {
  return (
    <>
      <section className='popular top'>
        <div className="container-flui">
            <div className="heading">
                <h1>Most Popular Destination</h1>
                <div className="line"></div>
            </div>
            <div className="content">
                <AllItem />
            </div>
        </div>
      </section>
    </>
  )
}
