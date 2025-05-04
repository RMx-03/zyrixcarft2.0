import HeroSection from './pages/HeroSection'
import Service from './pages/Service'
// import CircularNavApp from './pages/CircularNavApp'


 
function App() {
  return (
    <div className='bg-[var(--color-background)] min-h-screen overflow-x-hidden'>
      {/* #hero section */}
      <HeroSection/>
      
      {/* #services section */}
      <Service />
      
      
    </div>
  )
}

export default App
