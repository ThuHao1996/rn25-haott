import React from "react";
import { useState, useEffect } from "react";
import "./ListUser.css";

interface IUser {
  id: string;
  name: string;
}

function ListUser() {
  const [users, setUsers] = useState<Array<IUser>>([]);

  useEffect(() => {
    const url = "https://63528f9fa9f3f34c37416bc2.mockapi.io/api/v1/users";
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        setUsers(json);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <>
      <div className="container">
        {users.map((user: IUser, i: number) => {
          return (
            <div key={i} className="table__list">
              <p className="table1 list1">{user.id}</p>
              <p className="table1 list2">{user.name}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ListUser;
