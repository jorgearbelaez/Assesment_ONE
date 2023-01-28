import {BrowserRouter, Routes, Route} from "react-router-dom"
import Authlayout from "./layouts/Authlayout"
import Login from "./pages/Login"
import Register from "./pages/register"
import CreateAccount from "./pages/CreateAccount"


function App() {

  return (
    <BrowserRouter>
      <Routes>
            <Route path="/" element={<Authlayout />}>
              <Route index element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="create-account" element={<CreateAccount />} />
              
            </Route>
      </Routes>      
    </BrowserRouter>

  )
}

export default App
