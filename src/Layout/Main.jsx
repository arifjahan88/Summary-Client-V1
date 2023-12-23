import { Link, Outlet } from "react-router-dom";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const handlelogout = () => {
    localStorage.removeItem("user");
    alert("Logout Successfull");
    navigate("/");
  };
  return (
    <div className="relative">
      <div className="absolute right-2 top-2">
        <Link to="/">
          <Button sx={{ mr: 1 }} variant="contained">
            Home
          </Button>
        </Link>
        {user?.username && user?.password ? (
          <>
            <Button onClick={handlelogout} variant="contained">
              LogOut
            </Button>
          </>
        ) : (
          <>
            <Link to="/login">
              <Button variant="contained">Login</Button>
            </Link>
          </>
        )}
      </div>
      <Outlet />
    </div>
  );
};

export default Main;
