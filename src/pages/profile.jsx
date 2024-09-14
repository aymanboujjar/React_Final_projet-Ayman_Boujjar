import React, { useContext, useState } from 'react';
import { useCart } from '../context/index';
import { useNavigate } from 'react-router-dom';

export const Profile = () => {
    const navigate = useNavigate()
    const { dataUser} = useCart();
    console.log("hhhhhhhhhhhhhh", dataUser); 

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        const user = dataUser.find(
            (ele) => ele.email.trim().toLowerCase() ===  email.trim().toLowerCase() && ele.password === password.trim()
        );

        if (user) {
            alert("Login successful!");
        } else {
            alert("Invalid email or password. Please try again.");
        }
    };

    return (
        <div>

            <div className='flex bgdiv gap-9 pt-[22vh] pb-[7vh] ml-20'>
                <div className='flex flex-col gap-4 border border-[#888888] p-4'>
                    <p className='text-[40px]'>New Customer</p>
                    <p className='text-[20px] text-[#888888] font-semibold'>Register Account</p>
                    <p className='text-[#888888] w-[40vw]'>
                        By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.
                    </p>
                    <button onClick={() => { navigate(`/signup`) }} className='bg-black text-white p-3 w-36'>CONTINUE</button>
                </div>

                <div className='border border-[#888888] p-4'>
                    <p className='text-[40px]'>Returning Customer</p>
                    <p className='text-[20px] text-[#888888] font-semibold'>I am a returning customer</p>

                    <form onSubmit={handleLogin} className='flex flex-col gap-2'>
                        <label htmlFor="email">Email</label>
                        <input 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} 
                            type="email" 
                            placeholder='Email' 
                            className='text-[#888888] w-[40vw]' 
                            required
                        />
                        <label htmlFor="password">Password</label>
                        <input 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} 
                            type="password" 
                            placeholder='Password' 
                            className='text-[#888888]' 
                            required
                        />

                        <p className='text-[#616060] hover:text-[#e65540] cursor-pointer'>Forgot your password?</p>

                        <div className='flex gap-3'>
                            <button type="submit" className=' text-white bg-black p-3 w-32'>SIGN IN</button>
                            <button className='text-[#616060] hover:text-[#e65540]'>or Return to Store</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};