import React from "react";
import {FormikValues, Field, Formik, Form, ErrorMessage} from 'formik'
import * as Yup from 'yup'

const initialValues = {
    name: '',
    email: '',
    channel: ''
}

const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Not a valid Email').required('Required'),
    channel: Yup.string().required('Required')
})

const onSubmit = (values: FormikValues) => {
    console.log(values)
}


const YoutubeForm = () => {


    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            <Form>

                <div className='form-control'>
                    <label htmlFor="name">Name</label>
                    <Field type="text" id="name" name="name"/>
                    <ErrorMessage name={"name"}/>
                </div>

                <div className='form-control'>
                    <label htmlFor="email">Email Address</label>
                    <Field type="text" id="email" name="email"/>
                    <ErrorMessage name={"email"}/>
                </div>

                <div className='form-control'>
                    <label htmlFor="channel">Channel</label>
                    <Field type="text" id="channel" name="channel"/>
                    <ErrorMessage name={"channel"}/>
                </div>
                <button className='btn btn-primary w-100' type="submit">Submit</button>
            </Form>
        </Formik>
    )
}

export default YoutubeForm
