import { useEffect, useState } from "react"
import auth from "./config"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import {  Link, BrowserRouter} from "react-router-dom";

function Login(){

    const[user,setuser] = useState()
    const[pass,setpass] = useState()

    const navigate = useNavigate()

    useEffect(()=>{
        auth.onAuthStateChanged(function(user){
            if(user){
                console.log("logged in")
                navigate("/detail")
            } else {
                console.log("logged out")
            }
        })
    },[])

    function login(){
        signInWithEmailAndPassword(auth,user,pass).then(()=>{
            console.log("user Login in successfull")
            navigate("/detail")
        }).catch("Failed to login")
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <div className="w-full max-w-xs p-8 bg-white shadow-md rounded-lg">
            <h1 className="mb-4 text-2xl font-bold text-center">Login</h1>
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
              onClick={login}
              className="w-full p-2 mb-4 text-white bg-blue-500 rounded hover:bg-blue-600"
            >
              Login
            </button>
            <nav className="text-center">
              <Link to={'/signup'} className="text-blue-500 hover:underline">
                Signup
              </Link>
            </nav>
          </div>
        </div>
      )


}

export default Login