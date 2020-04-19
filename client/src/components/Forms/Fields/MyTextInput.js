import React from 'react'
import { useField } from 'formik'

export default function MyTextInput({ label, ...props }) {
    const [field, meta] = useField(props)
    return (
        <div className="flex items-center justify-center ">
            <label
                className="text-right w-4/12 pr-2 transition duration-500 ease-in-out text-gray-700"
                htmlFor={props.id || props.name}
            >
                {label}
            </label>
            <div className="relative w-8/12 pb-6 xs:pt-2 md:pt-6">
                <input
                    className={`appearance-none bg-transparent border-b-2 transition duration-500 ease-in-out ${meta.touched && meta.error ? "border-red-500" : "border-teal-500"} w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none`}
                    {...field}
                    {...props}
                />
                <p className={`absolute left-0 bottom-1 text-red-500 italic text-xs ${meta.touched && meta.error ? "block" : "hidden"}`}>
                    {meta.error}
                </p>
            </div>
        </div>
    )
}
