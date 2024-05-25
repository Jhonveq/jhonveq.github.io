import React from 'react'
import ProjectItem from './ProjectItem'
import rickAndMortyApp from '../assets/rickAndMortyProject.jpg'
import pokemonApp from '../assets/pokemonProject.jpg'
import stopwatch from '../assets/stopwatch.png'
import gizmoGalaxy from '../assets/gizmoGalaxy.png'
import xflix from '../assets/Xflix.png'


const Projects = () => {
  return (
    <div id="projects" className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
        <p className='py-8 text-center'>
          These are my most relevants projects, in most of them I consumed a public API and its information ithas been displayed.
        </p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img={gizmoGalaxy} title="GizmoGalaxy E-commerce"  link={"https://gizmogalaxy.netlify.app/"}/>
            <ProjectItem img={stopwatch} title="Stopwatch App"  link={"https://main--j-stopwatch.netlify.app/"}/>
            <ProjectItem img={rickAndMortyApp} title="Rick & Morty App"  link={"https://reliable-chaja-2870b8.netlify.app/"}/>
            <ProjectItem img={pokemonApp} title="Pokemon App" link={"https://graceful-valkyrie-410d64.netlify.app/#/pokedex"} />
            <ProjectItem img={xflix} title="Xflix Clon" link={"https://ecsflix.netlify.app/"} />
        </div>
    </div>
  )
}

export default Projects