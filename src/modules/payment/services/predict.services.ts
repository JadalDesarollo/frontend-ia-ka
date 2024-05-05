import { ValueFormPredict } from "../predict.interface";

export const predictForm = async (formValue: ValueFormPredict) => {
  const response = await fetch("http://127.0.0.1:5000/predict", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formValue),
  });
  const data = await response.json();
  return data
};

export const registerFetch = async (username: string, email: string, password: string) => {
  const response = await fetch("http://127.0.0.1:5000/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      email,
      password
    }
    ),
  });
  const data = await response.json();

  return data
}

export const login = async (email: string, password: string) => {
  const response = await fetch("http://127.0.0.1:5000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password
    }
    ),
  });
  const data = await response.json();

  return data
}
export const refresh = async (token: string) => {
  const response = await fetch("http://127.0.0.1:5000/refresh_token", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });
  const data = await response.json();

  return data
}
