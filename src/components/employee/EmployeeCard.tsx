import { CircleUserRound } from 'lucide-react';
import Employee from '../../models/Employee';
import { useNavigate } from 'react-router';


type EmployeeProps = {
 employee : Employee
}

const EmployeeCard = (props : EmployeeProps) => {

  const navigate = useNavigate();

  return (
    <div className="card card-md bg-base-300 w-52 shadow-sm">
  <figure className="px-8 pt-8">
    <CircleUserRound size={60}/>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{props.employee.firstname} {props.employee.lastname}</h2>
    <p>{props.employee.nationality}</p>
    <div className="card-actions mt-2">
      <button className="btn btn-primary" onClick={() => navigate('/update')}>Modifier</button>
    </div>
  </div>
</div>
  )
}

export default EmployeeCard