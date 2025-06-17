//import React from 'react';//
import { IoMdRemoveCircleOutline } from "react-icons/io";
//import { FaCheck } from "react-icons/fa";//
import { FaRegEdit } from "react-icons/fa";

function Todo() {
  return (
    <div style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between",border:"1px solid lightgrey", padding:"16px", borderRadius:"5px", marginTop:"25px"}}>
        <div>Deneme Todo</div>
        <div>
            <IoMdRemoveCircleOutline style={{marginRight:"8px"}} className='icons'/>
            <FaRegEdit className='icons'/>
        </div>
    </div>
    
  )
}

export default Todo