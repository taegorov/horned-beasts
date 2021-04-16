import { Component } from 'react';
import Form from 'react-bootstrap/Form';
// import items from '../data.json';

class BeastForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  handleSubmit = (event) => {
    this.props.filterHorns(parseInt(event.target.value));
  }

  render() {
    return (
      <Form.Group>
        <Form.Control as="select" size="lg" onChange={this.handleSubmit} >
          <option value=''>Select Number of Horns</option>
          <option value="1">1 horn</option>
          <option value="2">2 horns</option>
          <option value="3">3 horns</option>
          <option value="100">WOW</option>
        </Form.Control>
      </Form.Group>
    );
  }
}



export default BeastForm;
