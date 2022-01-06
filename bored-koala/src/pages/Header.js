import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'

const Header = () => {
  return (
    <div>
      {/* <p>
        <Link to={'/'}>Home</Link>
      </p>
      <p>
        <Link to={'/about'}>About</Link>
      </p> */}
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='#home'>Bored Koala</Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='#features'></Nav.Link>
              <Nav.Link href='#pricing'></Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to={'/'}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to={'/about'}>
                About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
