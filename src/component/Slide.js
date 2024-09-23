import React from 'react';
import { useSelector } from 'react-redux';

 const Slide = () => {
    const isMenuOpen=useSelector((store)=>store.app.isMenuOpen)
    if(!isMenuOpen){
        return null;
    }
  return (
      
    <div className='p-5 h-screen sticky max-w-md shadow-lg'>
        <div className='m-2'>
             <ul>
                 <li className='m-2'>Home</li>
                 <li className='m-2'>Shorts</li>
                 <li className='m-2'>Subscription</li>
             </ul>
        </div>  
        <div className='m-2'>

           <h1 className='text-xl font-bold'>You</h1>
               <ul>
                   <li className='m-2'>Your Channel</li> 
                   <li className='m-2'>History</li> 
                   <li className='m-2'>PlayList</li> 
                   <li className='m-2'>Your Videos</li> 
                   <li className='m-2'>Watch Later</li> 
                   <li className='m-2'>Liked Videos</li> 
               </ul>
        </div>       
        <div className='m-2'>

<h1 className='text-xl font-bold'>Explore</h1>
    <ul>
        <li className='m-2'>Your Channel</li> 
        <li className='m-2'>History</li> 
        <li className='m-2'>PlayList</li> 
        <li className='m-2'>Your Videos</li> 
        <li className='m-2'>Watch Later</li> 
        <li className='m-2'>Liked Videos</li> 
    </ul>
</div>   
       <div className='m-2'>
             <ul>
                 <li className='m-2'>Home</li>
                 <li className='m-2'>Shorts</li>
                 <li className='m-2'>Subscription</li>
             </ul>
        </div>     
    </div>

  )
}
export default Slide;