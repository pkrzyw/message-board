import React from "react";
import { useField } from "formik";

export default function MySelectField({ label, ...props }) {
  const [field, meta] = useField(props);
  const { value } = meta;
  return (
    <div>
      <label className="" htmlFor={props.name}>
        {label}
      </label>
      <div>
        <select {...field} value={props.value}>
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
