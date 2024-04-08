import React, { useState, useEffect } from "react";
import { IUser } from "../../types/user";
import { Link } from "react-router-dom";

const Users: React.FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/users")
      .then(response => response.json())
      .then(data => {
        setUsers(data)})
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);
console.log(users)
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users?.map(user => (
          <li key={user.id}>
            <Link to={`/user/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
  
};

export default Users;