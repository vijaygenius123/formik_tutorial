import React from "react";
import {FormikErrors, FormikValues, useFormik} from 'formik'

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
        validate: (values: FormikValues) => {
            const errors: FormikErrors<FormikValues> = {}

            if (!values.name) errors.name = 'Name is required'

            if (!values.email) errors.email = 'Email is required'
            else if (!/[a-z0-9_-]{3,}@[a-z0-9]{3,}\.[a-z]{2,}/ig.test(values.email)) errors.email = 'Not a valid Email'

            if (!values.channel) errors.channel = 'Channel is required'

            return errors
        }
    })


    return (
        <>
            <div>
                <form onSubmit={formik.handleSubmit}>

                    <div className='form-control'>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" onChange={formik.handleChange}
                               value={formik.values.name}/>
                        {formik.errors.name && <div className='error-text'>{formik.errors.name}</div>}
                    </div>

                    <div className='form-control'>
                        <label htmlFor="email">Email Address</label>
                        <input type="text" id="email" name="email" onChange={formik.handleChange}
                               value={formik.values.email}/>
                        {formik.errors.email && <div className='error-text'>{formik.errors.email}</div>}
                    </div>

                    <div className='form-control'>
                        <label htmlFor="channel">Channel</label>
                        <input type="text" id="channel" name="channel" onChange={formik.handleChange}
                               value={formik.values.channel}/>
                        {formik.errors.channel && <div className='error-text'>{formik.errors.channel}</div>}
                    </div>
                    <button className='btn btn-primary w-100' type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}

export default YoutubeForm
