import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';


import {  DialogActions, DialogContent,  DialogTitle, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';



const useStyles = makeStyles(() => ({
    input: {
        width: 100 + "%",
        marginBottom: 10
    }
}));
export default function Modal({ open, handleClose, isEdit }) {
    const styles = useStyles()
    const text=isEdit ? "Edit" : "Add"
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>{text} Student</DialogTitle>
            <DialogContent>

                <TextField id="standard-basic" label="Name" variant="standard" className={styles.input} />
                <TextField id="standard-basic" label="Email" variant="standard" className={styles.input} />
                <TextField id="standard-basic" label="Password" variant="standard" className={styles.input} />
                <TextField id="standard-basic" type={"date"} defaultValue={`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`} f label="Birthday" variant="standard" className={styles.input} />

            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClose}>{text}</Button>
            </DialogActions>
        </Dialog>


    );
}
