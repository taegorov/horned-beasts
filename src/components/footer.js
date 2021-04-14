import { Navbar } from 'react-bootstrap';
import { Component } from 'react';
import { Container } from 'react-bootstrap';


class Footer extends Component {
  render() {
    return (
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#bio">Tim Egorov</Navbar.Brand>
        </Container>
      </Navbar>
    );
  }
}

export default Footer;
