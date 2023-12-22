import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen gap-5">
      <Link to={"/canva"}>
        <Button sx={{ fontSize: 20 }} size="large" variant="outlined">
          Place Order
        </Button>
      </Link>
      <Link to={"/admin-dashboard"}>
        <Button sx={{ fontSize: 20 }} size="large" variant="outlined">
          Admin Dashboard
        </Button>
      </Link>
    </div>
  );
};

export default Home;
