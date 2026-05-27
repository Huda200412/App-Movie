import { Link } from "react-router-dom";
const NavBar = () => {
  return (
      <div className="navbar">
      <h1 >Movie App</h1>
      <ul>
        <li>
          <Link to={"/TopRated"}className="nav-link">Top Rated</Link>
        </li>
      
        <li>
            <Link to={"/Comedy"} className="nav-link">Comedy</Link>
        </li>
        <li>
            <Link to={"/Horror"} className="nav-link">Horror</Link>
        </li>
         <li>
          <Link to={"/Action"} className="nav-link">Action</Link>
        </li>
          <li>
          <Link to={"/About"} className="nav-link">About</Link>
        </li>
       
      </ul>
    </div>
  );
}; 
export default NavBar;
