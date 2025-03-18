import EmployeeCard from "./EmployeeCard";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Employee from "../../models/Employee";
import {
  SUPABASE_KEY_PROJECT,
  SUPABASE_PROJECT,
} from "../../constants/SupabaseConst";
import { SkeletonCard } from "./SkeletonCard";
import { useNavigate } from "react-router";

const supabase = createClient(SUPABASE_PROJECT, SUPABASE_KEY_PROJECT);

const EmployeePart = () => {

  const navigate = useNavigate();
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    getEmployees();
  }, []);

  async function getEmployees() {
    const { data } = await supabase.from("employees").select();
    setEmployees(data);
  }

  if (employees.length === 0)
    return (
      <div className="flex max-sm:flex-col max-sm:items-center gap-4 my-20">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    );

  return (
    <div className="mx-5 mt-10 flex flex-col gap-3">
      <div className="flex justify-between gap-5">
      <p className="text-xl">Vos employés ({employees.length})</p>
      <button className="btn btn-outline btn-primary btn-sm" onClick={() => navigate("/create")}>+ Ajouter un employé</button>
      </div>
      <div className="flex max-sm:flex-col max-sm:items-center gap-4 mb-20">
        {employees.map((employee) => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))}
      </div>
    </div>
  );
};

export default EmployeePart;
