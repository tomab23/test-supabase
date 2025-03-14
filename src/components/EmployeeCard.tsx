import { CircleUserRound } from 'lucide-react';
// import Employee from '../models/Employee';

// type EmployeeProps = {
//  employee : Employee
// }

const EmployeeCard = () => {
  return (
    <div className="card card-md bg-base-300 w-52 shadow-sm">
  <figure className="px-8 pt-8">
    <CircleUserRound size={60}/>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Prénom nom</h2>
    <p>Nationalité</p>
    <div className="card-actions mt-2">
      <button className="btn btn-primary">Modifier</button>
    </div>
  </div>
</div>
  )
}

export default EmployeeCard