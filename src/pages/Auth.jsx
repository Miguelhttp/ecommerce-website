import { useContext } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/auth-context";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const [mode, setMode] = useState("signup");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const { signUp, user, logout, login } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // O que acontece quando o formulário é submetido?
  // Quando o formulário é submetido, a função "onSubmit" é chamada com os dados do formulário. Dentro dessa função,
  // a função "signUp" do contexto de autenticação é chamada, passando o email e a senha fornecidos pelo usuário para criar uma nova conta.
  const onSubmit = (data) => {
    setError(null); // Limpa erros anteriores
    let result;

    if (mode === "signup") {
      result = signUp(data.email, data.password);
    } else {
      result = login(data.email, data.password);
    }

    if (result.success) {
      navigate("/");
    } else {
      setError(result.error);
    }

    console.log(result);
  };

  return (
    <div className="page">
      <div className="container">
        <div className="auth-container">
          {user && <p>User logged in: {user.email}</p>}
          <button onClick={() => logout()}>Logout</button>
          <h1 className="page-title">
            {mode === "signup" ? "Sign Up" : "Login"}
          </h1>

          <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
            {error && <p className="error-message">{error}</p>}
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input
                className="form-input"
                type="email"
                id="email"
                name="email"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <span className="form-error">{errors.email.message}</span>
              )}
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="password">
                Password
              </label>
              <input
                className="form-input"
                type="password"
                id="password"
                name="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                  maxLength: {
                    value: 8,
                    message: "Password must be less than 8 characters",
                  },
                })}
              />
              {errors.password && (
                <span className="form-error">{errors.password.message}</span>
              )}
            </div>

            <button className="btn btn-primary btn-large" type="submit">
              {mode === "signup" ? "Sign Up" : "Login"}
            </button>
          </form>

          <div className="auth-switch">
            {mode === "signup" ? (
              <p>
                Already have an account?{" "}
                <span className="auth-link" onClick={() => setMode("login")}>
                  Login
                </span>
              </p>
            ) : (
              <p>
                Don't have an account?{" "}
                <span className="auth-link" onClick={() => setMode("signup")}>
                  Sign Up
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
