import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CanvaPage = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleRadioChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("canvas", JSON.stringify(value));
    navigate("/canva/painting-type");
  };

  return (
    <section className="flex justify-center items-center h-screen">
      <div>
        <h1 className="text-5xl">Select Canvas</h1>
        <form>
          <FormControl sx={{ m: 3 }} variant="standard">
            <RadioGroup
              aria-labelledby="demo-error-radios"
              name="canvas"
              value={value}
              onChange={handleRadioChange}
            >
              <FormControlLabel value="Oil Paint" control={<Radio />} label="Oil Paint." />
              <FormControlLabel value="Paper Paint" control={<Radio />} label="Paper Paint." />
              <FormControlLabel value="Digital Paint" control={<Radio />} label="Digital Paint." />
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

export default CanvaPage;
