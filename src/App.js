import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./detail";
import Login from "./login";
import Signup from "./signup";


function App(){

  return(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Login/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
    <Route path='/detail' element={<Detail/>}></Route>
  </Routes>
  </BrowserRouter>
  )
}

export default App;
