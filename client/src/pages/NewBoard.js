import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import MyTextInput from "../components/MyTextInput";
import Layout from "../layouts/Layout";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";
import { BOARDS } from "../components/Header";

const NEW_BOARD = gql`
  mutation createBoard($name: String!) {
    createBoard(name: $name) {
      id
      name
    }
  }
`;

const validationSchema = Yup.object({
  name: Yup.string().max(50, "Character Limit: 50").required("Required"),
});

export default function NewBoard() {
  const [createBoard] = useMutation(NEW_BOARD, {
    update(cache, { data: { createBoard } }) {
      const { allBoards } = cache.readQuery({ query: BOARDS });
      const updatedBoards = [...allBoards, { ...createBoard }];
      cache.writeQuery({ query: BOARDS, data: { allBoards: updatedBoards } });
    },
  });
  return (
    <Layout>
      <h2>New board</h2>
      <div className="">
        <Formik
          initialValues={{ name: "New Board" }}
          validationSchema={validationSchema}
          onSubmit={({ name }, { setSubmitting }) => {
            createBoard({ variables: { name } })
              .then(({ data }) => {})
              .catch((error) => {
                alert(error.message);
              })
              .finally(() => {
                setSubmitting(false);
              });
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
    </Layout>
  );
}
