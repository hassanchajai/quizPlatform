import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { CardWithTable, StudentTable, StudentToolbar, StudentModal } from '../../../components'
import { connect } from 'react-redux'
import { CircularProgress } from '@mui/material'
import { api } from '../../../helpers'
import { getall_students } from './store'
const initialValue = {
    name: "",
    email: "",
    password: "",
    birthday: ""
}
const Student = ({ students, getAll }) => {
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [selectedItem, setSelectedItem] = useState(initialValue)
    const [isEdit, setIsEdit] = useState(false)
    const handleClickOpen = () => {
        setIsEdit(false)
        setSelectedItem(initialValue)
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpenEditForm = (item) => {
        setIsEdit(true)
        console.log(item);
        setSelectedItem({ ...item, password: "" })
        setOpen(prev => !prev)
    }
    const edit = (values) => {
        console.log(values);
    }
    const add = (values) => {
        console.log(values);
    }
    const load = async () => {
        await setLoading(true)
        try {
            const res = await api.get("/students");
            const data = await res.data
            await getAll(data)
        } catch (err) {
            alert(err.response.data.message)
        }
        await setLoading(false)

    }
    useEffect(() => {
        load()
    }, [])
    const renderStudentsContent = (<>
        <StudentToolbar handleOpen={handleClickOpen} />
        <CardWithTable>
            <StudentTable rows={students ? students : []} handleOpenEditForm={handleOpenEditForm} />
        </CardWithTable>
        <StudentModal open={open} handleClose={handleClose} isEdit={isEdit} submit={isEdit ? edit : add} initialValue={selectedItem} />
    </>
    )
    return (
        <>
            <Helmet>
                <title>Students</title>
            </Helmet>
            {loading ? <CircularProgress /> : renderStudentsContent}
        </>
    )
}
const mapStateToProps = (state) => ({
    ...state.students
})

const mapDispatchToProps = (dispatch) => ({
    getAll: (_) => dispatch(getall_students(_))
})

export default connect(mapStateToProps, mapDispatchToProps)(Student)
