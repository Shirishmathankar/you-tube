import React from 'react'
  
 const Buttons= ({name}) => {
  return (
    <div className='px-1 mx-1'>
        <button className='bg-gray-200 rounded-md p-1 m-1 capitalize '>{name}</button>
    </div>
  )
}
export default Buttons;