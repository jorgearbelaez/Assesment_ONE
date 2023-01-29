import {BrowserRouter, Routes, Route} from "react-router-dom"
import { ToastContainer } from "react-toastify";
import Authlayout from "./layouts/Authlayout"
import Login from "./pages/Login"
import Register from "./pages/register"
import CreateAccount from "./pages/CreateAccount"
import Summary from "./pages/Summary";
import UserList from "./pages/Userlist";

function App() {

  return (
    <BrowserRouter>
      <ToastContainer limit={1} autoClose={1000} />
      <Routes>
            <Route path="/" element={<Authlayout />}>
              <Route index element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="create-account" element={<CreateAccount />} />
              <Route path="summary" element={<Summary />} />
              <Route path="user-list" element={<UserList />} />
              
            </Route>
      </Routes>      
    </BrowserRouter>

  )
}

export default App
