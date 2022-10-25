import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface IUser {
  id: string;
  name: string;
}

function ListPage() {
  const navigate = useNavigate();
  const [listUser, setListUser] = useState<Array<IUser>>([]);

  useEffect(() => {
    handleGetUsers();
  }, []);

  const gotoDetail = (id: string) => {
    console.log(id);
    navigate("detail/" + id);
  };

  const handleGetUsers = () => {
    const url = "https://63528f9fa9f3f34c37416bc2.mockapi.io/api/v1/users";
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        // Xử lý kết quả JSON ở đây
        console.log(json);
        setListUser(json);
      })
      .catch((error) => {
        // Nếu có lỗi
        console.error(error);
      });
  };

  const handleDelete = (id: string) => {
    const url =
      "https://63528f9fa9f3f34c37416bc2.mockapi.io/api/v1/users/" + id;
    fetch(url, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => {
        // Xử lý kết quả JSON ở đây
        console.log(json);
        handleGetUsers();
      })
      .catch((error) => {
        // Nếu có lỗi
        console.error(error);
      });
  };

  const handlePut = (id: string | undefined) => {
    const url =
      "https://63528f9fa9f3f34c37416bc2.mockapi.io/api/v1/users/" + id;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(listUser),
    })
      .then((response) => response.json())
      .then((json) => {
        // Xử lý kết quả JSON ở đây
        console.log(json);
        handleGetUsers();
      })
      .catch((error) => {
        // Nếu có lỗi
        console.error(error);
      });
  };

  return (
    <>
      <table className="table table-bordered table-dark">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {listUser?.map((user: IUser) => {
            return (
              <tr key={`item-user-${user?.id}`}>
                <th scope="row" onClick={() => navigate(`/${user?.id}`)}>
                  {user?.id}
                </th>
                <td onClick={() => navigate(`/${user?.name}`)}>{user?.name}</td>
                <td>
                  <button
                    style={{ marginLeft: "50px" }}
                    className="btn btn-secondary"
                    onClick={() => gotoDetail(user?.id)}
                  >
                    Detail
                  </button>
                  <button
                    style={{ marginLeft: "20px" }}
                    className="btn btn-danger"
                    onClick={() => handleDelete(user?.id)}
                  >
                    Delete
                  </button>
                  <button
                    style={{ marginLeft: "20px" }}
                    className="btn btn-success"
                    onClick={() => handlePut(user?.id)}
                  >
                    Put
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default ListPage;
