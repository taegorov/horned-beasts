import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'react-bootstrap';
import React from 'react'; 
import Main from './components/main.js';
import Header from './components/header.js';
import Footer from './components/footer.js';

// Code inspired by demo lab written by Code Fellows instructor JB Tellez


class App extends React.Component {
  render() {
    return (
      <Container fluid>
        <Header />
        <Main />
        <Footer />
      </Container>
    );
  }
}

export default App;
