import React from 'react'

function Index() {
  return (
    <div className=' flex justify-between py-5 items-center px-32'>
        <div className=' w-[300px] h-[100px] bg-gray-300 rounded-md'></div>
        <div>
            <ul className=' flex gap-10'>
                <li className=' cursor-pointer'>Home</li>
                <li className=' cursor-pointer'>About Us</li>
                <li className=' cursor-pointer'>About Us</li>
                <li className=' cursor-pointer'>Contact</li>
            </ul>
        </div>
        <div>
            <button className=' bg-gray-100 p-5 rounded-md text-[#000] font-semibold'>
                Call to action
            </button>
        </div>
    </div>
  )
}

export default Index