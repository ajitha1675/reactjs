import { type } from '@testing-library/user-event/dist/type';
import React from 'react'

const ChildComp = ({props, handleFunc}) => {
    
    return(
        <button className="px-4 py-1.5 bg-green-400 rounded text-white" 
        onClick={handleFunc} 
        type={type}>
            {props }
            ChildComp
        </button>
    )
}

export default ChildComp;

 