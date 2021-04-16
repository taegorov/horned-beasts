import { Component } from 'react';
import React from 'react';
import items from '../data.json';
import { CardColumns as BoxColumns, Card as Box, Container } from 'react-bootstrap';
import PopModal from './modal.js';
import BeastForm from './beastform.js';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hornsArray: [],
    };
  }

  filterHorns = (value) => {
    if (value === isNaN) {
      this.setState({ hornsArray: [] });
    } else {
      const newArray = items.filter(horns => horns.horns === value);
      this.setState({ hornsArray: newArray });
      console.log('filtering', newArray);
    }
  }


  render() {
    if (this.state.hornsArray.length > 0) {
      return (
        <>
          <Container>
            <BeastForm filterHorns={this.filterHorns} />
          </Container>
          <BoxColumns>
            {this.state.hornsArray.map(item => (
              <LikedPic
                title={item.title}
                description={item.description}
                imgUrl={item.image_url}
                horns={item.horns}
              />
            ))}
          </BoxColumns>
        </>
      );
    } else {
      return (
        <>
          <Container>
            <BeastForm filterHorns={this.filterHorns} />
          </Container>
          <BoxColumns>
            {items.map(item => (
              <LikedPic
                title={item.title}
                description={item.description}
                imgUrl={item.image_url}
                horns={item.horns}
              />
            ))}
          </BoxColumns>
        </>
      );
    }
  }
}

class LikedPic extends Component {

  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
      showModal: false,
    };
  }

  addFavorite = () => {
    this.setState({ likes: this.state.likes + 1, showModal: true });
  }

  handleClose = () => {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <>
        <PopModal
          showModal={this.state.showModal}
          handleClose={this.handleClose}
          title={this.props.title}
          description={this.props.description}
          imgUrl={this.props.imgUrl}>
        </PopModal>
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
      </>
    );
  }
}


export default Main;
