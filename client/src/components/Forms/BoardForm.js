import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import MyTextInput from "./Fields/MyTextInput";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";
import { BOARDS } from "../Header";

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

export default function BoardForm() {
  const [createBoard] = useMutation(NEW_BOARD, {
    update(cache, { data: { createBoard } }) {
      const { allBoards } = cache.readQuery({ query: BOARDS });
      const updatedBoards = [...allBoards, { ...createBoard }];
      cache.writeQuery({ query: BOARDS, data: { allBoards: updatedBoards } });
    },
  });
  return (
    <Formik
      initialValues={{ name: "" }}
      validationSchema={validationSchema}
      onSubmit={({ name }, { setSubmitting, resetForm }) => {
        createBoard({ variables: { name } })
          .then(({ data }) => {})
          .catch((error) => {
            alert(error.message);
          })
          .finally(() => {
            setSubmitting(false);
            resetForm();
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
  );
}
