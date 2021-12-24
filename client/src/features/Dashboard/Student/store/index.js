export const GET_ALL_STUDENTS = "GET_ALL_STUDENTS"
export const getall_students = (_) => ({ type: GET_ALL_STUDENTS, payload: _ })

export const ADD_STUDENT = "ADD_STUDENT"
export const add_student = (_) => ({ type: ADD_STUDENT, payload: _ })

export const UPDATE_STUDENT = "UPDATE_STUDENT"
export const update_student = (_) => ({ type: UPDATE_STUDENT, payload: _ })

export const DELETE_STUDENT = "DELETE_STUDENT"
export const delete_student = (_) => ({ type: DELETE_STUDENT, payload: _ })

const initialState = {
    students: null,
    student: null,
}
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ALL_STUDENTS:
            return { ...state, students: payload }
        case ADD_STUDENT: {
            return { ...state, students: [...state.students, payload] }
        }
        case UPDATE_STUDENT: {
            const newState=state.students
            const {selectedIndexItem,values}=payload
            newState[selectedIndexItem]=values
            return { ...state, students:newState }
        }
        case DELETE_STUDENT: {
            console.log(payload);
            return { ...state, students:state.students.filter(item=>item.id!==payload.id) }
        }
        default:
            return state
    }
}
