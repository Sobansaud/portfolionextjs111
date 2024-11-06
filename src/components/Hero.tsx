// import React from 'react'
// import Navbar from './Navbar'

// const Hero = () => {
//   return (
//     <div id="hero" className='min-h-screen bg-no-repeat bg-[url(/pic2.jpg)]  bg-cover rounded-sm '
//     style={{backgroundSize: "30%" , backgroundPosition: "left 100px top 100px"}} >
//    <Navbar/>

//    <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
//     <div className='hidden lg:block'></div>
//     <div className='text-[80px] sm:text-[100px] font-bold leading-tight flex justify-center items-center'>
//         <div>
//             <p data-aos="zoom-in">I'm</p>
//             <p data-aos="zoom-in">Muhammad Soban</p>
//             <p data-aos="zoom-in">Saud</p>
//         </div>
//     </div>
//    </div>




//     </div>
//   )
// }

// export default Hero


import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div 
      id="hero" 
      className='min-h-screen bg-no-repeat bg-[url(/pic2.jpg)] bg-cover rounded-sm'
      style={{ backgroundSize: "30%", backgroundPosition: "left 100px top 100px" }} 
    >
      {/* Navbar */}
      <Navbar />

      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
        {/* Empty div for layout structure */}
        <div className='hidden lg:block'></div>

        {/* Text content in the center */}
        <div className='text-[80px] sm:text-[100px] font-bold leading-tight flex justify-center items-center'>
          <div>
            {/* Ensure that apostrophes are escaped */}
            <p data-aos="zoom-in">I&apos;m</p> {/* use &apos; for apostrophe */}
            <p data-aos="zoom-in">Muhammad Soban</p>
            <p data-aos="zoom-in">Saud</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
