// Standard navigation using bootstrap

import { Link } from 'react-router-dom'

const MainNavigation = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
            <Link to={"/"} className="navbar-brand" style={{color: "red"}}>Alca Reddit App</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon bg-light"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-nav">
                        <Link to={"/create-thread"} className="nav-link" style={{color: "red"}}>Create Thread</Link>
                        <Link to={"/thread-list"} className="nav-link" style={{color: "red"}}>Thread List</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default MainNavigation;
