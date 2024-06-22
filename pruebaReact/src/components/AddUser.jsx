import React from 'react'

export const AddUser = ({accion}) => {
  return (
    <button className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center' onClick={accion}>Agregar</button>
  )
}

export default AddUser
