import React, { useEffect, useState } from 'react'
import { YOU_TUBE_API } from '../utils/constants'
import Videocard from './videoCard'
 const Container = () => {
    const [videos,Setvideos]=useState([])
    const getvideos=async()=>{
      const data=await fetch(YOU_TUBE_API);
      const json=await data.json();
      console.log(json);
      Setvideos(json.items)
   
    }
    
    useEffect(()=>{
        getvideos()
    },[])
    return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 px-4 py-1 mx-2 my-1 '>
        {
            videos.map((video)=><Videocard info={video}/>)
        }
    </div>
  )
}
export default Container;