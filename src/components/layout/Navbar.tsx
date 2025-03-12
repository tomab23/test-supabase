const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Supabase</a>
      </div>
      {/* BUTTONS */}
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Link</a>
          </li>
          <li>
          <a>Link</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
