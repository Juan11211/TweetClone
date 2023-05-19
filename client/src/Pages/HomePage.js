import React from 'react'
import Navbar from '../components/Navbar'
import UserWidget from '../widgets/UserWidget'
import { useSelector } from 'react-redux';
import MyPostWidget from '../widgets/MyPostWidget'


function HomePage() {
  const { id, picturePath } = useSelector((state) => state.user || {}); // use an empty object as a fallback // coming from redux/store, NEEDED to use persist because kept signing me out.
  
  
  
  return (
    <div>
      <Navbar />
    <div>
        <UserWidget userId={id} picturePath={picturePath} />
    
    </div>
    <div>
        <MyPostWidget picturePath={picturePath} />
    </div>
    </div>

  )
}  

export default HomePage
