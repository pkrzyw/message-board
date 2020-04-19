import React from "react";
import { useField } from "formik";

export default function MySelectField({ label, ...props }) {
  const [field, meta] = useField(props);
  const { value } = meta;
  return (
    <div className="flex items-center text-sm inline-flex">
      <select
        {...field}
        value={value}
        className={`shadow-inner transition duration-500 ease-in-out ${
          meta.touched && meta.error ? "bg-red-200" : "bg-blue-100"
        } w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none`}
      >
        {props.options.map((board) => (
          <option key={board.id} value={board.id}>
            {board.name}
          </option>
        ))}
      </select>
    </div>
  );
}
