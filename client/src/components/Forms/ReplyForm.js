import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import MyTextInput from "./Fields/MyTextInput";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const POST_REPLY = gql`
  mutation postReply($threadId: ID!, $text: String!, $password: String!) {
    postReply(threadId: $threadId, text: $text, delete_password: $password) {
      id
      board {
        name
      }
      text
      reported
      created_on
      bumped_on
      replies {
        id
        text
        reported
        created_on
        bumped_on
      }
    }
  }
`;

const validationSchema = Yup.object({
  text: Yup.string().max(50, "Character Limit: 50").required("Required"),
  password: Yup.string().max(50, "Character Limit: 20").required("Required"),
});

export default function ReplyForm({ threadId }) {
  const [postReply] = useMutation(POST_REPLY);
  return (
    <Formik
      initialValues={{ text: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={({ text, password }, { setSubmitting, resetForm }) => {
        postReply({ variables: { threadId, text, password } })
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
            label="Reply"
            name="text"
            type="text"
            placeholder="post a reply..."
          />
          <MyTextInput
            label="Password"
            name="password"
            type="password"
            placeholder="password"
            autoComplete="true"
          />
          <button className={``} type="submit" disabled={isSubmitting}>
            Save
          </button>
        </Form>
      )}
    </Formik>
  );
}
