import EmployeePart from "../components/employee/EmployeePart"
import EntrepriseInfo from "../components/entreprise/EntrepriseInfo"
import Footer from "../components/layout/Footer"
import Navbar from "../components/layout/Navbar"


const EntreprisePage = () => {
  return (
    <div>
        <Navbar log={true} />
        <h1 className="text-center text-3xl uppercase my-5">Nom de l'entreprise</h1>

        <div className="mx-10 max-sm:mx-2 max-lg:mx-5 max-xl:mx-10">
            <EntrepriseInfo />
        </div>

        <EmployeePart />

        <Footer fixed={true} />
    </div>
  )
}

export default EntreprisePage