import React from 'react';
import {Link} from 'react-router-dom';
import css from '../styles/NavBar.module.css';

function NavBar() {
    return (
        <div className={css.body}>
            <Link to='/' className={css.logo}>MedCare</Link>
            {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button> */}
            <nav className={css.navigation}>              
  <Link to='/appoinments'>Appoinment</Link>
  <Link to='/clinics'>Clinic</Link>
  <Link to='/employees'>Employee</Link>
  <Link to='/medicines'>Medicine</Link>
  <Link to='/register' className={css.blinkButton}>Register</Link> 
  <Link to='/login' className={css.blinkButton}>Login</Link>  
</nav>
        </div>
    )
}

export default NavBar;