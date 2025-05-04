import HeroSection from './pages/HeroSection'
import Service from './pages/Service'
import Blogs from './pages/Blogs'


 
function App() {
  return (
    <div className='bg-[var(--color-background)] min-h-screen overflow-x-hidden'>
      {/* #hero section */}
      <HeroSection/>
      
      {/* #services section */}
      <Service />
      
      {/* #blogs section */}
      <Blogs />
      
    </div>
  )
}

export default App
