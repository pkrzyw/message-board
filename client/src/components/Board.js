import React from 'react'
import * as Yup from "yup"
import { Formik, Form } from "formik"

const validationSchema = Yup.object({
    name: Yup.string().max(50, "Character Limit: 50").required("Required")
})

export default function Board() {
    return (
        <div>
            <h2>New board</h2>
        </div>
    )
}
