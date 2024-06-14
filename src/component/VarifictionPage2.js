import React from 'react'

const VarifictionPage2 = () => {
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
              <div class="text-center mb-4">
             
                <img src="/images/Group 21.jpg" alt=""></img>
                </div>
                <h4 class="text-center pt-5  mb-4">Enter the OTP sent on email</h4>
               <div class="flex justify-center min-w-screen ">
    <div class="p-4 bg-white rounded  ">
        
        <div class="flex space-x-2">
            <input type="text" class="w-8 h-8 text-center text-base  border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
            <input type="text"  class="w-8 h-8 text-center text-base  border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
            <input type="text"  class="w-8 h-8 text-center text-base  border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
            <input type="text"  class="w-8 h-8 text-center text-base  border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
          
           
        </div>
    </div>
      </div> 
              
              <div class=" text-center mb-4">
<button type="submit"class="bg-black text-white font-bold w-full py-2 mt-3 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">VARIFY</button>
</div>
</form>
</div>
</div>
</div>
  )
}

export default VarifictionPage2
