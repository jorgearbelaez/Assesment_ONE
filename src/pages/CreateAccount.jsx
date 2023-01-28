import {  useEffect, useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'

const CreateAccount = () => {
  
    const [userForm, setUserForm] = useState({
        carrera: "",
        promedio:"",
        titulo:""
      
    })
    const { universidad, carrera, promedio,titulo } = userForm;
    const handleChange = (e) => {
        setUserForm({
            ...userForm,
            [e.target.name]: e.target.value,
        });
    };
  return (
    <>
    <h1 className="text-black font-black text-6xl capitalize text-center">Informacion Acádemica
    </h1>
    
    <form  
        className="my-10 bg-white shadow rounded-lg p-10"
        // onSubmit={handleSubmit}
    >

        <div className="my-5">
            <label className="uppercase text-gray-900 block  text-xl font-bold"
            htmlFor="universidad"
            >Universidad</label>
            <input 
                name="universidad"
                type="text"
                placeholder="Ingresa el nombre de la institucion universitaria"
                className="w-full mt-3 p-3 border rounded-xl bg-gray-200"
                value={universidad}
                onChange= {handleChange}
                 />

        </div>
        <div className="my-5">
            <label className="uppercase text-gray-900 block  text-xl font-bold"
            htmlFor="carrera"
            >Carrera</label>
            <input 
                name="carrera"
                type="text"
                placeholder="Ingresa el nombre de tu carrera universitaria"
                className="w-full mt-3 p-3 border rounded-xl bg-gray-200"
                value={carrera}
                onChange= {handleChange}
                 />

        </div>
        <div className="my-5">
            <label className="uppercase text-gray-900 block  text-xl font-bold"
            htmlFor="promedio"
            >Promedio</label>
            <input 
                name="promedio"
                type="text"
                placeholder="Ingresa tu promedio de calificaciones"
                className="w-full mt-3 p-3 border rounded-xl bg-gray-200"
                value={promedio}
                onChange= {handleChange}
                 />

        </div>
        <div className="my-5">
            <label className="uppercase text-gray-900 block  text-xl font-bold"
            htmlFor="titulo
            ">Titulo Recibido</label>
            <input 
                name="titulo"
                type="text"
                placeholder="Ingresa el nombre del titulo"
                className="w-full mt-3 p-3 border rounded-xl bg-gray-200"
                value={titulo}
                onChange= {handleChange}
                 />

        </div>
           
        <input 
            type="submit" 
            value="Crear Cuenta"
            className="bg-gray-800 mb-5 w-full py-3 text-white uppercase font-bold rounded text-xl hover:cursor-pointer hover:bg-gray-600 transition-colors"/>
    </form>
  

</>
  )
}

export default CreateAccount