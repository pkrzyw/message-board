import React from 'react'

export default function Reply({ reply }) {
    const date = new Date(+reply.created_on).toLocaleDateString()
    return (
        <div className="py-1">
            <p className="text-sm italic ">
                {reply.text}
            </p>
            <span className="text-xs text-gray-600 italic">
                {date}
            </span>
        </div>
    )
}
