import React from 'react'
import avatar from "../../assets/avatar.svg"

const Home = () => {
  return (
<>
<div className="  vh-90 d-flex align-items-center justify-content-center flex-column bg-green ">
<div className="inner">
  <img src={avatar} alt="" />
  <h1 className='fs-1 fw-bold text-white mt-3'>START FRAMEWORK</h1>
</div>

<div className='icon position-relative'>
     <i className="fa-solid fa-star mx-3 text-white"></i>
</div>
<p className='text-white'>
  Graphic Artist - Web Designer - Illustrator
</p>

</div>











</>
  )
}

export default Home