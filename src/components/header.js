import { Navbar } from 'react-bootstrap';
import { Component } from 'react';
import { Container } from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home" id="HB">Horned Beasts</Navbar.Brand>
        </Container>
      </Navbar>
    );
  }
}


export default Header;
