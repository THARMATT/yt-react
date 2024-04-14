import React from 'react'
import { useSelector } from 'react-redux'
import store from '../store/store'

const Sidebar = () => {
  const isMenuOpen=useSelector((store)=>store.app.isMenuOpen)
  return !isMenuOpen?(null): (
    <div className='col-span-4  shadow-md max-h-screen overflow-auto'>
      <h1>Home </h1>
      <h1>Subscriptions </h1>
      <h1>Subscriptions </h1>
      <h1>Subscriptions </h1>
      <h1>Subscriptions </h1>
      <h1>Subscriptions </h1>
      <h1>Subscriptions </h1>
      <h1>Subscriptions </h1>
      <h1>Subscriptions </h1>
      <h1>Subscriptions </h1>
      <h1>Subscriptions </h1>
      <h1>Subscriptions </h1>
      <h1>Subscriptions </h1>
      <h1>Subscriptions </h1>
      <h1>Subscriptions </h1>
      <h1>Subscriptions </h1>
      <h1>Subscriptions </h1>
      <h1>Subscriptions </h1>
      <h1>Subscriptions </h1>
      <h1>Subscriptions </h1>
      <h1>Subscriptions </h1>
      <h1>Subscriptions </h1>
      <h1>Subscriptions </h1>
      <h1>Subscriptions </h1>
      <h1>Subscriptions </h1>
      <h1>Subscriptions </h1>
      <h1>Subscriptions </h1>
      <h1>Subscriptions </h1>
      <h1>Subscriptions </h1>
      <h1>Subscriptions </h1>
      <h1>Subscriptions </h1>
      <h1>Subscriptions </h1>
      <h1>Subscriptions </h1>
      <h1>Subscriptions </h1>
      <h1>Subscriptions </h1>
      <h1>Subscriptions </h1>
      <h1>Subscriptions </h1>
      <h1>Subscriptions </h1>
      <h1>Subscriptions </h1>


    
    </div>
  )
}

export default Sidebar
