import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { CardWithTable,SubjectTable,SubjectToolbar, SubjectModal } from '../../../components'
import { connect } from 'react-redux'
import { CircularProgress } from '@mui/material'
import { api } from '../../../helpers'
import { add, deletee, getall, update } from './store'
const initialValue = {
    title: "", description: "", published: "",parentId:null
}
const endpoint = "/subjects/"
const filter = (title) => (item, i) => title === "" || item.title.toLowerCase().includes(title.toLowerCase())

const Subject = ({ subjects, getAll, addSubject, deleteSubject, UpdateSubject }) => {
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
        setSelectedItem({ ...item })
        setselectedIndexItem(i)
        setOpen(prev => !prev)
    }
    const edit = async (values) => {
        await api.put(endpoint + values.id, { ...values }).then(res => {
            alert("Subject updated succefuly")
            UpdateSubject({ selectedIndexItem, values })
        }).catch(err => {
            alert(err)
        })
    }
    const add = async (values) => {
        await api.post(endpoint, { ...values }).then(res => {
            alert("Subject added succefuly")
            // console.log(res.data);
            addSubject(res.data)
        }).catch(err => {
            alert("")
        })
    }
    const deleteStud = async (id) => {
        await api.delete(endpoint + id).then(res => {
            alert("Subject deleted succefuly")
            deleteSubject(id)
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
    const renderSubjectsContent = (<>
        <SubjectToolbar handleOpen={handleClickOpen} onchange={e => { setName(e.target.value) }} />
        <CardWithTable>
            <SubjectTable rows={subjects ? subjects.filter(filter(name)) : []} handleOpenEditForm={handleOpenEditForm} deleteStud={deleteStud} />
        </CardWithTable>
        <SubjectModal parents={subjects ? subjects : []} open={open} handleClose={handleClose} isEdit={isEdit} submit={isEdit ? edit : add} initialValue={selectedItem} />
    </>
    )
    return (
        <>
            <Helmet>
                <title>Subjects</title>
            </Helmet>
            {loading ? <CircularProgress /> : renderSubjectsContent}
        </>
    )
}
const mapStateToProps = (state) => ({
    ...state.subjects
})

const mapDispatchToProps = (dispatch) => ({
    getAll: (_) => dispatch(getall(_)),
    addSubject: (_) => dispatch(add(_)),
    UpdateSubject: (_) => dispatch(update(_)),
    deleteSubject: (_) => dispatch(deletee(_))
})

export default connect(mapStateToProps, mapDispatchToProps)(Subject)
