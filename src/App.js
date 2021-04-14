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


// function App() {

//   return (
//     <Container fluid>
//       <Navbar bg="light" variant="light">
//         <Navbar.Brand href="#home" id="HB">Horned Beasts</Navbar.Brand>
//       </Navbar>

//       <BoxColumns>

//         {items.map(item => (
//           <LikedPic
//             title={item.title}
//             description={item.description}
//             imgUrl={item.image_url}
//           />
//         ))}

//       </BoxColumns>
//       <Navbar bg="light" variant="light">
//         <Navbar.Brand href="#bio">Tim Egorov</Navbar.Brand>
//       </Navbar>
//     </Container>
//   );
// }

// 

export default App;
