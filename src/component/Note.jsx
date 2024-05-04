import React from 'react'

function Note(props) {
  return (
    <div className=' bg-gray-100 whitespace-pre-wrap rounded-lg shadow-lg w-3/12 m-5 rounded shadow-md p-2 pl-3 pt-2 box-border'>
        <div>
            {props.title}
        </div>
        <div>
            {props.content}
        </div>
    </div>
  )
}

export default Note
