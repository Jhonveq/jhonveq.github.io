import React from 'react'
import WorkItem from './WorkItem'

const data = [
    {
     year: 2024,
     title: "Metro PCS",
     duration: "Currently",
     detail: "I'm currently working at this company as a customer service and sales representative, it is my oportunity to continue growing my soft skills and the schedule matches with the time I use to learn code.",
    },
    {
     year: 2020,
     title: "AT&T",
     duration: "4 Years",
     detail: "I manage a call center service with more than 200 people under my herarchy, great opportunity to develop my coaching skills and learn how to work as a team to reach goals.",
    },
    {
     year: 2014,
     title: "Velcel Tech",
     duration: "6 Years",
     detail: "I have worked at this tech company where my role was basically customer service, hardware and software repair. This was my first approach to the Tech industry by undersating how a software works in certain devices.",
    }
] 

const Work = () => {
  return (
    <div className='m-width-[1040px] m-auto md:pl-20 p-4 py-16' id='work'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
        {
            data.map((item, id) => (
                <WorkItem 
                key= {id}
                year={item.year}
                title={item.title}
                duration={item.duration}
                detail={item.detail}
                />
            ))
        }
    </div>
  )
}

export default Work