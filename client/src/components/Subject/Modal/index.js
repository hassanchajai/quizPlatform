import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { Checkbox, CircularProgress, DialogActions, DialogContent, DialogTitle, FormControlLabel, List, ListItem, ListItemText,TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const useStyles = makeStyles(() => ({
    input: {
        width: 100 + "%",
        marginBottom: 10
    }
}));
export default function Modal({ open, handleClose, isEdit, submit, initialValue, parents }) {
    // console.log(initialValue);
    const styles = useStyles()
    const text = isEdit ? "Edit" : "Add"
    const [values, setValues] = React.useState(initialValue)
    const [name, setName] = React.useState("")
    const [loading, setLoading] = React.useState(false)
    const handleOnChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    const handleOnChangeDescription = (e) => {
        setValues({
            ...values,
            "description": e
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
            <DialogTitle>{text} Subject</DialogTitle>
            <DialogContent>
                <TextField id="standard-basic" name="title" value={values.title} onChange={handleOnChange} label="Title" variant="standard" className={styles.input} />

                <ReactQuill theme="snow" value={values.description} onChange={handleOnChangeDescription} name="description" />
                <FormControlLabel control={<Checkbox value={values.published} onClick={e=>setValues({
                    ...values,
                    published:!values.published
                })} />} label="Published" />

                <TextField id="standard-basic" name="parent" onChange={e => { setName(e.target.value) }} value={name} label="Search parent" variant="standard" className={styles.input} />

          
                {name && <List>
                    {
                        parents.filter(item => name === "" || item.title.toLowerCase().trim().includes(name.toLowerCase().trim())).map(item => (<ListItem button key={item.id}>
                            <ListItemText >
                                {item.title}
                            </ListItemText>
                        </ListItem>))
                    }


                </List>}
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleOnClick} disabled={loading}>{loading ? <CircularProgress /> : text}</Button>
            </DialogActions>
        </Dialog>


    );
}
