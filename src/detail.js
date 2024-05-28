import { useState } from "react";
import axios from "axios";
import { signOut } from "firebase/auth"
import auth from "./config"
import { useNavigate } from "react-router-dom"

function Detail(){
    
const Navigate = useNavigate()

function logout(){
    signOut(auth).then(()=>{
        Navigate("/login")
    })

}

  const[city,setcity] = useState("")
  const [district,setdistrict] = useState("")
  const [region,setregion] = useState("")
  const [State,setstate] = useState("")
  const [country,setcountry] = useState("")
  const [pincode,setpincode] = useState("")
 

  function handlecity(evt){
    setcity(evt.target.value)
  }

  function getlocation(){
    var citydata = axios(`https://api.postalpincode.in/postoffice/${city}`)
    citydata.then(function(success){
      console.log(success.data)
      setdistrict(success.data[0].PostOffice[0].District)
      setregion(success.data[0].PostOffice[0].Region)
      setstate(success.data[0].PostOffice[0].State)
      setcountry(success.data[0].PostOffice[0].Country)
      setpincode(success.data[0].PostOffice[0].Pincode)
    })
  }

return (
    <div className="min-h-screen bg-white-900 flex items-center justify-center p-6 sm:p-10">
      <div className="bg-green-400 rounded-lg shadow-lg p-6 sm:p-10 w-full max-w-lg">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-orange-600 mb-4 text-center">Location Dashboard</h1>
        <p className="text-lg sm:text-2xl text-blue-700 mb-6 text-center">I can give you the postal information for the location using the city!</p>
        <div className="flex flex-col items-center">
          <input
            onChange={handlecity}
            type="text"
            placeholder="Enter the city here..."
            className="border border-black rounded-lg px-4 py-2 w-full mb-4 text-center focus:ring-2 focus:ring-orange-600 focus:outline-none"
          />
          <button
            onClick={getlocation}
            className="bg-black text-white px-6 py-2 rounded-lg font-semibold transition duration-300 transform hover:bg-orange-600 hover:scale-105"
          >
            Get Details
          </button>
        </div>
        <div className="font-medium mt-8 space-y-2">
          <p><span className="font-bold">DISTRICT: </span>{district}</p>
          <p><span className="font-bold">REGION: </span>{region}</p>
          <p><span className="font-bold">STATE: </span>{State}</p>
          <p><span className="font-bold">COUNTRY: </span>{country}</p>
          <p><span className="font-bold">PINCODE: </span>{pincode}</p>
        </div>
        <div className="mt-6 flex justify-center">
          <button
            className="text-black bg-white px-4 py-2 rounded-lg transition duration-300 transform hover:bg-gray-200 hover:scale-105"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
  

}

export default Detail