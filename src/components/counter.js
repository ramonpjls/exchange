import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";
import Transaction from "../components/tx";
// import customAxios from "../adapters/axiosInstance";

const money = { value: "10", rate: "BTC" };

// const axiosRates = customAxios("https://bitcoinfees.earn.com/api/v1/fees/");

const Counter = () => {
  const [display, setDisplay] = useState("none");
  // const res = axiosRates.get("recommended");

  // console.log(res);

  const hiddeOrNot = () => {
    if (display === "none") {
      setDisplay("flex");
    } else {
      setDisplay("none");
    }
  };

  return (
    <div>
      <Card
        sx={{
          margin: "10px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Typography variant="h4">Balance</Typography>
          <Typography variant="body1">
            {money.value}
            {money.rate}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={hiddeOrNot}>
            Send
          </Button>
        </CardActions>
      </Card>

      <Transaction isDisplay={display} />
    </div>
  );
};

export default Counter;
