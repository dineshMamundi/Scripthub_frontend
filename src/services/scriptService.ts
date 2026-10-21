const API_URL = "http://localhost:8080/api/scripts";

const getAuthHeader = () => ({
  Authorization: `Bearer ${localStorage.getItem("token")}`,
});

export const getAllScripts = async () => {
  const response = await fetch(API_URL);

  return response.json();
};

export const getScriptById = async (id:any) => {
  const response = await fetch(`${API_URL}/${id}`);

  return response.json();
};

export const getMyScripts = async () => {
  const response = await fetch(`${API_URL}/my-scripts`, {
    headers: getAuthHeader(),
  });

  return response.json();
};

export const createScript = async (formData:any) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: getAuthHeader(),
    body: formData,
  });

  return response.json();
};

export const updateScript = async (id:any, formData:any) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: getAuthHeader(),
    body: formData,
  });

  return response.json();
};

export const deleteScript = async (id:any) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
    headers: getAuthHeader(),
  });

  return response.json();
};

export const likeScript = async (id:any) => {
  const response = await fetch(`${API_URL}/${id}/like`, {
    method: "POST",
    headers: getAuthHeader(),
  });

  return response.json();
};

export const showInterest = async (id:any) => {
  const response = await fetch(`${API_URL}/${id}/interest`, {
    method: "POST",
    headers: getAuthHeader(),
  });

  return response.json();
};

export const getDashboardStats = async () => {
  const response = await fetch(
    `${API_URL}/dashboard/stats`,
    {
      headers: getAuthHeader(),
    }
  );

  return response.json();
};