import React, { useState } from "react";
import axios from "axios";

const UserForm = ({ onUserAdded }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/users", {
        name,
        email,
        password,
      });
      onUserAdded(response.data);
      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Ошибка при создании пользователя:", error);
    }
  };

  return (
    <form className="p-3 border rounded shadow" onSubmit={handleSubmit}>
      <input
        className="form-control mb-2"
        type="text"
        placeholder="Имя"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        className="form-control mb-2"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        className="form-control mb-2"
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button className="btn btn-primary w-100" type="submit">
        Создать пользователя
      </button>
    </form>
  );
};

export default UserForm;
