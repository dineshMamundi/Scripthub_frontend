const API_URL = "http://localhost:8080/api/auth";

export const loginUser = async (credentials:any) => {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    throw new Error("Login failed");
  }

  return response.json();
};

export const registerUser = async (userData:any) => {
  const response = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    throw new Error("Registration failed");
  }

  return response.json();
};

export const forgotPassword = async (email:any) => {
  const response = await fetch(`${API_URL}/forgot-password`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  return response.json();
};

export const verifyOtp = async (otp:any) => {
  const response = await fetch(`${API_URL}/verify-otp`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ otp }),
  });

  return response.json();
};

export const logoutUser = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};