import React from 'react';
import { Link } from 'react-router-dom';


const  Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info justufy-content-center">
        <div className="container">
          <h1>
            <Link to={'/'} className="text-secondary">Test ARKON</Link>
          </h1>
          <div className="d-flex justufy-content-cenetr align-items-center">
            <Link to={'/task/newTask'} className="btn btn-danger new-work d-block d-md-inline-block">
              Agregar nueva Tarea &#43;
            </Link>
          </div>
        </div>
    </nav>
  );
}

export default Header;