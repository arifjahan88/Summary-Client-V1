import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const PrivateRoutes = ({ children }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user?.username || !user?.password) {
      navigate("/login");
    }
  }, [navigate]);

  return children;
};
