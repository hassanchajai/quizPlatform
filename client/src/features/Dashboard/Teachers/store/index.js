export const GET_ALL_TEACHERS = "GET_ALL_TEACHERS"
export const getall_teachers = (_) => ({ type: GET_ALL_TEACHERS, payload: _ })

export const ADD_TEACHER = "ADD_TEACHER"
export const add_teacher = (_) => ({ type: ADD_TEACHER, payload: _ })

export const UPDATE_TEACHER = "UPDATE_TEACHER"
export const update_teacher = (_) => ({ type: UPDATE_TEACHER, payload: _ })

export const DELETE_TEACHER = "DELETE_TEACHER"
export const delete_teacher = (_) => ({ type: DELETE_TEACHER, payload: _ })

const initialState = {
    teachers: null,
    teacher: null,
}
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ALL_TEACHERS:
            {
                // console.log(payload);
                return { ...state, teachers: payload }}
        case ADD_TEACHER: {
            return { ...state, teachers: [...state.teachers, payload] }
        }
        case UPDATE_TEACHER: {
            const newState=state.teachers
            const {selectedIndexItem,values}=payload
            newState[selectedIndexItem]=values
            return { ...state, teachers:newState }
        }
        case DELETE_TEACHER: {
            console.log(payload);
            return { ...state, teachers:state.teachers.filter(item=>item.id!==payload.id) }
        }
        default:
            return state
    }
}
