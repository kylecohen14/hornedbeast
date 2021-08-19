import React from 'react';
import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
import { Component } from 'react';

class Hornform extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  changedHorns = (event) => {
    event.preventDefault();
    // this.props.changeHorns(event.target.value);
    this.props.filterHorns(event.target.value);
  };
  // submitForm = (event) => {
  //   event.preventDefault();
  //   this.props.filterHorns(event.target.value);
  // };
  render () {
    return (
      <>
        <Form>
          {/* <Form.Select aria-label="Default select example"> */}
          <Form.Label>Horns</Form.Label>
          <Form.Control as="select" onChange={this.changedHorns} style={{width: '300px'}}>
            <option value="default"> Filter beast by amount of horns</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="100">Hundred</option>
            {/* </Form.Select> */}
          </Form.Control>
          {/* <Button onClick={this.submitForm} varient="secondary" type="submit">Submit</Button> */}
        </Form>
      </>
    );
  }
}

export default Hornform;
