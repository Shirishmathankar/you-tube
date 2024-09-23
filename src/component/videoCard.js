import React from 'react'

 const Videocard = ({info}) => {
    console.log(info)
  return (
    <div className=' w-full p-2 shadow-lg cursor-pointer'>
        <img className='w-full rounded-lg hover:rounded-none transition-all duration-200  h-40' alt="thumbnail"src={info?.snippet?.thumbnails?.standard?.url}/>
        <ul className='font-medium'>
             <li>{info?.snippet?.title}</li>
             <li className='font-thin'>{info?.snippet?.channelTitle}</li>
             <li className='font-thin'>{info?.statistics.viewCount} view</li>
        </ul>
    </div>
  )
}
export default Videocard