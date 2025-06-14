import './App.css'
import Hero from './Hero'
import Navbar from './Navbar'
import Projects from './Projects'
import Toggle from './Toggle'

function App() {


  return (
    <div className="Container  border-gray-500  m-auto border-r border-l max-w-[1024px] ">
      <Navbar/>
      <Hero/>
       <h1 className="text-2xl font-[700]  sm:ml-40 md:ml-60 ml-12">Projects</h1>
      <Projects title='helixAI' subtitle='landing page'/>
      <Projects title='BlueTown' subtitle='3D Virtual space for distance learners'/>
      <Projects title='helixAII' subtitle='landing page'/>
      <Toggle/>
    </div>
  )
}

export default App
