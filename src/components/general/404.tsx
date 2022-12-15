import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const FourOhFour = () => {
  const navigate = useNavigate();
  return (
    <div className="grid w-full h-screen -mt-16 place-content-center">
      <p className="mt-8 text-center text-neutral-600">Page Not Found</p>
      <div className="mt-8 text-center">
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/")}
        >
          Return to Home Screen
        </Button>
      </div>
    </div>
  );
};

export default FourOhFour;
