import React from 'react'
import useGetDateTable from "../hooks/useGetDateTable";
import { MdKeyboardArrowDown } from "react-icons/md";
const UserList = () => {

  const { paginado, setLimite, limite, pagina, setPagina, loading } =

    useGetDateTable();


  return (
    <div className='py-8'>

        <h2 className="text-2xl font-bold text-center mb-6">Usuarios</h2>
        <div className="my-2 flex justify-between mx-4">
          <div className="flex sm:flex-row flex-col">
            <div className="flex flex-row mb-1 sm:mb-0 ">
              <div className="relative">
                <select
                  value={limite}
                  onChange={(e) => setLimite(e.target.value)}
                  className="appearance-none h-full rounded-l border block a w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-900"
                >
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={15}>15</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <MdKeyboardArrowDown className="fill-current h-4 w-4" />
                </div>
              </div>
              <div className="relative">
                <select className="h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
                  <option>Todos</option>
                  <option>Activo</option>
                  <option>Inactivo</option>
                
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <MdKeyboardArrowDown className="fill-current h-4 w-4" />
                </div>
              
              </div>
            </div>
            <div className="block relative">
              <p className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 fill-current text-gray-500"
                >
                  <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"></path>
                </svg>
              </p>
              <input
                placeholder="Buscar"
                className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
              />
            </div>
          </div>
        </div>
        <div className="-mx-4 px-4 sm:px-8 py-4 overflow-x-auto">

          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">

            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-300 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Usuario
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-300 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Rol
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Universidad
                  </th>
                  
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <>
                    <tr>
                      <td></td>
                      <td></td>
                      
                    </tr>
                  </>
                ) : paginado?.resultados?.length <= 0 ? (
                  <tr>
                    <td></td>
                    <td></td>
                    <td className="h-48 flex items-center">
                      <p>No hay usuarios registrados</p>
                    </td>
                  </tr>
                ) : (
                  paginado?.resultados?.map((user) => (
                    <tr key={user._id}>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div className="flex items-center">
                          
                          <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap text-center">
                              {user.nombre} {user.apellido}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          {user.rol}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          {user.email}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          {user.universidad}
                        </p>
                      </td>                   
                    </tr>
                  ))
                )}
              </tbody>
            </table>

          </div>
        </div>
    </div>
  )
}

export default UserList