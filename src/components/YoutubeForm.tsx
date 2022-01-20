import React from "react";
import { FormikValues, useFormik} from 'formik'
import * as Yup from 'yup'

const YoutubeForm = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            channel: ''
        },
        onSubmit: (values: FormikValues) => {
            console.log(values)
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Required'),
            email: Yup.string().email('Not a valid Email').required('Required'),
            channel: Yup.string().required('Required')
        })
    })


    return (
        <>
            <div>
                <form onSubmit={formik.handleSubmit}>

                    <div className='form-control'>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" {...formik.getFieldProps('name')}
                        />
                        {formik.errors.name && <div className='error-text'>{formik.errors.name}</div>}
                    </div>

                    <div className='form-control'>
                        <label htmlFor="email">Email Address</label>
                        <input type="text" id="email"  {...formik.getFieldProps('email')}/>
                        {formik.errors.email && <div className='error-text'>{formik.errors.email}</div>}
                    </div>

                    <div className='form-control'>
                        <label htmlFor="channel">Channel</label>
                        <input type="text" id="channel" {...formik.getFieldProps('channel')}/>
                        {formik.errors.channel && <div className='error-text'>{formik.errors.channel}</div>}
                    </div>
                    <button className='btn btn-primary w-100' type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}

export default YoutubeForm
