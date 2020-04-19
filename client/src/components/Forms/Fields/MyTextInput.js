import React from "react";
import { useField } from "formik";

export default function MyTextInput({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className="flex items-center text-sm inline-flex">
      <input
        className={`appearance-none shadow-inner transition duration-500 ease-in-out ${
          meta.touched && meta.error ? "bg-red-200" : "bg-blue-100"
        } w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none`}
        {...field}
        {...props}
      />
    </div>
  );
}
