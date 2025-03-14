

const Navbar = () => {
  return (
    <div className="navbar bg-base-300 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Supabase</a>
      </div>
      {/* BUTTONS */}
      <div className="flex items-center gap-3">

        <button className="btn">Inscription</button>

        <button className="btn btn-ghost">Connexion</button>
      </div>
    </div>
  );
};

export default Navbar;
