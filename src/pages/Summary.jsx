import  { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'
import { deleteError, register, setLogout } from '../redux/features/authSlice';

import { toast } from 'react-toastify';

const Users = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const { loading, error } = useSelector((state) => ({ ...state.auth }));

    const {user} = useSelector(state=> state.auth)
    
    const {userForm} = user
   
    useEffect(() => {
        error && toast.error(error);
        dispatch(deleteError())
    }, [error]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(register({userForm,navigate, toast}));
   
};

  return (
    <div className="text-center">

      
        <h1 className="font-black text-3xl text-center mb-5">Resumen </h1>
        <p className="font-bold mb-3 text-gray-700 uppercase
            ">Nombres: {''} <span className="font-normal normal-case
            ">{user.userForm.nombre}</span></p>
        <p className="font-bold mb-3 text-gray-700 uppercase
            ">Apellidos: {''} <span className="font-normal normal-case
            ">{user.userForm.apellido}</span></p>
        <p className="font-bold mb-3 text-gray-700 uppercase
            ">Email: {''} <span className="font-normal normal-case
            ">{user.userForm.email}</span></p>
        <p className="font-bold mb-3 text-gray-700 uppercase
            ">Universidad: {''} <span className="font-normal normal-case
            ">{user.userForm.universidad}</span></p>
        <p className="font-bold mb-3 text-gray-700 uppercase
            ">Carrera: {''} <span className="font-normal normal-case
            ">{user.userForm.carrera}</span></p>
        <p className="font-bold mb-3 text-gray-700 uppercase
            ">Promedio: {''} <span className="font-normal normal-case
            ">{user.userForm.promedio}</span></p>
        <p className="font-bold mb-3 text-gray-700 uppercase
            ">Titulo Recibido: {''} <span className="font-normal normal-case
            ">{user.userForm.titulo}</span></p>
        
       
        
        
        <input 
            onClick={handleSubmit}
            type="submit" 
            value="Crear Cuenta"
            className="bg-gray-800 mb-5 w-full py-3 text-white uppercase font-bold rounded text-xl hover:cursor-pointer hover:bg-gray-600 transition-colors"/>
      
    </div>
  );
};

export default Users;