import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    const data = { username, password };
    Axios.get("https://summary-server-v1.vercel.app/api/v1/getuser")
      .then((res) => {
        if (res.data.data.username === username && res.data.data.password === password) {
          alert("Login Successfull");
          localStorage.setItem("user", JSON.stringify(data));
          navigate("/admin-dashboard");
        } else {
          alert("Login Failed! Please give correct username and password");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="h-screen w-1/3 mx-auto pt-20">
      <div className="border p-5 rounded-lg">
        <h1 className="text-lime-600 text-3xl text-center pb-10">Please Log in to dashboard</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-5">
            <TextField
              required
              id="standard-basic"
              name="username"
              label="UserName"
              variant="standard"
            />
            <TextField
              required
              label="Password"
              name="password"
              type="password"
              variant="standard"
            />
            <Button
              //   ons={handleSubmit}
              //   disabled={selected === undefined}
              sx={{ mt: 1, mr: 1, width: "100%" }}
              type="submit"
              variant="outlined"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
