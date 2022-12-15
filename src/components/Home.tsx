import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="grid w-full">
      <div className="mt-8 text-center">
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/todo-list")}
        >
          TODO List
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/blog")}
        >
          Blog
        </Button>
      </div>
    </div>
  );
};

export default Home;
