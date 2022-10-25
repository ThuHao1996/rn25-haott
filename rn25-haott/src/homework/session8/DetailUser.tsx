import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

interface IUser {
  id: string;
  name: string;
}

function Detail() {
  let params = useParams();
  const [user, setUser] = useState<IUser>({
    id: "",
    name: "",
  });

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    const url =
      "https://63528f9fa9f3f34c37416bc2.mockapi.io/api/v1/users/" + params.id;
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        // Xử lý kết quả JSON ở đây
        console.log(json);
        setUser(json);
      })
      .catch((error) => {
        // Nếu có lỗi
        console.error(error);
      });
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "#b2d7d5",
          textAlign: "center",
          padding: "130px",
          fontSize: "30px",
          color: "red",
        }}
      >
        <p>ID User: {user.id}</p>
        <p>Name User: {user.name}</p>
      </div>
    </>
  );
}

export default Detail;
