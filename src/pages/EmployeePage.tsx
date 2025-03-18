import Navbar from "../components/layout/Navbar"

type Props = {
    create : boolean
}

const EmployeePage = (props : Props) => {
  return (
    <div>
      <Navbar log={true} />
        {props.create ? (
            <p>Creation d'un employé</p>
        ) : (
            <p>Modification de Prénom nom</p>
        )}
    </div>
  )
}

export default EmployeePage