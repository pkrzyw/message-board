import React from 'react'
import Reply from './Reply'

export default function Thread({ thread }) {
    const date = new Date(+thread.created_on).toLocaleDateString()
    return (
        <div className="mb-4 px-4 pt-4 mx-0 bg-gray-300 shadow">
            <div className="py-2  border-b-2 border-gray-600">
                <span className="bg-blue-800 text-md font-normal shadow py-1 px-4 text-gray-200">
                    Board: {thread.board}
                </span>
                <span className="float-right text-md ">{date}</span>
            </div>
            <div className="py-2">

                <p className="text-md font-normal">
                    {thread.text}
                </p>
                {thread.replies.length > 0
                    ? <div className="p-2 bg-gray-200 shadow-inner rounded-md w-6/12">
                        {thread.replies.map(reply => (
                            <Reply key={reply.id} reply={reply} />
                        ))}
                    </div>
                    : null

                }
            </div>
        </div>
    )
}
