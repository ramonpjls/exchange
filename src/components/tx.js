import React, { useState } from "react";
import {
  Card,
  CardContent,
  Button,
  TextField,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";
import ConfirmTxModal from "./modals/confirmTxModal";
import { Fees } from "../mocks/recommended";
import { Currency } from "../mocks/currency";
import { useDispatch } from "react-redux";
import { types } from "../types/types";

const Transaction = (props) => {
  const [amout, setAmout] = useState("");
  const [destination, setDestination] = useState("");
  const [open, setOpen] = useState(false);
  const [fee, setFee] = useState("");
  const [currencyValue, setCurrencyValue] = useState("");

  const dispatch = useDispatch();

  const handleClose = () => setOpen(false);

  const data = {
    monto: amout,
    destino: destination,
    comision: fee,
    currency: currencyValue,
  };

  const submitForm = (e) => {
    e.preventDefault();

    console.log(data);

    dispatch({
      type: types.TRANSACTION,
      payload: data,
    });

    setOpen(true);
  };

  const res = props.isDisplay;

  return (
    <div onClick={handleClose}>
      <Card
        sx={{
          minWidth: 275,
          display: res,
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <CardContent sx={{ width: "500px" }}>
          <form id="sendForm" onSubmit={submitForm}>
            <Typography>Moneda</Typography>
            <Select
              id="currency"
              fullWidth
              size="small"
              value={currencyValue}
              onChange={(e) => setCurrencyValue(e.target.value)}
            >
              {Currency.map((c) => (
                <MenuItem key={c.currency} value={(c.symbol, c.currency)}>
                  <strong>{c.symbol} </strong>
                  {c.name}
                </MenuItem>
              ))}
            </Select>
            <Typography>Monto</Typography>
            <TextField
              value={amout}
              fullWidth
              size="small"
              type="number"
              onChange={(e) => setAmout(e.target.value)}
            />
            <Typography>Destino</Typography>
            <TextField
              value={destination}
              fullWidth
              size="small"
              onChange={(e) => setDestination(e.target.value)}
            />
            <Typography>Comisión</Typography>
            <Select
              id="comision"
              fullWidth
              size="small"
              value={fee}
              onChange={(e) => setFee(e.target.value)}
            >
              {Fees.map((f) => (
                <MenuItem key={f.name} value={f.name}>
                  {f.name}
                </MenuItem>
              ))}
            </Select>
          </form>

          <Button
            sx={{ margin: "10px" }}
            form="sendForm"
            variant="contained"
            type="submit"
            endIcon={<SendIcon />}
          >
            enviar
          </Button>
        </CardContent>
      </Card>
      <div>
        {open ? (
          <CloseIcon
            sx={{
              position: "fixed",
              top: "350px",
              left: "66%",
              zIndex: "1",
              fontSize: "20px",
              transform: "translate(-50%, -50%)",
              color: "black",
              border: "2px solid black",
              borderRadius: "100px",
            }}
            onClick={handleClose}
          />
        ) : (
          ""
        )}
        <ConfirmTxModal openModal={open} />
      </div>
    </div>
  );
};

export default Transaction;
