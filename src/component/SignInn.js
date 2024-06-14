//import React from 'react'
import {Link} from 'react-router-dom'
const SignInn = () => {
  return (
    <>
     <div class="bg-gray-100   flex items-center justify-center ">
    <div class="bg-white   rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row ">
      
        < div class="hidden md:block md:w-1/2 ">
          <img class=" w-full  h-[770px] object-cover " src="./images/Screenshot 2024-06-03 221350.png"alt=""></img>
        </div>
        
        <div class=" md:w-1/2 p-4">
            <div class="flex   justify-center mb-4">
                <img src="./images/Screenshot 2024-06-05 172026.png" alt="Simple LLC" class="h-12"/>
            </div>
            <h2 class=" text-2xl font-bold text-center mb-4">SIMPLE LLC</h2>
            <h4 class=" text-center mb-4 pb-1">SIGN UP TO GET STARTED!</h4>
         
            <form class="">
              <div class="flex justify-between mb-4">
                <div class="w-1/2 pr-2 ">
                    <label for="firstName" class="block text-sm font-medium text-gray">First Name</label>
                    <input type="text" id="firstName"placeholder='enter first name' name="firstName" class="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                </div>
                <div class="w-1/2 pr-2 ">
                    <label for="lastName" class="block text-sm font-medium text-gray">Last Name</label>
                    <input type="text" id="lastName" name="lastName" placeholder='enter last name' class="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                </div>
                </div>
                <div class="mb-4">
                    <label for="email" class="block font-semibold  text-sm  text-gray">Email</label>
                    <input type="email" id="email" name="email" placeholder="you@gmail.com"class="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                </div>
                <div class="mb-4">
                    <label for="phone" class="block font-medium text-sm  text-gray">Phone</label>
                    <input type="tel" id="phone" name="phone"placeholder='+91-1234567890' class="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                </div>
                <div class="mb-4">
        <label for="password" class="block text-sm font-medium text-gray">Create Password</label>
        <div class="relative mt-1">
            <input type="password" id="password" name="password" class="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"/>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600 absolute right-3 top-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-.273.684-.631 1.348-1.058 1.957M12 19c-4.478 0-8.268-2.943-9.542-7 .273-.684.631-1.348 1.058-1.957" />
            </svg>
        </div>
    </div>
    <div class="mb-4">
        <label for="password" class="block text-sm font-medium text-gray">Create Password</label>
        <div class="relative mt-1">
            <input type="password" id="password" name="password" class="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"/>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600 absolute right-3 top-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-.273.684-.631 1.348-1.058 1.957M12 19c-4.478 0-8.268-2.943-9.542-7 .273-.684.631-1.348 1.058-1.957" />
            </svg>
        </div>
    </div>
<div class="">
        <input
            type="checkbox"
            id="terms"
            class="form-checkbox h-5 w-5 text-blue-600"
        />
        <span class="mb-4 ps-2 text-start font-normal text-gray">
            Accept all terms and conditions
        </span>
    </div>
<div class=" text-center mb-4">
<button type="submit"class="bg-black text-white font-bold w-full py-2 mt-3 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">SIGN UP</button>
</div>

<span class= " flex items-center justify-center">Already have an Account? <Link to="/Login"><b class="ps-2 ">LOGIN</b></Link></span>



</form>
</div>
</div>
</div>
    </>
  );
};

export default SignInn;
