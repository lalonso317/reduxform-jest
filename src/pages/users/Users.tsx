import React, { useState } from 'react'
import { connect } from 'react-redux'
import Form from './Form'
import { addUser } from '../../redux/actions/user/add'
import { reset } from 'redux-form'

export const User: React.FC = (props:any) => {
    const  [ isLoading, setLoading ] = React.useState(false)


    const handleSubmit = ( values: any) =>{
        props.dispatch(addUser(values))
        props.dispatch(reset('user'))
    }
    return (
        <div>
            <Form onSubmit={handleSubmit} isLoading={isLoading} {...props}/>
        </div>
    )
}

export default connect(null)(User)
