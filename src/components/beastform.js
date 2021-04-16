import { Component } from 'react';
import Form from 'react-bootstrap/Form';

class BeastForm extends Component {

  handleSubmit = (event) => {
    this.props.filterFunction(parseInt(event.target.value));
  }

  render() {
    return (

      <Form.Group>

        <Form.Control as="select" size="lg" onChange={this.handleSubmit}>
          <option>Select Number of Horns</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="100">WOW</option>
        </Form.Control>
      </Form.Group>

    );
  }
}

export default BeastForm;
