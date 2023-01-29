import clienteAxios from "../config/axios";

clienteAxios.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const signIn = (userForm) =>
  clienteAxios.post("auth/local/login", userForm);

export const signUp = (userForm) => clienteAxios.post("api/users", userForm);
