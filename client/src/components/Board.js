import React from 'react'
import * as Yup from "yup"
import { Formik, Form, } from "formik"
import MyTextInput from './MyTextInput'
import Layout from './Layout'

const validationSchema = Yup.object({
    name: Yup.string().max(50, "Character Limit: 50").required("Required")
})

export default function Board() {
    return (
        <Layout>
            <h2>New board</h2>
            <div className="">
                <Formik
                    initialValues={{ name: "" }}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting }) => {
                        console.log(values)
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2))
                            setSubmitting(false)
                        }, 400)
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <MyTextInput
                                label="Board name"
                                name="name"
                                type="text"
                                placeholder="board name"
                            />
                            <button
                                className="bg-blue-600 rounded py-1 px-2 text-gray-100"
                                type="submit"
                                disabled={isSubmitting}
                            >
                                Save
                        </button>
                        </Form>
                    )}
                </Formik>
            </div>

        </Layout>
    )
}
