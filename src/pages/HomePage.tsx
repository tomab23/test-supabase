import EntrepriseCard from "../components/entreprise/EntrepriseCard"
import Footer from "../components/layout/Footer"
import Navbar from "../components/layout/Navbar"


const HomePage = () => {
  return (
    <div>
        <Navbar log={true} />
        home page

        <div className="mt-10 mx-5 flex gap-5">
            <EntrepriseCard choice={false} />
            <EntrepriseCard choice={true} />
        </div>

        <Footer fixed={true} />
    </div>
  )
}

export default HomePage
