import  { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteError, login, setLogout } from '../redux/features/authSlice'
import { toast } from 'react-toastify'

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loading, error } = useSelector((state) => ({ ...state.auth }));

    const [userForm, setUserForm] = useState({
        email: "", password: ""
    })
    const { email, password } = userForm;

    useEffect(() => {
        dispatch(setLogout())
    }, [])

    useEffect(() => {
        error && toast.error(error);
        dispatch(deleteError())
    }, [error]);

    const handleChange = (e) => {
        setUserForm({
            ...userForm,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if ([email, password].includes("")) {
            return toast.error("Todos los campos son obligatorios");
        }

        dispatch(login({ userForm, navigate, toast }));

        setUserForm({ email: "", password: "" })
        
    };
  return (
    <>
        <h1 className="text-black font-black text-6xl capitalize text-center">OneConsultants
        </h1>
        
        <form  
            className="my-10 bg-white shadow rounded-lg p-10"
            onSubmit={handleSubmit}
        >

            <div className="my-5">
                <label className="uppercase text-gray-900 block  text-xl font-bold"
                htmlFor="email
                ">Email</label>
                <input 
                    name="email"
                    type="email"
                    placeholder="Ingresa tu Email"
                    className="w-full mt-3 p-3 border rounded-xl bg-gray-200"
                    value={email}
                    onChange= {handleChange}
                     />

            </div>
            <div className="my-5">
                <label className="uppercase text-gray-900 block  text-xl font-bold"
                htmlFor="password
                ">Password</label>
                <input 
                    name="password"
                    type="password"
                    placeholder="Ingresa tu Contraseña"
                    className="w-full mt-3 p-3 border rounded-xl bg-gray-200"
                    value={password}  
                    onChange={handleChange}
                    />

            </div>
            <input 
            type="submit" 
            value="Iniciar Sesión"
            className="bg-gray-800 mb-5 w-full py-3 text-white uppercase font-bold rounded text-xl hover:cursor-pointer hover:bg-gray-600 transition-colors"/>
        </form>
        <nav className="text-center">
                <Link
                className="my-5 text-black font-bold uppercase text-sm"
                    to="/register"
                >¿No tienes una cuenta? Registrate</Link>
        </nav>
 
    </>
  )
    
}

export default Login