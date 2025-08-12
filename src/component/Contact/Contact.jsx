import React from 'react'

const Contact = () => {
  return (
  <>
  
   <div className=" portfolio text-center vh-90  bg-white pt-3 ">
  
  <h1 className='fs-1 fw-bold mt-3'>CONTACT SECTION</h1>


<div className='icon position-relative '>
     <i className="fa-solid fa-star mx-3 "></i>
</div>



<div className="container w-50 mx-auto">

<form>
<input type="text" id='userName' name='userName' placeholder='User Name' 
className='form-control my-5'/>


<input type="number" id='userAge' name='userAge' placeholder='User Age' 
className='form-control mb-5'/>



<input type="email" id='userEmail' name='userEmail' placeholder='User Email' 
className='form-control mb-5'/>




<input type="passward" id='userPassward' name='userPassward' placeholder='User Passward' 
className='form-control mb-5'/>



<button type="button" className="btn bg-green d-block text-white">Send Message</button>

</form>




</div>


  </div>
  
  </>
  )
}

export default Contact