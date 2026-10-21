const API_URL = "http://localhost:8080/api/producer";

const getAuthHeader = () => ({
  Authorization: `Bearer ${localStorage.getItem("token")}`,
});

export const getProducerDashboardStats =
  async () => {
    const response = await fetch(
      `${API_URL}/dashboard`,
      {
        headers: getAuthHeader(),
      }
    );

    return response.json();
  };

export const getInterestedScripts =
  async () => {
    const response = await fetch(
      `${API_URL}/interested-scripts`,
      {
        headers: getAuthHeader(),
      }
    );

    return response.json();
  };

export const addInterest = async (
    scriptId:any
  ) => {
    const response = await fetch(
      `${API_URL}/interest/${scriptId}`,
      {
        method: "POST",
        headers: getAuthHeader(),
      }
    );

    return response.json();
  };

export const removeInterest =
  async (scriptId:any) => {
    const response = await fetch(
      `${API_URL}/interest/${scriptId}`,
      {
        method: "DELETE",
        headers: getAuthHeader(),
      }
    );

    return response.json();
  };