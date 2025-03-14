import Accordions from "../components/Accordions"
import EmployeePart from "../components/employee/EmployeePart"
import Hero from "../components/Hero"
import Footer from "../components/layout/Footer"
import Navbar from "../components/layout/Navbar"

const LandingPage = () => {


  
  return (
    <>
        <Navbar />

    <div className="flex justify-center mt-20">
      <Hero />
    </div>

    <EmployeePart />

    <div className='flex justify-center mb-20 max-sm:px-5'>
      <Accordions />
    </div>

    <Footer />
    </>
  )
}

export default LandingPage