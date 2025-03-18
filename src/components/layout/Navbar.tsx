import { useNavigate } from "react-router";
import NavbarLogPart from "./NavbarLogPart";

type Props = {
  log: boolean
}

const Navbar = (props : Props) => {

  const navigate = useNavigate();

  const backHome = () => {
    if(props.log) {
      navigate('/home')
    }
  }

  return (
    <div className="navbar bg-base-300 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl" onClick={backHome}>Supabase</a>
      </div>
      {/* BUTTONS */}
      {props.log ?
      (
        <NavbarLogPart />
      ) :
    (
      <div className="flex items-center gap-3">
      <button className="btn" onClick={() => navigate("/sign")}>Inscription</button>
      <button className="btn btn-ghost" onClick={() => navigate("/login")}>Connexion</button>
    </div>
    )
      }
    </div>
  );
};

export default Navbar;
