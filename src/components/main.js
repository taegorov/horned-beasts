import { Component } from 'react';
import items from '../data.json';
import { CardColumns as BoxColumns, Card as Box } from 'react-bootstrap';
import PopModal from './modal.js';

class Main extends Component {
  render() {
    return (
      <BoxColumns>

        {items.map(item => (
          <LikedPic
            title={item.title}
            description={item.description}
            imgUrl={item.image_url}
          />
        ))}

      </BoxColumns>
    );
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
