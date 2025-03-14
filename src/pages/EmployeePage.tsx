
type Props = {
    create : boolean
}

const EmployeePage = (props : Props) => {
  return (
    <div>
        {props.create ? (
            <p>Creation d'un employé</p>
        ) : (
            <p>Modification de Prénom nom</p>
        )}
    </div>
  )
}

export default EmployeePage