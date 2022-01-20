import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { Modal } from '../cards/components/Modal';

export const Navbar = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate('/login', {
            replace: true
        });
    }

    let [modalHandle, setModalHandle] = useState({ show: false })

    const showModal = () => {
        document.body.style.overflow = "hidden";
        setModalHandle({ show: true });
    };

    const hideModal = () => {
        document.body.style.overflow = "auto";
        setModalHandle({ show: false });
    };

    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark todo-nav" style={{ paddingLeft: '2rem'}}>
                <Link
                    className="navbar-brand"
                    to="/"
                >
                    ToDo App
                </Link>
                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                    <ul className="navbar-nav ml-auto">
                        <span className='nav-item nav-link text-info'>Ana Rivera</span>
                        <button
                            className="nav-item nav-link btn btn-dark"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </ul>
                </div>
            </nav>
            <nav>
                <div className="top-div nav-top menu-nav row">
                    <div className="col">
                        <h2 className="text-dark">Cards list</h2>
                    </div>
                    <div className="col justify-content-end align-last">
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={ showModal }
                        >New note</button>
                    </div>
                </div>
            </nav>
            <Modal show={ modalHandle.show } handleClose={ hideModal } />
        </>

    )
}