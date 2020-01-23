import React, { useState } from 'react'
import  { InjectedFormProps } from 'redux-form'
// import react-stepper-horizontal from 'react-stepper-horizontal'
import '../../../ambient'
import Stepper from 'react-stepper-horizontal'
import { Card } from 'reactstrap'

import AccountDetailForm from './AccountDetailForm'
import PersonalDetailForm from './PersonalDetailForm'




export const Form: React.FC<InjectedFormProps> = (props: any) =>{
    const [ page, setPage ] = React.useState(0)
    const steps = [{title:'Personal Details'}, {title:'Account Detail'}]

    const { onSubmit, isLoading } = props

    const nextPage = () =>{
        setPage(page + 1)
    }

    const previousPage = () =>{
        setPage(page - 1)
    }
    return(
        <div>
            <Card>
                <Stepper steps={steps} activeStep={page}/>
                {page === 0 && <PersonalDetailForm onSubmit={nextPage}/>}
                {page === 1 && (
                    <AccountDetailForm isLoading={isLoading} previousPage={previousPage}/>
                )}
            </Card>
        </div>
    )
}