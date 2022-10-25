import React, { useEffect, useState } from "react";
import axios from "axios";
function Register() {
  let [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
  });
  let [get, setGet] = useState([]);
  let handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:4000/postUser", input);
    alert("Registeration is done");
    setInput({
      username: "",
      email: "",
      password: "",
    });
  };
  let fetching = async () => {
    let fetche = await fetch("http://localhost:4000/getUsers");
    let res = await fetche.json();
    return res;
  };
  useEffect(() => {
    fetching().then((result) => setGet(result));
  }, []);
  console.log(get);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Username..."
          type="text"
          name="username"
          onChange={handleChange}
          value={input.username}
          id=""
        />
        <input
          placeholder="E-Mail..."
          type="email"
          name="email"
          onChange={handleChange}
          value={input.email}
          id=""
        />
        <input
          placeholder="Password..."
          type="password"
          name="password"
          onChange={handleChange}
          value={input.password}
          id=""
        />
        <button>Submit</button>
      </form>
      <div className="get">
        {get.map((item) => (
          <div className="item">
            <p>{item.username}</p>
            <p>{item.email}</p>
            <p>{item.password}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Register;
