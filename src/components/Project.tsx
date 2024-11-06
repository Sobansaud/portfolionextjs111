import React from 'react'
import Heading from './Heading'
import Card from './Card'

const data = [
    {
        id:0,
        title:"CountDown Timer",
        desc:"A Next.Js And Typescript Powered Website To Track Time With An Interactive Countdown Feature.",
        img: "/project-01.jpg.jpeg",
        tags:["React" , "Node" , "CSS" , "Typescript" ,"Next.Js"],
    },
    {
        id:1,
        title:"Amazon HomePage",
        desc:"This Is A Home Page Of Amazon With The Help  Html And Css",
        img: "/project-02.jpg.jpeg",
        tags:["HTML" , "CSS" ,"Typescript", "Javascript" ],
    },
    {
        id:2,
        title:"Portfolio ",
        desc:"This is A Basic And Simple Portfolio And Includes Only Name , Skills And Experience",
        img: "/project-03.jpg.jpeg",
        tags:["HTML" , "CSS" ,"Typescript", "Javascript"],
    },
    {
        id:3,
        title:"Static InterActive Resume",
        desc:"A Typescript Based Interactive Resume Built With Html And Css ",
        img: "/project-04.jpg.jpeg",
        tags:["HTML" , "CSS" ,"Typescript", "Javascript"],
    },
    {
      id:4,
      title:"Majestic Lion Illustration in Adobe Photoshop",
      desc:"I created a stunning lion illustration using Adobe Photoshop, showcasing vibrant colors and intricate details",
      img:"/project-05.jpg.jpeg",
      tags:["Adobe Photoshop"],
    },
    {
      id:5,
      title:"Simple Calculator",
      desc:"A simple calculator created with HTML and CSS, featuring a clean design for basic arithmetic operations.",
      img:"/project-06.jpg.jpeg",
      tags:["HTML" , "CSS" ,"Typescript" , "Javascript"],

    },
    {
      id:6,
      title:"Olympic Logo",
      desc:"The Olympic logo consists of five interlocking rings, colored blue, yellow, black, green, and red on a white background. Each ring represents one of the five continents: Africa, the Americas, Asia, Europe, and Oceania.",
      img:"/project-07.jpg.jpeg",
      tags:["Adobe Illustrator" , "Sketch"],
    }

]



const project = () => {
  return (
    <div id='projects' className='container pt-32 '>
       <Heading title='Project'/>
       <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
           {data.map((el) => (<Card 
           key={el.id}
         title={el.title}
           desc={el.desc}
           img={el.img}
           tags={el.tags}
           />))}
       </div>
      
    </div>
  )
}
export default project
