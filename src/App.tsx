import HeroSection from './pages/HeroSection'
import Service from './pages/Service'
import Blog from './pages/Blog'

function App() {
  return (
    <div className='bg-[var(--color-background)] min-h-screen overflow-x-hidden'>
      {/* #hero section */}
      <HeroSection/>
      
      {/* #services section */}
      <Service />
      
      {/* #blog section */}
      <Blog />
    </div>
  )
}

export default App
