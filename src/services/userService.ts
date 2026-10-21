const API_URL = "http://localhost:8080/api/users";

const getAuthHeader = () => ({
  Authorization: `Bearer ${localStorage.getItem("token")}`,
});

export const getProfile = async () => {
  const response = await fetch(
    `${API_URL}/profile`,
    {
      headers: getAuthHeader(),
    }
  );

  return response.json();
};

export const updateProfile = async (formData:any) => {
  const response = await fetch(
    `${API_URL}/profile`,
    {
      method: "PUT",
      headers: getAuthHeader(),
      body: formData,
    }
  );

  return response.json();
};

export const getAllUsers = async () => {
  const response = await fetch(API_URL, {
    headers: getAuthHeader(),
  });

  return response.json();
};

export const deleteUser = async (id:number) => {
  const response = await fetch(
    `${API_URL}/${id}`,
    {
      method: "DELETE",
      headers: getAuthHeader(),
    }
  );

  return response.json();
};