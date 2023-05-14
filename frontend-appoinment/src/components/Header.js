/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {Link} from 'react-router-dom';

export default function Header() {
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link to='/' className="navbar-brand" style={{color: "blue"}}>MedCare</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to='/' className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/register' className="nav-link">Register</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/appoinments' className="nav-link">Appoinment</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/add-appoinment' className="nav-link">Add Appoinment</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/clinics' className="nav-link">Clinic</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/add-clinic' className="nav-link">Add Clinic</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/employee' className="nav-link">Employee</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/add-employee' className="nav-link">Add Employee</Link>
                        </li>
                        <li className="nav-item">
              <Link to="/add-medicine" className="nav-link">
                Add Medicine
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/medicine-categories" className="nav-link">
                Medicine Categories
              </Link>
            </li>
            <li className="nav-item">
                            <Link to='/login' className="nav-link">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}