import React from 'react'
import {Link} from 'react-router-dom'

const ResetPage = () => {
  return (
    <>
    <div class="bg-gray-100   flex items-center justify-center ">
    <div class="bg-white   rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row ">
      
        < div class="hidden md:block md:w-1/2 ">
          <img class=" w-full  h-[770px] object-cover " src="./images/Screenshot 2024-06-03 221350.png"alt=""></img>
        </div>
        
        <div class=" md:w-1/2 p-8">
            <div class="flex   justify-center mb-4">
                <img src="./images/Screenshot 2024-06-05 172026.png" alt="Simple LLC" class="h-12"/>
            </div>
            <h2 class=" text-2xl font-bold text-center mb-4">SIMPLE LLC</h2>
            <h4 class=" text-center mb-4 pb-1">RESET YOUR Password</h4>
         
            <form class="">
          
          
                <div class="mb-4">
        <label for="password" class="block text-sm font-medium text-gray">New Password</label>
        <div class="relative mt-1">
            <input type="password" id="password" name="password" class="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"/>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600 absolute right-3 top-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-.273.684-.631 1.348-1.058 1.957M12 19c-4.478 0-8.268-2.943-9.542-7 .273-.684.631-1.348 1.058-1.957" />
            </svg>
        </div>
    </div>
    <div class="mb-4">
        <label for="password" class="block text-sm font-medium text-gray">Confirm Password</label>
        <div class="relative mt-1">
            <input type="password" id="password" name="password" class="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"/>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600 absolute right-3 top-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-.273.684-.631 1.348-1.058 1.957M12 19c-4.478 0-8.268-2.943-9.542-7 .273-.684.631-1.348 1.058-1.957" />
            </svg>
        </div>
    </div>

<div class=" text-center mb-4">
<Link to="/VarifictionPage"><button type="submit"class="bg-black text-white font-bold w-full py-2 mt-3 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">RESET PASSWORD</button></Link>
</div>





</form>
</div>
</div>
</div>
    
    </>

  )
}

export default ResetPage
