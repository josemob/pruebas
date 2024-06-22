import React, { useState } from "react";
import AddUser from "./AddUser";

export const UserList = () => {
  const [userList, setUserList] = useState([
    { nombre: "jose", status: true },
    { nombre: "maria", status: false },
  ]);

  const [newUser, setNewUser] = useState("");
  const [newUserStatus, setNewUserStatus] = useState(true); // Default new user status

  const [listaActiva, setListaActiva] = useState(false); // Filter state

  const addNewUser = () => {
    setNewUser(""); // Clear input after adding user
  };

  const addUserN = () => {
    setUserList((prevList) => [
      ...prevList,
      { nombre: newUser, status: newUserStatus },
    ]);
    addNewUser(); // Clear input after adding user
  };

  const filteredUserList = listaActiva
    ? userList.filter((user) => user.status) // Filter for active users
    : userList.filter((user) => !user.status); // Filter for inactive users

  return (
    <div className="listaCaja">
      <div className="boxUno">
        <div className="nuevoUsuario">
          <h5>Nombre de usuario:</h5>
          <input
          className="inpUser shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="textInput"
            value={newUser}
            onChange={(event) => setNewUser(event.target.value)}
            placeholder="Enter Name" // Add placeholder for clarity
          />
        </div>
        <div className="botoness">
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" onClick={() => setNewUserStatus(true)}>True</button>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" onClick={() => setNewUserStatus(false)}>False</button>
        </div>
        <AddUser accion={addUserN} />
      </div>

      <div className="boxDos">
        {filteredUserList.map((user) => (
          <p key={user.nombre}>{user.nombre}</p>
        ))}
      </div>
    </div>
  );
};

export default UserList;
