import React from 'react'
import Member from "../assets/images/Member.svg"
import Notification from "../assets/images/Notification.svg"

const Navbar = () => {
    return (
        <div className='container mx-auto flex justify-between align-middle py-2'>
            <div className='ps-24'><p className='text-white text-2xl flex justify-center items-center h-full'>Jobs</p></div>
            
            <div>
    <div className="wrapper">
        <div className="searchBar flex">

            <input id="searchQueryInput" type="text" name="searchQueryInput" defaultValue={"Analyst"} value="Analyst" class="w-96 h-12 bg-gray-800 outline-none border-none rounded-full px-6 text-white text-base" />
            <button id="searchQuerySubmit" type="submit" name="searchQuerySubmit" class="w-14 h-11 bg-transparent outline-none border-none bg-none -ml-10  ">
                <svg class="w-6 h-6 text-gray-600 hover:text-gray-400" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                </svg>
            </button>
        </div>
    </div>
</div>
           <div className='pe-24'>
                <div className='grid grid-cols-2 gap-4 '>
                    <div className='w-11 h-12'><img src={Member} /></div>
                    <div className='w-11 h-10'><img src={Notification} /></div>
                </div>
                </div>
        </div>
    )
}

export default Navbar