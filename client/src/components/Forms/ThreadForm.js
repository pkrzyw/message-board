import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import MySelectField from "./Fields/MySelectField";
import { BOARDS } from "../Header";
import { useQuery, useMutation } from "@apollo/react-hooks";
import MyTextInput from "./Fields/MyTextInput";
import { gql } from "apollo-boost";
import { THREADS } from "../Board";

const validationSchema = Yup.object({
  boardId: Yup.string().max(50, "Error").required("required"),
  text: Yup.string().max(200, "Char limit 200").required("required"),
  password: Yup.string().max(20, "Char limit 20").required("required"),
});

const POST_THREAD = gql`
  mutation postThread($boardId: ID!, $text: String!, $password: String!) {
    postThread(boardId: $boardId, text: $text, delete_password: $password) {
      id
      board {
        name
      }
      text
      created_on
      replies {
        id
        text
        created_on
      }
    }
  }
`;

export default function ThreadForm({ parentBoard }) {
  const { loading, error, data: boards } = useQuery(BOARDS);
  const [postThread] = useMutation(POST_THREAD, {
    update(cache, { data: { postThread } }) {
      const { allThreads } = cache.readQuery({
        query: THREADS,
        variables: { boardId: parentBoard },
      });
      const updatedThreads = [...allThreads, { ...postThread }];
      cache.writeQuery({
        query: THREADS,
        data: { allThreads: updatedThreads },
        variables: { boardId: parentBoard },
      });
    },
  });
  if (loading) return <>Fetching...</>;
  if (error) return <>Error while fetching</>;
  return (
    <Formik
      initialValues={{ boardId: parentBoard, text: "", password: "" }}
      validationSchema={validationSchema}
      enableReinitialize
      onSubmit={({ boardId, text, password }, actions) => {
        postThread({
          variables: {
            boardId,
            text,
            password,
          },
        })
          .then((data) => {})
          .catch((err) => console.log(err))
          .finally(() => {
            actions.setSubmitting(false);
            actions.resetForm();
          });
      }}
    >
      {({ isSubmitting, errors }) => (
        <Form>
          <MySelectField
            label="Board"
            name="boardId"
            type="select"
            options={boards.allBoards}
          />
          <MyTextInput
            label="New Thread"
            name="text"
            type="text"
            placeholder="Thread text"
          />
          <MyTextInput
            label="Delete Password"
            name="password"
            type="password"
            placeholder=""
            autoComplete="true"
          />
          <button
            className={`bg-blue-600 rounded py-1 px-2 text-gray-100 ${isSubmitting}`}
            type="submit"
            disabled={isSubmitting}
          >
            Save
          </button>
          <pre>{JSON.stringify(errors, null, 2)}</pre>
        </Form>
      )}
    </Formik>
  );
}
