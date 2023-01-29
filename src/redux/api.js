import clienteAxios from "../config/axios";

clienteAxios.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

// Auth
export const signIn = (userForm) =>
  clienteAxios.post("api/auth/login", userForm);
export const signUp = (userForm) => clienteAxios.post("api/usuarios", userForm);
