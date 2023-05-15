import React from 'react'
import Navbar from '../components/Navbar'
import UserWidget from '../widgets/UserWidget'
import { useSelector } from 'react-redux';


function HomePage() {
  const { id } = useSelector((state) => state.user || {}); // use an empty object as a fallback // coming from redux/store, NEEDED to use persist because kept signing me out.
  
  
  
  return (
    <div>
      <Navbar />
    <div>
        <UserWidget userId={id}/>
    </div>
    </div>

  )
}  

export default HomePage
