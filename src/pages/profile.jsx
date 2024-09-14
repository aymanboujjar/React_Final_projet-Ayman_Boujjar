import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate()
    return (
        <div className='mt-8 flex  items-start justify-center gap-x-5'>
           <div className='border-2 px-5 w-[32%] py-3 flex flex-col gap-y-5 items-start'>
            <h1>New Customer</h1>
            <p>Register Account</p>
            <p>By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.</p>
            <button onClick={()=>navigate("/signup")} className='bg-black text-white px-8 py-2 cursor-pointer'>continue</button>
            </div> 
           <div className='border-2 px-5  py-3 flex flex-col gap-y-5 items-start'>
            <h1>Returning Customer</h1>
            <p>I am a returning customer</p>
            <form>
            <div className='flex flex-col gap-y-2'>
            <label htmlFor="email">email</label>
            <input type="email"  id="email" placeholder="email" class=" border-2  rounded-md  bg-white py-3 px-6 text-base font-medium text-[#757c82] outline-none   w-[40vw]"/>
            </div>
            <div className='flex flex-col gap-y-2'>
            <label htmlFor="password">password</label>
            <input type="password"  id="password" placeholder="password" class=" border-2  rounded-md   bg-white py-3 px-6 text-base font-medium text-[#757c82] outline-none   w-[40vw]"/>
            </div>
            <p className='mb-4 cursor-pointer'>forget your password?</p>
            <div className='flex items-center gap-x-4 '>
                <button className='bg-black text-white px-8 py-2'>Sign in </button>
                <p className=' cursor-pointer'>or Return to Store</p>
            </div>
            </form>
            </div> 
            
        </div>
    );
};

export default Profile;