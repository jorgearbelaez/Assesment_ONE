import {  useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { Link, useNavigate } from 'react-router-dom'
import { deleteError, setLogout, setUser } from '../redux/features/authSlice';

import { toast } from 'react-toastify';


const Register = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loading, error } = useSelector((state) => ({ ...state.auth }));


    const [userForm, setUserForm] = useState({
        nombre: "",
        apellido: "",
        email: "",
        password: "",
        confirmpassword: "",
    })
   
    const { nombre, apellido,email, password, confirmpassword } = userForm;
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

        if ([nombre, apellido, email, password, confirmpassword].includes("")) {
            return toast.error("Todos los campos son obligatorios");
        }

        if (password !== confirmpassword) {
            return toast.error("Las contraseñas no coinciden");
        }

        if (password.length < 6) {
            return toast.error("La contraseña debe ser mayor a 6 caracteres");
        }

        dispatch(setUser({ userForm }));
        navigate("/create-account")
    };



  return (
    <>
    <h1 className="text-black font-black text-6xl capitalize text-center">Informacion Personal
    </h1>
    
    <form  
        className="my-10 bg-white shadow rounded-lg p-10"
        onSubmit={handleSubmit}
    >

        <div className="my-5">
            <label className="uppercase text-gray-900 block  text-xl font-bold"
            htmlFor="nombre"
            >Nombre</label>
            <input 
                name="nombre"
                type="text"
                placeholder="Ingresa tu nombre"
                className="w-full mt-3 p-3 border rounded-xl bg-gray-200"
                value={nombre}
                onChange= {handleChange}
                 />

        </div>
        <div className="my-5">
            <label className="uppercase text-gray-900 block  text-xl font-bold"
            htmlFor="apellido"
            >Apellido</label>
            <input 
                name="apellido"
                type="text"
                placeholder="Ingresa tu apellido"
                className="w-full mt-3 p-3 border rounded-xl bg-gray-200"
                value={apellido}
                onChange= {handleChange}
                 />

        </div>
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
            ">Contraseña</label>
            <input 
                name="password"
                type="password"
                placeholder="Ingresa tu Contraseña"
                className="w-full mt-3 p-3 border rounded-xl bg-gray-200"
                value={password}  
                onChange={handleChange}
                />

        </div>
        <div className="my-5">
            <label className="uppercase text-gray-900 block  text-xl font-bold"
            htmlFor="password
            ">Confirmar Contraseña</label>
            <input 
                name="confirmpassword"
                type="password"
                placeholder="Ingresa tu Contraseña"
                className="w-full mt-3 p-3 border rounded-xl bg-gray-200"
                value={confirmpassword}  
                onChange={handleChange}
                />

        </div>
        <input 
            type="submit" 
            value="guardar info"
            className="bg-gray-800 mb-5 w-full py-3 text-white uppercase font-bold rounded text-xl hover:cursor-pointer hover:bg-gray-600 transition-colors"/>
    
    </form>
    <nav className="text-center">
            <Link
            className="my-5 text-black font-bold uppercase text-sm"
                to="/"
            >¿Ya tienes una cuenta? Inicia Sesión</Link>
    </nav>

</>
  )
}

export default Register