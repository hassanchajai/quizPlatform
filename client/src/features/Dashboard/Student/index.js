import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { CardWithTable, StudentTable, StudentToolbar, StudentModal } from '../../../components'
const Student = () => {
    const [open, setOpen] = React.useState(false);
    const [selectedItem, setSelectedItem] = useState(null)
    const [isEdit, setIsEdit] = useState(false)
    const handleClickOpen = () => {
        setIsEdit(false)
        setSelectedItem(null)
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpenEditForm = (item) => {
        setIsEdit(true)
        setSelectedItem(item)
        setOpen(prev => !prev)
    }
    const edit = (values) => {
        console.log(values);
    }
    const add = (values) => {
        console.log(values);
    }
    return (
        <>
            <Helmet>
                <title>Students</title>
            </Helmet>
            <StudentToolbar handleOpen={handleClickOpen} />
            <CardWithTable>
                <StudentTable handleOpenEditForm={handleOpenEditForm} />
            </CardWithTable>
            <StudentModal open={open} handleClose={handleClose} isEdit={isEdit} edit={edit} add={add} />
        </>
    )
}

export default Student
