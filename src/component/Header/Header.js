import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaUserAlt } from "react-icons/fa";
import { Button, Image } from 'react-bootstrap';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import Leftsidenav from '../../Pages/Share/Leftsidenav/Leftsidenav.js'

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <Navbar collapseOnSelect className='mb-4' expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand><Link to={'/'}>Dragon News</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link>All News</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user?.uid ?
                                    <>
                                        <Button variant="link" onClick={handleSignOut}>Sign Out</Button>
                                        <span className='ms-3'>{user?.displayName}</span>
                                    </>
                                    :
                                    < >
                                        <Link className='me-3' to={'/login'}>Sign In</Link>
                                        <Link className='me-3' to={'/register'}>Sign Up</Link>
                                    </>
                            }
                            <Link to='/profile' >
                                {user?.photoURL ?
                                    <Image
                                        style={{ height: '30px' }}
                                        roundedCircle
                                        src={user?.photoURL}
                                    ></Image> : <FaUserAlt />
                                }
                            </Link>
                        </Nav>
                        <div className='d-lg-none'>
                            <Leftsidenav></Leftsidenav>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;