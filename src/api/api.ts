const BASE_URL = "http://localhost:8080/api";

export const get = async (endpoint: string) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`);
    if (!response.ok) {
      throw new Error("API call failed");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const post = async (endpoint: string, data: any) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("API call failed.");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const put = async (
  endpoint: string,
  id: number | undefined,
  data: any
) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw await response.json();
    }
    return await response.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const remove = async (endpoint: string, id: number) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("API call failed.");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
