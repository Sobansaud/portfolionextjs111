// import React from 'react'

// const Skills = () => {
//   return (
//     <div id="skills" className='container pt-32'>
// <div className='grid md:grid-cols-2 gap-20 items-center'>
//     <div>
//         <h2 data-aos="zoom-in-down" className='text-4xl md:text-5xl'>Technologies I work with</h2>
//         <p data-aos="flip-up" className='text-blue-700 pt-2 text-2xl'>
//           I Have A Solid Foundation In Web Development , Graphic Designing , Specializing In Html , Css And Javascript.
//           My Experience Extends To Using FrameWork Like React.js And Next.js To Create Dynamic And User-Friendly Applications.
//           I Have 40% Experience In Python Programming Language And I Have Also Experience In Tailwind Css.
//           I Have 2 Years Experience In Adobe Photoshop , Abobe Illustrator And Figma. Now, I Work In Youtube Video Editing.
//           With A Passion Of Learning , I Stay Updated On The Latest Technologies To Enhance My Skill Set And Contribute 
//           Effectively To Projects.
//          </p>
//          </div>
// </div>
//       <div>
//         <br/>
//         <br/>
//         <div data-aos="flip-up" className='grid grid-cols-3 text-accent text-3xl sm:text-4xl '>
//           <div className='space-y-2 text-emerald-700'>
//                <h2>TypeScript</h2>
//                <h2>Next.Js</h2>
//                <h2>JavaScript</h2>
//           </div>
//           <div className='space-y-2 text-orange-700'>
//                <h2>HTML</h2>
//                <h2>CSS</h2>
//                <h2>Python</h2>
//           </div>

//           <div className='space-y-2 text-amber-500'>
//                <h2>Adobe PhotoShop</h2>
//                <h2>Adobe Illustrator</h2>
//                <h2>Video Editor</h2>
//         </div>
//       </div>
//     </div>
//     </div>
//   )
// }

// export default Skills

import React from 'react';

const Skills = () => {
  return (
    <div id="skills" className="container pt-32">
      <h2 className="text-4xl md:text-5xl text-center" data-aos="zoom-in-down">Technologies I Work With</h2>
      <p className="text-blue-700 pt-4 text-xl md:text-2xl text-center" data-aos="flip-up">
        I have a solid foundation in web development, graphic designing, specializing in HTML, CSS, and JavaScript.
        My experience extends to using frameworks like React.js and Next.js to create dynamic and user-friendly applications.
        I also have experience in Python programming and work with Adobe Photoshop, Illustrator, and Figma. Currently, I'm into YouTube video editing.
      </p>
      <div className="grid grid-cols-3 gap-6 text-accent text-xl sm:text-2xl mt-8">
        <div className="space-y-2 text-emerald-700">
          <h3>TypeScript</h3>
          <h3>Next.js</h3>
          <h3>JavaScript</h3>
        </div>
        <div className="space-y-2 text-orange-700">
          <h3>HTML</h3>
          <h3>CSS</h3>
          <h3>Python</h3>
        </div>
        <div className="space-y-2 text-amber-500">
          <h3>Adobe Photoshop</h3>
          <h3>Adobe Illustrator</h3>
          <h3>Video Editing</h3>
        </div>
      </div>
    </div>
  );
};

export default Skills;
