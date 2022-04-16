import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ConfirmTxModal = (props) => {
  const tx = useSelector((state) => state.transaction.transaction);

  const submitForm = () => {
    const txs = JSON.parse(localStorage.getItem("txs")) || [];
    txs.push(tx);
    localStorage.setItem("txs", JSON.stringify(txs));

    Swal.fire({
      text: "Aviso creado exitosamente",
      icon: "success",
      showConfirmButton: false,
      timer: 1500,
    });
    setTimeout(() => {
      window.location.reload();
    }, 1600);
  };

  return (
    <div>
      <Modal open={props.openModal}>
        <Box sx={style}>
          <Typography variant="h4" align="center">
            Confirmar datos
          </Typography>
          <Box sx={{ mt: 3 }}>
            <Typography variant="h6">Direccion</Typography>
            <Typography variant="subtitle2">{tx?.destino || ""}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              marginTop: "5px",
              justifyContent: "space-around",
            }}
          >
            <Box>
              <Typography variant="h6">Monto</Typography>
              <Typography variant="subtitle2">{tx?.currency || ""}</Typography>
            </Box>
            <Box>
              <Typography variant="h6">Monto</Typography>
              <Typography variant="subtitle2">{tx?.monto || ""}</Typography>
            </Box>
            <Box>
              <Typography variant="h6">Comision</Typography>
              <Typography variant="subtitle2">{tx?.comision || ""}</Typography>
            </Box>
          </Box>
          <Button
            variant="contained"
            color="success"
            sx={{ mt: "40px", left: "80%" }}
            type="submit"
            endIcon={<DoneIcon />}
            onClick={submitForm}
          >
            Aceptar
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default ConfirmTxModal;
