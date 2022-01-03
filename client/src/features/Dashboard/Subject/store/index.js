export const GET_ALL_SUBJECTS = "GET_ALL_SUBJECTS"
export const getall = (_) => ({ type: GET_ALL_SUBJECTS, payload: _ })

export const ADD_SUBJECT = "ADD_SUBJECT"
export const add = (_) => ({ type: ADD_SUBJECT, payload: _ })

export const UPDATE_SUBJECT = "UPDATE_SUBJECT"
export const update = (_) => ({ type: UPDATE_SUBJECT, payload: _ })

export const DELETE_SUBJECT = "DELETE_SUBJECT"
export const deletee = (_) => ({ type: DELETE_SUBJECT, payload: _ })

const initialState = {
    subjects: null,
    subject: null,
}
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ALL_SUBJECTS:
            {
                console.log(payload);
                // console.log(payload);
                return { ...state, subjects: payload }}
        case ADD_SUBJECT: {
            return { ...state, subjects: [...state.subjects, payload] }
        }
        case UPDATE_SUBJECT: {
            const newState=state.subjects
            const {selectedIndexItem,values}=payload
            newState[selectedIndexItem]=values
            return { ...state, subjects:newState }
        }
        case DELETE_SUBJECT: {
            console.log(payload);
            return { ...state, subjects:state.subjects.filter(item=>item.id!==payload.id) }
        }
        default:
            return state
    }
}
