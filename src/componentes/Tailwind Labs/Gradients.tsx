//https://www.youtube.com/watch?v=1Rs5Kml8qMM
//Gradients – What's new in Tailwind CSS

import {FC} from 'react'

const Gradients:FC = () => {
  return (
    <div className='p-10 min-h-screen flex items-center justify-center bg-gray-700' >
       {/* Gradient utilities  */}
        <div className='w-96 h-56 first:rounded-lg shadow-2xl overflow-hidden'>
            <div className='h-full w-full bg-gradient-to-br from-pink-300 via-blue-500 to-green-300' ></div>
        </div>
    </div>
  )
}

export default Gradients