import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:5000"; // Flask backend

export const registerUser = async (email) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, { email });
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw new Error("Failed to register user");
  }
};

