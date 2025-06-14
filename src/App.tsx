import './App.css'
import Hero from './Hero'
import Navbar from './Navbar'
import Projects from './Projects'

function App() {


  return (
    <div className="Container  border-black max-w-[1024px] m-auto ">
      <Navbar/>
      <Hero/>
      <Projects/>
    </div>
  )
}

export default App
