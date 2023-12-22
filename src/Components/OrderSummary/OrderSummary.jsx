import Button from "@mui/material/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const OrderSummary = () => {
  const retrievedValues = {
    canvas: JSON.parse(localStorage.getItem("canvas")),
    painting: JSON.parse(localStorage.getItem("painting")),
    date: JSON.parse(localStorage.getItem("date")),
    image: JSON.parse(localStorage.getItem("image")),
  };
  const navigate = useNavigate();

  const handleSubmit = () => {
    axios
      .post("https://summary-server-v1.vercel.app/api/v1/summary/addsummary", retrievedValues, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        if (res.status === 200) {
          localStorage.clear();
          alert("Your Order is Accepted");
          navigate("/");
        } else {
          alert(res.status);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <section className="flex justify-center items-center h-screen">
      <div>
        <h1 className="text-cyan-600 font-bold text-3xl mb-5">Order Summary</h1>
        <div className="font-bold text-lg text-lime-600">
          <p>
            Canvas : <span className="font-normal ">{retrievedValues?.canvas}</span>
          </p>
          <p>
            Painting Type : <span className="font-normal ">{retrievedValues?.painting}</span>
          </p>
          <p>
            Delivary Date : <span className="font-normal ">{retrievedValues?.date}</span>
          </p>
          <p className="grid grid-cols-2 items-center">
            Image :{" "}
            <span className="font-normal ">
              <img width={50} src={retrievedValues.image} alt="" />
            </span>
          </p>
        </div>
        <Button
          onClick={handleSubmit}
          //   disabled={selected === undefined}
          sx={{ mt: 5, mr: 1 }}
          type="submit"
          variant="outlined"
        >
          Submit
        </Button>
      </div>
    </section>
  );
};

export default OrderSummary;
