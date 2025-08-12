import React from 'react'

const Footer = () => {
  return (


    <>

      <div className="high-part bg-dark py-5 text-white text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="inner">
                <h2>LOCATION</h2>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>

              </div>


            </div>
            <div className="col-md-4">
              <div className="inner">
                <h2>AROUND THE WEB</h2>
                <ul className='list-unstyled d-flex justify-content-center gap-3'>
                  <li><i className='fa-brands fa-facebook'></i></li>
                  <li><i className='fa-brands fa-twitter'></i></li>
                  <li><i className='fa-brands fa-linkedin'></i></li>
                  <li><i className="fa-solid fa-globe"></i></li>
                </ul>

              </div>


            </div>
            <div className="col-md-4">
              <div className="inner">
                <h2>ABOUT FREELANCER</h2>
                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer