import { useState } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth"
import auth from "./config"
import {useNavigate } from "react-router-dom"

function Signup(){
const[user,setuser] = useState()
const[pass,setpass] = useState()

const navigate = useNavigate()

function signup(){
    createUserWithEmailAndPassword(auth,user,pass).then(()=>{
        console.log("user Registered")
        navigate("/login")
    })
}

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <div className="w-full max-w-xs p-8 bg-white shadow-md rounded-lg">
            <h1 className="mb-4 text-2xl font-bold text-center">Sign Up</h1>
            <input
              type="text"
              placeholder="Username"
              className="w-full p-2 mb-4 border rounded"
              onChange={(e) => setuser(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 mb-4 border rounded"
              onChange={(e) => setpass(e.target.value)}
            />
            <button
              onClick={signup}
              className="w-full p-2 mb-4 text-white bg-green-500 rounded hover:bg-green-600"
            >
              Sign Up
            </button>
          </div>
        </div>
      );

}

export default Signup