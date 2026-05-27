import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark py-3 shadow">
      <div className="container flex-column">
      <h1 className="text-white fw-bold mb-2">Movie App</h1>
      <ul className="nav gap-3">
        <li className="nav-item">
          <Link to={"/TopRated"}className="nav-link">Top Rated</Link>
        </li>
      
        <li className="nav-item">
            <Link to={"/Comedy"} className="nav-link">Comedy</Link>
        </li>
        <li className="nav-item">
            <Link to={"/Horror"} className="nav-link">Horror</Link>
        </li>
         <li className="nav-item">
          <Link to={"/Action"} className="nav-link">Action</Link>
        </li>
          <li className="nav-item">
          <Link to={"/About"} className="nav-link">About</Link>
        </li>
       
      </ul>
    </div>
 </nav>
  );
}; 
export default NavBar;
