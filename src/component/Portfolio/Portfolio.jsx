import React, { useState } from 'react'
import img1 from "../../assets/poert1.png"
import img2 from "../../assets/port2.png"
import img3 from "../../assets/port3.png"




const Portfolio = () => {
  
const [model, setmodel] = useState("")
const [modelImg, setmodelImg] = useState(null)

const allImages=[img1,img2,img3,img1,img2,img3]
 
function closeImage(e){
if (e.target.tagName !="IMG"){
setmodel("")
}
  
}

  return (
  <>
  
  <div className=" portfolio text-center vh-90  bg-white pt-3 ">
    <div className="container">

  <h1 className='fs-1 fw-bold mt-3'>PORTFOLIO COMPONENT</h1>


<div className='icon position-relative '>
     <i className="fa-solid fa-star mx-3 "></i>
</div>
  

  <div className="row mt-1 mb-3 g-5">

      {allImages.map((item,index)=>

      <div key={index} className="col-md-4">
      <div onClick={() =>{setmodel(true) , setmodelImg(item)}} className="inner">
        <img src={item} alt="" className='w-100' />
        <div className="layer"><i className="fa-solid fa-plus fa-6x text-white"></i></div>
      </div>
    </div>
 )}

 </div>




{model? <div onClick={closeImage} className='position-fixed d-flex  align-items-center justify-content-center top-0 start-0 bottom-0 end-0 bg-black bg-opacity-50'>
  <img src={modelImg} width={"40%"} alt="" />

 </div>:""}

















    </div>


  
  </div>
  
  
  
  
  
  </>
  )
}

export default Portfolio