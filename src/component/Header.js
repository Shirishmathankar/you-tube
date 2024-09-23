import React from 'react'
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/Appslice';

 const Header = () => {
    const dispatch =useDispatch()
     function togglwMenuHandler(){
         dispatch(toggleMenu());
     } 
  return (
    <div className='grid grid-flow-col fixed left-0 right-0  shadow-md p-0 top-0 z-50 bg-white  h-min'>
        
         
        <div className='col-span-1 flex' >
            <img className='h-12 w-10 m-2 p-0 cursor-pointer'
            onClick={()=>togglwMenuHandler()}
            alt="strip"
            src="https://static.vecteezy.com/system/resources/thumbnails/002/292/406/small/hamburger-menu-line-icon-free-vector.jpg"
            />
            <img 
            alt="logo" 
            className='h-15 w-28 ' 
            src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
            />
        </div>
        <div className='col-span-10 flex justify-center mr-10'>
            <input className=" my-2 w-3/5 h-2/3 border border-slate-400 rounded-l-full"type="text" />
            <button className=' my-2 rounded-r-full border border-slate-400 h-2/3  w-1/7 px-3'>🔍</button>
        </div>
        <div className='col-span-1 flex m-2 justify-end space-x-3'>
            <img className='h-6 w-6 m-3 '
            alt="create" 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQeb-c28arSTfLLVmPRJjrv9ZmwEvsJUDI9A&s" 
            />
            <img className='h-8 w-8 m-2'
            alt="user" 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0VykKbAbaa7tNQ143EKaeGO22WXPDSXQLaQ&s"
            />
        
        
        </div>
    </div>

  )
}
export default Header;