import React from 'react'
import * as Yup from "yup"
import { Formik, Form, } from "formik"
import MyTextInput from './MyTextInput'
import Layout from './Layout'
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'
// import { useNavigate } from 'react-router-dom'
import { BOARDS } from './Header'

const NEW_BOARD = gql`
    mutation createBoard($name: String!) {
        createBoard(name: $name) {
            id
            name
        }
    }
`

const validationSchema = Yup.object({
    name: Yup.string().max(50, "Character Limit: 50").required("Required")
})

export default function Board() {
    const [createBoard] = useMutation(NEW_BOARD, {
        update(cache, { data: { createBoard } }) {
            const { allBoards } = cache.readQuery({ query: BOARDS })
            cache.writeQuery({
                query: BOARDS,
                data: { allBoards: allBoards.push({ ...createBoard }) }
            })
            console.log(allBoards)
        }
    });
    // let navigate = useNavigate()
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
                                // navigate(`/board/${name}`, { state: { boardId: data.createBoard.id } })
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
