import './Navbar.scss';
import communiti from '../../assets/logos/communiti.svg';

const Navbar = () => {

  return (
    <div className="navbar-title">
      <h1>communiti</h1><img src={communiti} alt="fireSpot"/>
    </div>
  )
}

export default Navbar;