import {server} from '@/utils/host'

export async function UserProfileApi(token: any) {
  const url = `${server}/api/user/`;
  const response: Response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    if (response.status == 401) {
      return 'unauthorized'
    }
    throw new Error(`Response status : ${response.status}`);
  }
  const data = await response.json();
  return data;
}

export async function LoginUserApi(email: any, password: any) {
  const url = `${server}/api/token/`;
  const formData = JSON.stringify({ email, password });
  const res: Response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: formData,
  });
  if (!res.ok) {
    throw new Error(`Response status : ${res.status}`);
  }
  const data = await res.json();
  localStorage.setItem("token", data.access);
  localStorage.setItem("refresh", data.refresh);
  return res;
}

export async function RegisterUserApi(
  username: any,
  email: any,
  password: any
) {
  const url = `${server}/api/user/create/`;
  const formData = JSON.stringify({ username, email, password });
  const res: Response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: formData,
  });
  if (!res.ok) {
    throw new Error(`Response status : ${res.status}`);
  }
  return res;
}
