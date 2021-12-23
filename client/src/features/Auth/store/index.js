export const LOGIN="AUTH_LOGIN"
export const login = (_) => ({type:LOGIN,payload:_})

const initialState = {
    user: null,
    isAuth: false
}
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
    switch (type) {
        case LOGIN:
            return { ...state, user:payload,isAuth:true }

        default:
            return state
    }
}
