import './App.css'
import Accordions from './components/Accordions'
import Navbar from './components/layout/Navbar'

function App() {

  return (
    <>
    <Navbar />
    <p className='text-center'>App test <b>supabase</b></p>

    <div className='flex justify-center mt-20'>
      <Accordions />
    </div>
    </>
  )
}

export default App
