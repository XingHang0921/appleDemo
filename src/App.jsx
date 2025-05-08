import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'

const App = () => {
  return (
    <main className=" bg-black h-screen text-white">
      <Navbar />
      <Hero />
      <Highlights /> 
      <Model />
    </main>
  )
}

export default App
