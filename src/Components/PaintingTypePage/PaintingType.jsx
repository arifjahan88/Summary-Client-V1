import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PaintingType = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleRadioChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    localStorage.setItem("painting", JSON.stringify(value));
    // console.log(value);
    navigate("/canva/painting-type/delivary-date");
  };
  return (
    <section className="flex justify-center items-center h-screen">
      <div>
        <h1 className="text-5xl">Painting Types</h1>
        <form>
          <FormControl sx={{ m: 3 }} variant="standard">
            <RadioGroup
              aria-labelledby="demo-error-radios"
              name="painting-type"
              value={value}
              onChange={handleRadioChange}
            >
              <FormControlLabel value="Anime" control={<Radio />} label="Anime." />
              <FormControlLabel value="Realistic" control={<Radio />} label="Realistic." />
              <FormControlLabel value="Potrait" control={<Radio />} label="Potrait." />
              <FormControlLabel value="Water Color" control={<Radio />} label="Water Color." />
            </RadioGroup>
            <Button
              onClick={handleSubmit}
              disabled={value === ""}
              sx={{ mt: 1, mr: 1 }}
              type="submit"
              variant="outlined"
            >
              Submit
            </Button>
          </FormControl>
        </form>
      </div>
    </section>
  );
};

export default PaintingType;
