export const GET_ALL_STUDENTS="GET_ALL_STUDENTS"
export const getall_students = (_) => ({type:GET_ALL_STUDENTS,payload:_})

const initialState = {
    students: null,
    student: null,
}
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ALL_STUDENTS:
            return { ...state, students:payload }

        default:
            return state
    }
}
