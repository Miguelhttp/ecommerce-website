import { createContext } from "react";

// Contexto de autenticação
// Porque deixar "null" como valor inicial?
// Porque o usuário não está autenticado inicialmente, então o valor é nulo.
// Quando o usuário fizer login, esse valor será atualizado para conter as informações do usuário autenticado.
export const AuthContext = createContext(null);
