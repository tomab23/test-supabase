import { useNavigate } from "react-router"
import i1 from "../assets/i1.svg"

const Hero = () => {

    const navigate = useNavigate();

  return (
    <div className="hero bg-base-100 ">
  <div className="hero-content flex-col lg:flex-row-reverse gap-10 max-sm:gap-5">
    <img
      src={i1}
      className="max-w-xs rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold md:w-[35rem]">App test <b className="uppercase">supabase</b></h1>
      <p className="py-6">
        Une application pour gérer les employés de votre entreprise.
      </p>
      <button className="btn btn-primary" onClick={() => navigate('/create')}>Ajouter un employé</button>
    </div>
  </div>
</div>
  )
}

export default Hero