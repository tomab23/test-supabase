import EmployeeCard from "./EmployeeCard"
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Employee from "../../models/Employee";
import { SUPABASE_KEY_PROJECT, SUPABASE_PROJECT } from "../../constants/SupabaseConst";

const supabase = createClient(SUPABASE_PROJECT, SUPABASE_KEY_PROJECT);



const EmployeePart = () => {

    const [employees, setEmployees] = useState<Employee[]>([]);

    useEffect(() => {
      getEmployees();
    }, []);

    async function getEmployees() {
      const { data } = await supabase.from("employees").select();
      setEmployees(data);
    }

  return (
    <div className="flex max-sm:flex-col max-sm:items-center justify-center gap-4 my-20">
        {employees.map((employee) => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))}
    </div>
  )
}

export default EmployeePart