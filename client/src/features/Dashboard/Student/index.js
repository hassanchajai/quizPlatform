import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { CardWithTable, StudentTable, StudentToolbar, StudentModal } from '../../../components'
import { connect } from 'react-redux'
import { CircularProgress } from '@mui/material'
import { api } from '../../../helpers'
import { add_student, delete_student, getall_students, update_student } from './store'
const initialValue = {
    name: "",
    email: "",
    password: "",
    birthday: ""
}
const endpoint = "/students/"
const filter = (name) => (item, i) => name === "" || item.name.includes(name)
const Student = ({ students, getAll, addStudent, deleteStudent, UpdateStudent }) => {
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [selectedItem, setSelectedItem] = useState(initialValue)
    const [isEdit, setIsEdit] = useState(false)
    const [selectedIndexItem, setselectedIndexItem] = useState(-1)
    const [name, setName] = useState("")
    const handleClickOpen = () => {
        setIsEdit(false)
        setSelectedItem(initialValue)
        setOpen(true)
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpenEditForm = (item,i) => {
        console.log(i);
        setIsEdit(true)
        setSelectedItem({ ...item, password: "" })
        setselectedIndexItem(i)
        setOpen(prev => !prev)
    }
    const edit = async (values) => {
        await api.put(endpoint + values.id, { ...values }).then(res => {
            alert("student updated succefuly")
            UpdateStudent({selectedIndexItem,values})
        }).catch(err => {
            alert(err)
        })
    }
    const add = async (values) => {
        await api.post(endpoint, { ...values }).then(res => {
            alert("student added succefuly")
            addStudent(res.data)
        }).catch(err => {
            alert("")
        })
    }
    const deleteStud = async (id) => {
        await api.delete(endpoint + id).then(res => {
            alert("student deleted succefuly")
            deleteStudent(id)
            load()
        }).catch(err => {
            alert("")
        })
    }
    const load = async () => {
        await setLoading(true)
        try {
            const res = await api.get(endpoint);
            const data = await res.data
            await getAll(data)
        } catch (err) {
            alert(err.response.data.message)
        }
        await setLoading(false)

    }
    useEffect(() => {
        load()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const renderStudentsContent = (<>
        <StudentToolbar handleOpen={handleClickOpen} onchange={e=>{setName(e.target.value)}}/>
        <CardWithTable>
            <StudentTable rows={students ? students.filter(filter(name)) : []} handleOpenEditForm={handleOpenEditForm} deleteStud={deleteStud} />
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
    getAll: (_) => dispatch(getall_students(_)),
    addStudent: (_) => dispatch(add_student(_)),
    UpdateStudent: (_) => dispatch(update_student(_)),
    deleteStudent: (_) => dispatch(delete_student(_))
})

export default connect(mapStateToProps, mapDispatchToProps)(Student)
