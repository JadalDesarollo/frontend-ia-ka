const baseUrl = import.meta.env.VITE_BASE_URL;
export const fetchSinToken = async (
  endpoint: string,
  method = "GET",
  data?: any
) => {
  try {
    const url = `${baseUrl}/${endpoint}`;
    if (method === "GET") {
      const resp = await fetch(url);
      return await resp.json();
    } else {
      const resp = await fetch(url, {
        method,
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      return await resp.json();
    }
  } catch (error) {
    return;
  }
};
export const fetchConToken = async (
  endpoint: string,
  method = "GET",
  data?: any
) => {
  try {
    const url = `${baseUrl}/${endpoint}`;
    const token = localStorage.getItem("token") || "";

    if (method === "GET") {
      const resp = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return await resp.json();
    } else {
      const resp = await fetch(url, {
        method,
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });
      return await resp.json();
    }
  } catch (error) {
    return;
  }
};
