import React from 'react'
import ChildComp from './ChildComp'

const ParentComp = ()  => {
    const updateButton = "Update";

const handleUpdate = () => {
    console.log('Update button triggered ');
    
}

const handleSubmit = () => {
    console.log('Submit button triggered ');
    
} 
  return (
  
    <div> 
       <h1 className='text-center mb-47 '>ParentComp</h1> 
       <div className='flex gap-5'>
       <ChildComp props={updateButton} handleFunc={handleUpdate}  type={"update"}/> 
       <ChildComp props="submit" handleFunc={handleSubmit} type={"submit"}/>
       </div>
      </div>
      
  )
}

export default ParentComp;