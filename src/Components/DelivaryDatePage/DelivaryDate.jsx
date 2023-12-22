import { useState } from "react";
import { format } from "date-fns";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const DelivaryDate = () => {
  const [selected, setSelected] = useState();
  const navigate = useNavigate();

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = (
      <p>
        You picked <span className="text-red-500">{format(selected, "PP")}.</span>
      </p>
    );
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const selectDate = format(selected, "PP");
    navigate("/canva/painting-type/delivary-date/upload-image");
    localStorage.setItem("date", JSON.stringify(selectDate));
  };
  return (
    <section className="flex sm:flex-col justify-center items-center h-screen text-center">
      <p className="text-5xl mb-10">Please Select Your Delivary Date</p>
      <form className="drop-shadow-2xl bg-gray-50 p-4 rounded-lg text-black">
        <DayPicker mode="single" selected={selected} onSelect={setSelected} footer={footer} />
        <Button
          onClick={handleSubmit}
          disabled={selected === undefined}
          sx={{ mt: 1, mr: 1, width: "100%" }}
          type="submit"
          variant="outlined"
        >
          Submit
        </Button>
      </form>
    </section>
  );
};

export default DelivaryDate;
