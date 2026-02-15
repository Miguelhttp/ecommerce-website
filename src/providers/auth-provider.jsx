import { useState } from "react";
import { AuthContext } from "../context/auth-context";

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(
    localStorage.getItem("currentUserEmail")
      ? { email: localStorage.getItem("currentUserEmail") }
      : null,
  );

  const signUp = (email, password) => {
    // Qual a lógica aqui?
    // 1) A variável "users" é criada para armazenar os usuários cadastrados.
    // Ela é inicializada com os dados do localStorage, usando o método "getItem"
    // para recuperar os usuários armazenados no localStorage do navegador. Se não houver usuários armazenados,
    //  a variável é inicializada como um array vazio.
    const users = JSON.parse(localStorage.getItem("users")) || "[]";

    // 1.5) Verificar se o email já está cadastrado, usando o método "find" para procurar um usuário com o mesmo email na variável "users".
    if (users.find((user) => user.email === email)) {
      return { success: false, message: "Email already registered" };
    }

    // 2) criar um novo usuário com as informações fornecidas (email e senha)
    const newUser = {
      email,
      password,
    };
    // 3) adicionar o novo usuário à variável "users", usando o método "push" para adicionar o novo usuário ao array de usuários
    users.push(newUser);
    // 4) armazenar a variável "users" no localStorage, usando o método "setItem" para salvar os usuários cadastrados no localStorage do navegador
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUserEmail", email);
    setUser({ email });

    // 5) retornar um objeto indicando que o cadastro foi bem-sucedido, com uma mensagem de sucesso
    return { success: true, message: "User registered successfully" };
  };

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || "[]";
    // Verificar se já existe um usuário com o email e senha fornecidos,
    // usando o método "find" para procurar um usuário com o mesmo email e senha na variável "users".
    // Se um usuário for encontrado, o login é bem-sucedido e as informações do usuário são armazenadas no localStorage e no estado do componente.
    // Se nenhum usuário for encontrado, o login falha e uma mensagem de erro é retornada.
    const existingUser = users.find(
      (user) => user.email === email && user.password === password,
    );

    if (!existingUser) {
      return { success: false, message: "Invalid email or password" };
    }

    localStorage.setItem("currentUserEmail", email);
    setUser({ email });

    return { success: true, message: "Login successful" };
  };

  const logout = () => {
    localStorage.removeItem("currentUserEmail");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ signUp, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
