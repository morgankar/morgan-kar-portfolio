import './App.css'
import Hero from './Hero'
import Navbar from './Navbar'
import Projects from './Projects'

function App() {


  return (
    <div className="Container border-6 border-black w-[100vw] h-[100vh]">
      <Navbar/>
      <Hero/>
      <Projects/>
    </div>
  )
}

export default App
