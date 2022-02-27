import React from 'react'

export default function Temp() {
    const [text,setText] = React.useState('boom')
  return (
    <div>
       <button onClick={(e)=>setText('helo')}>helo</button>
       <button onClick={(e)=>setText('helo2')}>helo2</button>
       <button onClick={(e)=>setText('helo3')}>helo3</button>
       <button onClick={(e)=>setText('helo4')}>helo4</button>
       {/* <button>helo2</button>
       <button>helo3</button>
       <button>helo4</button> */}
       <div>{text}</div>

        {/* <input onClick={handleClick} type='disabled'>1gvhb</input>
            <input onClick={handleClick}>2gvhb</input>
            <input onClick={handleClick}>3gvhb</input>
            <input onClick={handleClick}>4gvhb</input>
            <input onClick={handleClick}>5gvhb</input> */}
    </div>
  )
}
