import React from 'react'
import Buttons from './buttons'
function  Buttonlist() {
    const list=["All","Poular","music","mixes","pop music","computer programming","Skills","Dramedy"]
  return (
    <div className='flex px-5 py-2 '>
     {
        list.map((button,index)=>{   
          return <Buttons name={button} key={index}/>
        })
     }
    </div>
  )
}

export default Buttonlist