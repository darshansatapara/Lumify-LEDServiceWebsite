// UserContext.js

import React, { createContext, useContext, useState } from "react";
import client from "../axios/axiosFile";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const fetchUserDetails = async (email) => {
    try {
      const token = localStorage.getItem("token");
      const response = await client.get(`/api/user/${email}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(response.data);
      localStorage.setItem("user", JSON.stringify(response.data));
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  const logOut = () => {
    setUser(null); // Clear user state
    localStorage.removeItem("user"); // Remove user details from localStorage
    localStorage.removeItem("token"); // Remove token from localStorage
  };

  return (
    <UserContext.Provider value={{ user, fetchUserDetails,logOut }}>
      {children}
    </UserContext.Provider>
  );
};

export const useAuth = () => useContext(UserContext);
