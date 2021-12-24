import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
  } from "@mui/material";
  import * as React from "react";
  
  export default function Confirm({
    children,
    onConfirm,
    onCancel,
    open,
    handleClose,
    title,
  }) {
    return (
      <>
        <Dialog open={open} onClose={handleClose} fullwidth={true}  >
          {/* <DialogTitle>{title}</DialogTitle> */}
          {/* <DialogContentText>Here you can add  {title}</DialogContentText> */}
          <DialogContent>{children}</DialogContent>
          <DialogActions>
            <Button onClick={onCancel} >Cancel</Button>
            <Button onClick={onConfirm} variant="outlined" color="primary">Confirm</Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
  