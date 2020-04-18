import React from "react";
import { useField } from "formik";

export default function MySelectField({ label, ...props }) {
  const [field, meta] = useField(props);
  const { value } = meta;
  return (
    <div className="flex items-center justify-center">
      <label
        className="text-right w-4/12 pr-2 transition duration-500 ease-in-out text-gray-700"
        htmlFor={props.name}
      >
        {label}
      </label>
      <div>
        <select {...field} value={value}>
          {props.options.map((board) => (
            <option key={board.id} value={board.id}>
              {board.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
