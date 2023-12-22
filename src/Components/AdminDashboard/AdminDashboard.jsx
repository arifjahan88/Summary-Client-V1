import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import Axios from "axios";
import DashboardDialog from "./DashboardDialog";

const AdminDashboard = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectId, setSelectid] = useState("");

  const handleClickOpen = (id) => {
    setSelectid(id);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    Axios.get("https://summary-server-v1.vercel.app/api/v1/summary/getsummary")
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <section className="container mx-auto h-screen flex justify-center items-center">
      {" "}
      <TableContainer component={Paper}>
        <p className="text-center text-2xl font-bold text-lime-500">Project Summary</p>
        <Table sx={{ minWidth: 650, fontWeight: "bold" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                Project Name
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                Deadline
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {data.map((item, idx) => (
              <TableRow key={item._id}>
                <TableCell align="center">Project {idx + 1}</TableCell>
                <TableCell align="center">{item.date}</TableCell>
                <TableCell align="center">
                  <div
                    onClick={() => handleClickOpen(item._id)}
                    className="flex justify-center opacity-50 hover:opacity-100 cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12.015 7c4.751 0 8.063 3.012 9.504 4.636-1.401 1.837-4.713 5.364-9.504 5.364-4.42 0-7.93-3.536-9.478-5.407 1.493-1.647 4.817-4.593 9.478-4.593zm0-2c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 3c-2.21 0-4 1.791-4 4s1.79 4 4 4c2.209 0 4-1.791 4-4s-1.791-4-4-4zm-.004 3.999c-.564.564-1.479.564-2.044 0s-.565-1.48 0-2.044c.564-.564 1.479-.564 2.044 0s.565 1.479 0 2.044z" />
                    </svg>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <DashboardDialog data={data} selectId={selectId} open={open} handleClose={handleClose} />
    </section>
  );
};

export default AdminDashboard;
