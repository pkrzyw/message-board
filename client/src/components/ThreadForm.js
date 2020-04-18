import React from 'react'
import * as Yup from "yup";
import { Formik, Form } from "formik";
import MySelectField from './MySelectField';

const validationSchema = Yup.object({
    board: Yup.string()
        .max(50, "Error")
        .required("required"),
})

export default function ThreadForm() {
    return (
        <Formik
            initialValues={{ board: "" }}
            validationSchema={validationSchema}
            onSubmit={({ board }, { setSubmitting }) => {
                setSubmitting(false)
                console.log("submitted")
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <MySelectField
                        label="Board"
                        name="board"
                        type="select"
                    />
                    <button
                        type='submit'
                        disabled={isSubmitting}
                    >
                        Save
                    </button>
                </Form>
            )}
        </Formik>
    )
}
