import React from 'react'

function Pills({label}) {
  return (
    <div className='px-3 py-1  text-purple-900 border border-purple-500 bg-purple-100  rounded-[1000px] cursor-pointer hover:bg-purple-900 hover:text-purple-100 justify-center items-center flex'>
        {label}
    </div>
  )
}
 
export default Pills