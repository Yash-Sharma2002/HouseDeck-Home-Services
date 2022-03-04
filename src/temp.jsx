import React from 'react'

export default function Temp() {
    const [text,setText] = React.useState(true)
    const handleClick=()=>{
      setText(!text)
    }
  return (
    <div>
<p onClick={handleClick}>vfhjihfvbjidehfvbjdb</p>
<p style={{display:text?"none":'block',
  
  transition: "all .2s ease-in-out" ,
  }}>hvsvfdhjkjds</p>
{/* {text?:null} */}
    </div>
  )
}
