import React from 'react'
import {Link} from 'react-router-dom'
const VarifictionPage = () => {
    //const handleClick=()=>{
      //  alert("An OTP has been sent on your email successfully")
   // }
  return (
   
    <div class="bg-gray-100  flex items-center  justify-center ">
    <div class="bg-white  rounded-lg shadow-lg overflow-hidden  flex flex-col md:flex-row ">
      
        < div class="hidden md:block md:w-1/2 ">
          <img class=" w-full  h-[770px] object-cover " src="./images/Screenshot 2024-06-03 221350.png"alt=""></img>
        </div>
        
        <div class=" md:w-1/2 p-8">
            <div class="flex   justify-center mb-4">
                <img src="./images/Screenshot 2024-06-05 172026.png" alt="Simple LLC" class="h-12"/>
            </div>
            <h2 class=" text-2xl font-bold text-center mb-4">SIMPLE LLC</h2>
            <h4 class=" text-center mb-4 pb-1">VARIFY YOUR EMAIL</h4>
         
            <form class="">
              <div class="flex justify-between mb-4">
             
                
                </div>
                <div class="mb-4">
                    <label for="email" class="block font-semibold  text-sm  text-gray">Registered Email</label>
                    <input type="email" id="email" name="email" placeholder="you@gmail.com"class="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                </div>
              
      
  

   
<div class=" text-center mb-4">
<Link to="/VarifictionPage2"><button type="submit"class="bg-black text-white font-bold w-full py-2 mt-3 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">CONTINUE</button></Link>
</div>





</form>
</div>
</div>
</div>
  )
}

export default VarifictionPage
