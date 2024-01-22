import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
        <p className="blue-gradient_text">NP</p>
      </NavLink>
      <nav className="flex text-lg gap-7 front-medium">
        <NavLink to="/about" className={isActive => (isActive ? 'text-black underline': 'text-blue-500')} style={{textDecorationLine: 'overline'}}>
          Infos
        </NavLink>  
        <NavLink to="/projects" className={isActive => (isActive ? 'text-black underline': 'text-blue-500')} style={{textDecorationLine: 'overline'}}>
          Projekte
        </NavLink>  
        <NavLink to="/Lebenslauf" className={isActive => (isActive ? 'text-black underline' : 'text-blue-500')} style={{textDecorationLine: 'overline'}}>
            Lebenslauf
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
