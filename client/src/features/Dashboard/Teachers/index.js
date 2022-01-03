import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { CardWithTable, TeacherTable, TeacherToolbar, TeacherModal } from '../../../components'
import { connect } from 'react-redux'
import { CircularProgress } from '@mui/material'
import { api } from '../../../helpers'
import { add_teacher, delete_teacher, getall_teachers, update_teacher } from './store'
import moment from 'moment'
const initialValue = {
    name: "",
    email: "",
    password: "",
    birthday:  moment(new Date()).format("yyyy-MM-DD")
}
const endpoint = "/Teachers/"
const filter = (name) => (item, i) => name === "" || item.name.toLowerCase().includes(name.toLowerCase())
const Teacher = ({ teachers, getAll, addTeacher, deleteTeacher, UpdateTeacher }) => {
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
    const handleOpenEditForm = (item, i) => {
        console.log(i);
        setIsEdit(true)
        setSelectedItem({ ...item, birthday: moment(item.birthday).format("yyyy-MM-DD"), password: "" })
        setselectedIndexItem(i)
        setOpen(prev => !prev)
    }
    const edit = async (values) => {
        await api.put(endpoint + values.id, { ...values }).then(res => {
            alert("Teacher updated succefuly")
            UpdateTeacher({ selectedIndexItem, values })
        }).catch(err => {
            alert(err)
        })
    }
    const add = async (values) => {
        await api.post(endpoint, { ...values }).then(res => {
            alert("Teacher added succefuly")
            // console.log(res.data);
            addTeacher(res.data)
        }).catch(err => {
            alert("")
        })
    }
    const deleteStud = async (id) => {
        await api.delete(endpoint + id).then(res => {
            alert("Teacher deleted succefuly")
            deleteTeacher(id)
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
            // console.log(data);
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
    const renderTeachersContent = (<>
        <TeacherToolbar handleOpen={handleClickOpen} onchange={e => { setName(e.target.value) }} />
        <CardWithTable>
            <TeacherTable rows={teachers ? teachers.filter(filter(name)) : []} handleOpenEditForm={handleOpenEditForm} deleteStud={deleteStud} />
        </CardWithTable>
        <TeacherModal open={open} handleClose={handleClose} isEdit={isEdit} submit={isEdit ? edit : add} initialValue={selectedItem} />
    </>
    )
    return (
        <>
            <Helmet>
                <title>Teachers</title>
            </Helmet>
            {loading ? <CircularProgress /> : renderTeachersContent}
        </>
    )
}
const mapStateToProps = (state) => ({
    ...state.teachers
})

const mapDispatchToProps = (dispatch) => ({
    getAll: (_) => dispatch(getall_teachers(_)),
    addTeacher: (_) => dispatch(add_teacher(_)),
    UpdateTeacher: (_) => dispatch(update_teacher(_)),
    deleteTeacher: (_) => dispatch(delete_teacher(_))
})

export default connect(mapStateToProps, mapDispatchToProps)(Teacher)
