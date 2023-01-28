import {  useEffect, useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'



const Register = () => {


    const [userForm, setUserForm] = useState({
        nombre: "",
        apellido: "",
        email: "",
        password: "",
        confirmpassword: "",
    })
    const { nombre, apellido,email, password, confirmpassword } = userForm;
    const handleChange = (e) => {
        setUserForm({
            ...userForm,
            [e.target.name]: e.target.value,
        });
    };
  return (
    <>
    <h1 className="text-black font-black text-6xl capitalize text-center">Informacion Personal
    </h1>
    
    <form  
        className="my-10 bg-white shadow rounded-lg p-10"
        // onSubmit={handleSubmit}
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
        <nav className="text-center">
            <Link
            className="my-5 text-black font-bold uppercase text-sm"
                to="/create-account"
            >Siguiente</Link>
    </nav>
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