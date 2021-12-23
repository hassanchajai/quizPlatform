import React from 'react'
import { connect } from 'react-redux'
import { SignIn } from '../../components'
import { login } from './store'

export const Auth = ({ login_success, user }) => {
    return (
        <SignIn login_success={login_success} />
    )
}

const mapStateToProps = (state) => ({
    ...state.auth
})

const mapDispatchToProps = (dispatch) => ({
    login_success: _ => dispatch(login(_))
})

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
