import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Detail = () => {
  const [user, setUser] = useState({});
  let { id } = useParams();

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) =>
      setUser(res.data)
    );
  }, [id]);


  return (

    <div key={user.id}>
      <img src={`/images/${user.id}.png`} alt={user.title} />
      <h1>{user.title}</h1>
      <h3>{user.body}</h3>
    </div>
  );
};
