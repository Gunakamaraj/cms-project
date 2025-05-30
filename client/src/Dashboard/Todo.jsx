import React, { useState } from 'react'

function Card({ index, value, handleEdit, handleDelete }) {
    return (
        <li className="flex items-center justify-between bg-white rounded-lg shadow p-4 mb-2 hover:shadow-md transition">
            <span className="text-gray-800 text-base">{value}</span>
            <div className="flex space-x-2">
                <button
                    onClick={() => handleEdit(index)}
                    className="p-2 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-600 hover:text-blue-800 transition cursor-pointer"
                    aria-label="Edit"
                    title="Edit"
                >
                    ✏️
                </button>
                <button
                    onClick={() => handleDelete(index)}
                    className="p-2 rounded-full bg-red-50 hover:bg-red-100 text-red-600 hover:text-red-800 transition cursor-pointer"
                    aria-label="Delete"
                    title="Delete"
                >
                    🗑️
                </button>
            </div>
        </li>
    );
}

export default function Todo() {
    const [text, setText] = useState('');
    const [arr, setArr] = useState([]);

    function handleadd(e) {
        e.preventDefault();
        if (text.trim() === '') return;
        setArr([...arr, text]);
        setText('');
    }
    function handleEdit(idx) {
        const val = prompt('Edit your task:', arr[idx]);
        if (val != null && val.trim() !== '') {
            arr[idx] = val;
            setArr([...arr]);
        }
    }
    function handleDelete(index) {
        const narr = arr.filter((_, idx) => idx !== index);
        setArr([...narr]);
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] bg-gray-50 p-6 rounded-xl shadow-lg max-w-md mx-auto mt-10">
            <h1 className="text-3xl font-extrabold text-blue-700 mb-6 tracking-tight">ToDo List</h1>
            <form className="flex w-full gap-2 mb-6" onSubmit={handleadd}>
                <input
                    type="text"
                    placeholder="Enter your task"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
                />
                <button
                    type="submit"
                    className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-semibold shadow hover:from-blue-700 hover:to-cyan-600 transition-all duration-200 cursor-pointer"
                >
                    Add
                </button>
            </form>
            <ol className="w-full list-decimal pl-6 space-y-2">
                {arr.length === 0 ? (
                    <p className="text-gray-400 text-center italic">No tasks yet. Add your first task!</p>
                ) : (
                    arr.map((val, idx) => (
                        <Card key={idx} index={idx} value={val} handleEdit={handleEdit} handleDelete={handleDelete} />
                    ))
                )}
            </ol>
        </div>
    )
}
