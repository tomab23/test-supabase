import Accordions from "../components/Accordions"
import EmployeeCard from "../components/EmployeeCard"
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

    <div className="flex max-sm:flex-col max-sm:items-center justify-center gap-4 my-20">
    <EmployeeCard />
    <EmployeeCard />
    <EmployeeCard />
    </div>

    <div className='flex justify-center mb-20 max-sm:px-5'>
      <Accordions />
    </div>

    <Footer />
    </>
  )
}

export default LandingPage