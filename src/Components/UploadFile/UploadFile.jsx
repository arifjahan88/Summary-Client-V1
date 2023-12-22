import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UploadFile = () => {
  const imageHostkey = "ab72334c74dfbec61e75f37579ed1654";
  const { register, handleSubmit } = useForm();

  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file.type === "image/jpeg" && file.size <= 3 * 1024 * 1024) {
      setSelectedFile(file);
    } else {
      alert("Please upload a JPEG image with a maximum size of 3MB.");
    }
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("image", selectedFile);
    if (selectedFile !== null) {
      const url = `https://api.imgbb.com/1/upload?key=${imageHostkey}`;
      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((imgdata) => {
          if (imgdata.success === true) {
            localStorage.setItem("image", JSON.stringify(imgdata.data.image.url));
            alert("Image Uploaded Successfully");
            navigate("/canva/painting-type/delivary-date/upload-image/order-summary");
          } else {
            alert("Please Upload Image");
          }
        });
    } else {
      alert("Please Upload a Valid Image");
    }
  };

  return (
    <section className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit(handleUpload)}>
        <p className="text-4xl mb-10">Please Upload Your Inspiration File</p>
        <div className="relative w-64 h-40 rounded-lg bg-gray-200 hover:bg-gray-300 focus-within:ring-2 focus-within:ring-blue-500 ">
          <label htmlFor="image-upload" className="cursor-pointer">
            <div className="w-full h-full text-center">
              <div className="flex justify-center scale-150 pt-5">
                <svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                >
                  <path d="M11.492 10.172l-2.5 3.064-.737-.677 3.737-4.559 3.753 4.585-.753.665-2.5-3.076v7.826h-1v-7.828zm7.008 9.828h-13c-2.481 0-4.5-2.018-4.5-4.5 0-2.178 1.555-4.038 3.698-4.424l.779-.14.043-.789c.185-3.448 3.031-6.147 6.48-6.147 3.449 0 6.295 2.699 6.478 6.147l.044.789.78.14c2.142.386 3.698 2.246 3.698 4.424 0 2.482-2.019 4.5-4.5 4.5m.978-9.908c-.212-3.951-3.472-7.092-7.478-7.092s-7.267 3.141-7.479 7.092c-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.522-5.408" />
                </svg>
              </div>
              <p className="mt-5 text-xl">Upload Image</p>
            </div>
            <input
              type="file"
              id="image-upload"
              className="hidden"
              {...register("image", { required: "Image is required" })}
              accept="image/jpeg"
              onChange={handleFileChange}
            />
          </label>
          {selectedFile && (
            <div className="absolute inset-0 flex text-black items-center justify-center p-8 bg-white opacity-90 cursor-pointer">
              <span className="text-red-500 font-medium mt-10">{selectedFile.name}</span>
            </div>
          )}
        </div>

        <Button
          onClick={handleSubmit}
          disabled={selectedFile === null}
          sx={{ mt: 1, mr: 1 }}
          type="submit"
          variant="outlined"
        >
          Submit
        </Button>
      </form>
    </section>
  );
};

export default UploadFile;
