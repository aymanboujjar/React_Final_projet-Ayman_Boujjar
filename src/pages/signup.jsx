import React, { useContext, useState } from 'react';
import { useCart } from '../context/index';
import { useNavigate } from 'react-router-dom';
import { IoPerson } from "react-icons/io5";

export const Signup = () => {
  const { dataUser, setDataUser } = useCart();
  const navigate = useNavigate();

  const [firstInputValue, setFirstInputValue] = useState("");
  const [lastInputValue, setLastInputValue] = useState("");
  const [emailInputValue, setEmailInputValue] = useState("");
  const [passwordInputValue, setPasswordInputValue] = useState("");

  const invalidChars = /[!@#$%^&*()\-+={}[\]:;"'<>,.?\/|\\]/;
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[^\s]{8,}$/
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/


  function nameFormating(name = "") {
    let formattedName = name.trim();
    formattedName =
      formattedName.charAt(0).toUpperCase() + formattedName.slice(1).toLowerCase();

    if (formattedName.includes(" ")) {
      let newName = "";
      let splitArr = formattedName.split(" ");
      splitArr.forEach((ele) => {
        newName +=
          ele.charAt(0).toUpperCase() + ele.slice(1).toLowerCase() + " ";
      });
      formattedName = newName.trim();
    }
    return formattedName;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProfile = {
      firstName: nameFormating(firstInputValue), 
      lastName: lastInputValue,
      email: emailInputValue,
      password: passwordInputValue,
    };

      if (invalidChars.test(firstInputValue)) {
        alert("Your first name contains special characters.");
        return;
      } else if (!lastInputValue) {
        alert("Last name is required.");
        return;
      }  else if (!emailInputValue) {
      alert("Email is required.");
      return;
    } 
      else if (!emailRegex.test(emailInputValue)) {
        alert("Please enter a valid email address.");
        return;
      } 
      else if (dataUser.find((element) => element.email === emailInputValue)) {
        alert("This email already exists.");
        return;
        } else if (!passwordRegex.test(passwordInputValue)) {
      alert("Password must be at least 8 characters long and include both letters and numbers.");
      return;
    }  else {
        setDataUser([...dataUser, newProfile]);
        console.log("wwwwwwwwwwwww", [...dataUser, newProfile]);

        navigate("/profile", {
          state: { notificationMessage: "Registration Successful!" },
        });
      }
    };

  return (
    <div>
      <div className="pl-[5vw] pt-[15vh] pb-[5vh]">
        <p className="text-[40px]">Create Account</p>
        <p className="text-[20px] text-[#888888] font-semibold">
          Your Personal Details
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <label htmlFor="">First Name</label>
          <input
            value={firstInputValue}
            onChange={(e) => setFirstInputValue(nameFormating(e.target.value))}
            type="text"
            placeholder="First Name"
            className="w-[70vw]  border-[#f6f2f2] text-[#888888]"
          />
          <label htmlFor="">Last Name</label>
          <input
            value={lastInputValue}
            onChange={(e) => setLastInputValue(e.target.value)}
            type="text"
            placeholder="Last Name"
            className="w-[70vw]  border-[#888888] text-[#888888]"
          />
          <label htmlFor="">Email</label>
          <input
            value={emailInputValue}
            onChange={(e) => setEmailInputValue(e.target.value)}
            type="email"
            placeholder="Email"
            className="w-[70vw]  border-[#888888] text-[#888888]"
          />
          <label htmlFor="">Password</label>
          <input
            value={passwordInputValue}
            onChange={(e) => setPasswordInputValue(e.target.value)}
            type="password"
            placeholder="Password"
            className="w-[70vw]  border-[#888888] text-[#888888]"
          />
          <div className="flex gap-3">
            <button className="text-white bg-black p-3 w-32 flex items-center gap-x-4" type="submit">
            <IoPerson />
            CREATE
            </button>
            <button className="text-[#616060] hover:text-[#e65540]">
              or Return to Store
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};