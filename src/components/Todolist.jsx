import React, { useState } from 'react'
import useStore from '../store/store1'
import { toast } from 'react-toastify'
import { FaRegEdit, FaTrash } from "react-icons/fa"

const Todolist = () => {
  const [txt, setTxt] = useState('')
  const { arr, addArr, delArr, confirmArr, startEdit, saveEdit, editIndex, editTxt } = useStore((state) => ({
    arr: state.arr,
    addArr: state.addArr,
    delArr: state.delArr,
    confirmArr: state.confirmArr,
    startEdit: state.startEdit,
    saveEdit: state.saveEdit,
    editIndex: state.editIndex,
    editTxt: state.editTxt
  }))

  const hdlChangeTxt = (e) => {
    setTxt(e.target.value)
  }

  const hdlAdd = () => {
    if (txt.trim()) {
      addArr(txt)
      setTxt('')
    }
  }

  const hdlDel = (id) => {
    delArr(id)
  }

  const hdlEditChange = (e) => {
    useStore.setState({ editTxt: e.target.value })
  }

  const hdlSaveEdit = () => {
    if (editTxt.trim()) {
      saveEdit(editIndex, editTxt);
      toast.success('Edit Success')
    }
  }

  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-yellow-300 to-amber-400 min-h-screen p-10">
      <h1 className='text-6xl font-bold text-white mb-10 drop-shadow-lg'>Todo List</h1>
      <div className='flex w-full max-w-lg justify-center mb-5 gap-3'>
        <input
          type="text"
          value={txt}
          onChange={hdlChangeTxt}
          placeholder="Enter Todo"
          className='border border-gray-300 rounded-lg h-12 w-full px-4 focus:outline-none focus:ring-2 focus:ring-amber-500'/>
        <button onClick={hdlAdd} className='bg-amber-500 text-white rounded-lg h-12 px-6 shadow-md hover:bg-amber-600 transition-all'> Add </button>
      </div>
      <div className='flex w-full justify-center'>
        <ul className='w-full max-w-lg'>
          {arr.map((item, index) => (
            <li key={item.id} className='flex justify-between items-center bg-white rounded-lg shadow-lg p-4 mb-4 hover:shadow-xl transition-all'>
              {editIndex === index 
              ? (
                <>
                  <input
                    type="text"
                    value={editTxt}
                    onChange={hdlEditChange}
                    className='border border-gray-300 rounded-lg h-10 px-3 w-full mr-3 focus:outline-none focus:ring-2 focus:ring-amber-500'/>
                  <button onClick={hdlSaveEdit} className='bg-green-500 text-white rounded-lg px-4 py-2 shadow-md hover:bg-green-600 transition-all'> Confirm </button>
                </>
                ) 
              : (
                <>
                  <span className={`flex-1 ${item.isCompleted ? 'line-through text-gray-400' : 'text-gray-800'} text-lg cursor-pointer`} onClick={() => confirmArr(index)}> {item.title} </span>
                  <div className='flex gap-2'>
                    <button onClick={() => startEdit(index)} className='bg-blue-500 text-white rounded-lg px-4 py-2 shadow-md hover:bg-blue-600 transition-all'><FaRegEdit /></button> {/*Edit*/} 
                    <button onClick={() => hdlDel(item.id)} className='bg-red-500 text-white rounded-lg px-4 py-2 shadow-md hover:bg-red-600 transition-all'> <FaTrash /> </button>
                  </div>
                </>
                )
              }
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Todolist

