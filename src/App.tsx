import './App.css'
import Hero from './Hero'
import Navbar from './Navbar'
import Projects from './Projects'
import Toggle from './Toggle'

function App() {


  return (
    <div className="Container  border-gray-300  m-auto border-r border-l max-w-[900px] ">
      <Navbar/>
      <Hero/>
       <h1 className="text-2xl font-[700] max-w-[510px] m-auto">$ Projects</h1>
      <Projects title='helixAI' subtitle='landing page' img='https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      <Projects title='BlueTown' subtitle='3D Virtual space for distance learners' img='https://plus.unsplash.com/premium_photo-1682689380458-b5f367c49735?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      <Projects title='Terrance' subtitle='landing page' img='https://plus.unsplash.com/premium_vector-1720280909213-9ff40b0f0e7a?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      {/* <Toggle/> */}
    </div>
  )
}

export default App
