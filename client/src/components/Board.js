import React from 'react'
import * as Yup from "yup"
import { Formik, Form, } from "formik"
import MyTextInput from './MyTextInput'
import Layout from './Layout'
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'

const NEW_BOARD = gql`
    mutation createBoard($name: String!) {
        createBoard(name: $name) {
            id
            name
            created_on
            bumped_on
            threads {
                text
            }
        }
    }
`

const validationSchema = Yup.object({
    name: Yup.string().max(50, "Character Limit: 50").required("Required")
})

export default function Board() {
    const [createBoard, { loading, error, data }] = useMutation(NEW_BOARD)

    return (
        <Layout>
            <h2>New board</h2>
            <div className="">
                <Formik
                    initialValues={{ name: "New Board" }}
                    validationSchema={validationSchema}
                    onSubmit={({ name }, { setSubmitting }) => {
                        createBoard({ variables: { name } })
                            .then(({ data }) => {

                                console.log("submitted", JSON.stringify(data.createBoard, null, 2))
                            })
                            .catch((error) => {
                                alert(error.message)
                            })
                            .finally(() => {
                                setSubmitting(false)
                            })
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
                                className={`bg-blue-600 rounded py-1 px-2 text-gray-100 ${isSubmitting}`}
                                type="submit"
                                disabled={isSubmitting}
                            >
                                Save
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>

        </Layout >
    )
}
