import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { CircularProgress, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles(() => ({
    input: {
        width: 100 + "%",
        marginBottom: 10
    }
}));
export default function Modal({ open, handleClose, isEdit, submit, initialValue }) {
    const styles = useStyles()
    const text = isEdit ? "Edit" : "Add"
    const [values, setValues] = React.useState(initialValue)
    const [loading, setLoading] = React.useState(false)
    const handleOnChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    const handleOnClick = async (e) => {
        await setLoading(true);
        await submit(values)
        await setLoading(false)
    }
    React.useEffect(() => {
        setValues(initialValue)
    }, [initialValue])

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>{text} Student</DialogTitle>
            <DialogContent>
                <TextField id="standard-basic" name="name" value={values.name} onChange={handleOnChange} label="Name" variant="standard" className={styles.input} />
                <TextField id="standard-basic" name="email" value={values.email} label="Email" onChange={handleOnChange} variant="standard" className={styles.input} />
                <TextField id="standard-basic" name="password" value={values.password} label="Password" onChange={handleOnChange} variant="standard" className={styles.input} />
                <TextField id="standard-basic" name="birthday" type={"date"} onChange={handleOnChange} defaultValue={`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`} f label="Birthday" variant="standard" className={styles.input} />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleOnClick} disabled={loading}>{loading ? <CircularProgress /> : text}</Button>
            </DialogActions>
        </Dialog>


    );
}
 