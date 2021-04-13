import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, CardColumns as BoxColumns, Card as Box, Navbar } from 'react-bootstrap';
import { Component } from 'react';
import items from './data.json';

// Code inspired by demo lab written by Code Fellows instructor JB Tellez

function App() {

  return (
    <Container fluid>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home" id="HB">Horned Beasts</Navbar.Brand>
      </Navbar>

      <BoxColumns>

        {items.map(item => (
          <LikedPic
            title={item.title}
            description={item.description}
            imgUrl={item.image_url}
          />
        ))}

      </BoxColumns>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#bio">Tim Egorov</Navbar.Brand>
      </Navbar>
    </Container>
  );
}

class LikedPic extends Component {

  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
    };
  }

  addFavorite = () => {
    this.setState({ likes: this.state.likes + 1 });
  }

  render() {
    return (
      <Box
        bg="light"
        text="dark"
        onClick={this.addFavorite}
      >
        <Box.Img src={this.props.imgUrl} variant="top" />
        <Box.Body>
          <Box.Title>{this.props.title}</Box.Title>
          <Box.Text>
            🔥 = {this.state.likes}

          </Box.Text>
          <Box.Text>
            {this.props.description}
          </Box.Text>
        </Box.Body>
      </Box>
    );
  }
}

export default App;
