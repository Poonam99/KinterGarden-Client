import React, { useContext, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../image/kintergarden.png';
import { Link } from 'react-router-dom';



import { FaMoon, FaSun, FaUserAlt } from "react-icons/fa";
import { Button, Image } from 'react-bootstrap';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import Leftsidenav from '../../Pages/Share/Leftsidenav/Leftsidenav';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    const [value, setValue] = useState(true)
    const handleValue = (event) => {
        if (value === true) {
            event.target.value = false
            setValue(event.target.value);

        }
        else {
            event.target.value = true
            setValue(event.target.value);
        }
    }
    return (
        <div>
            <Navbar collapseOnSelect className='mb-4' expand="lg" bg="light" variant="light">
                <Container className='d-flex'>
                    <img src={logo} alt="" />
                    <Navbar.Brand><Link to={'/'}>Kintergarden</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href='/course'>Courses</Nav.Link>
                            <Nav.Link href='/faq'>FAQ</Nav.Link>
                            <Nav.Link href='/blog'>Blog</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user?.uid ?
                                    <>
                                        <Button variant="link" onClick={handleSignOut}>Sign Out</Button>
                                    </>
                                    :
                                    < >
                                        <Link className='me-3' to={'/login'}>Sign In</Link>
                                        <Link className='me-3' to={'/register'}>Sign Up</Link>
                                    </>
                            }
                            <div data-toggle="tooltip" data-placement="bottom" title={user?.displayName}>
                                {user?.photoURL ?
                                    <Image
                                        style={{ height: '30px' }}
                                        roundedCircle
                                        src={user?.photoURL}
                                    ></Image>
                                    : <FaUserAlt />
                                }
                            </div>
                            <Button variant='transparent' className='ms-2' onClick={handleValue}>{
                                value ?
                                    <div data-toggle="tooltip" data-placement="bottom" title='Night' >
                                        <FaMoon />
                                    </div>
                                    :
                                    <div data-toggle="tooltip" data-placement="bottom" title='Day'>
                                        <FaSun />
                                    </div>
                            }</Button>
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